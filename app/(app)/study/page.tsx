"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const StudyFlow3D = dynamic(
  () => import("@/components/StudyFlow3D"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[450px] w-full items-center justify-center rounded-3xl bg-slate-950">
        <div className="text-center text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/20">
            <span className="text-lg font-bold">SF</span>
          </div>

          <p className="text-sm text-white/60">
            Preparing your focus space...
          </p>
        </div>
      </div>
    ),
  },
);

export default function Study() {
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          setIsRunning(false);
          return 0;
        }

        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds,
  ).padStart(2, "0")}`;

  const progress = ((45 * 60 - timeLeft) / (45 * 60)) * 100;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Focus Session
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Java Arrays
          </h1>

          <p className="mt-2 text-slate-500">
            Stay focused. Your next 45 minutes are yours.
          </p>
        </section>

        {/* Timer */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="px-6 py-8 text-center sm:px-10 sm:py-10">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Time Remaining
            </p>

            <div
              data-testid="study-timer"
              className="mt-5 text-7xl font-bold tracking-[-0.04em] text-slate-900 sm:text-8xl"
            >
              {formattedTime}
            </div>

            <div className="mx-auto mt-7 h-2 max-w-xl overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsRunning((running) => !running)}
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 active:translate-y-0 active:scale-95"
              >
                {isRunning ? "Pause Session" : "Start Session"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setTimeLeft(45 * 60);
                  setIsRunning(false);
                }}
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 active:scale-95"
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* 3D Focus Space */}
        <section className="mt-6">
          <div className="mb-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Focus Space
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Your 3D focus companion
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Use the controls to change your focus mode.
            </p>
          </div>

          <StudyFlow3D />
        </section>

      </div>
    </main>
  );
}