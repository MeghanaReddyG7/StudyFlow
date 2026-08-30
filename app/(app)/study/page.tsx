"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SESSION_DURATION = 45 * 60;

const StudyFlow3D = dynamic(
  () => import("@/components/StudyFlow3D"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[450px] w-full items-center justify-center rounded-[24px] bg-slate-950">
        <div className="text-center text-white">
          <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/20">
            <span className="text-lg font-bold">SF</span>
          </div>
          <p className="text-sm text-white/60">Preparing your focus space...</p>
        </div>
      </div>
    ),
  },
);

export default function Study() {
  const [timeLeft, setTimeLeft] = useState(SESSION_DURATION);
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

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const progress = ((SESSION_DURATION - timeLeft) / SESSION_DURATION) * 100;
  const isComplete = timeLeft === 0;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
              Focus Session
            </p>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Java Arrays
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Stay focused. Your next 45 minutes are yours.
          </p>
        </section>

        <section className="relative mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-100/70 blur-3xl dark:bg-indigo-500/10" />

          <div className="relative px-5 py-8 text-center sm:px-10 sm:py-12">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-slate-50 px-4 py-2 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isComplete
                    ? "bg-emerald-500"
                    : isRunning
                      ? "animate-pulse bg-indigo-500 dark:bg-indigo-400"
                      : "bg-slate-300 dark:bg-slate-600"
                }`}
              />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {isComplete
                  ? "Session Complete"
                  : isRunning
                    ? "Focus Mode"
                    : "Ready to Focus"}
              </p>
            </div>

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
              Time Remaining
            </p>

            <div
              data-testid="study-timer"
              aria-label={`Time remaining ${formattedTime}`}
              aria-live="polite"
              className={`mt-3 font-mono text-6xl font-bold tracking-[-0.05em] sm:text-7xl md:text-8xl ${
                isComplete
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-slate-900 dark:text-slate-100"
              }`}
            >
              {formattedTime}
            </div>

            <div
              className="mx-auto mt-8 h-2 max-w-xl overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label="Study session progress"
            >
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isComplete
                    ? "bg-emerald-500"
                    : "bg-indigo-600 dark:bg-indigo-500"
                }`}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            <div className="mt-3 flex justify-between gap-3 text-[11px] font-medium text-slate-400 dark:text-slate-500 sm:text-xs">
              <span>0 min</span>
              <span>{Math.round(progress)}% complete</span>
              <span>45 min</span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsRunning((running) => !running)}
                disabled={isComplete}
                className="rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:hover:translate-y-0 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:disabled:bg-slate-700"
              >
                {isRunning ? "Pause Session" : "Start Session"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setTimeLeft(SESSION_DURATION);
                  setIsRunning(false);
                }}
                className="rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-700"
              >
                Reset
              </button>
            </div>

            <p className="mt-5 text-xs text-slate-400 dark:text-slate-500">
              Find a comfortable pace and keep distractions away.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
                Focus Space
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Your 3D focus companion
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Adjust the environment to match your study mode.
                </p>
              </div>

              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                Interactive
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] shadow-[0_20px_45px_rgba(15,23,42,0.12)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
            <StudyFlow3D />
          </div>
        </section>
      </div>
    </main>
  );
}