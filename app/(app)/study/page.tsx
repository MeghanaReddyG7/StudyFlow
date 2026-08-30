"use client";

import { useEffect, useState } from "react";

const SESSION_DURATION = 45 * 60;

export default function Study() {
  const [timeLeft, setTimeLeft] = useState(SESSION_DURATION);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          clearInterval(timer);
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

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(SESSION_DURATION);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Current Session
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Java Arrays
          </h1>

          <p className="mt-2 text-slate-500">
            Stay focused. You've got this!
          </p>

          <div
            data-testid="study-timer"
            className="my-10 text-6xl font-bold tracking-wider text-slate-900 sm:text-8xl"
          >
            {formattedTime}
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsRunning((running) => !running)}
              className="rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              {isRunning ? "Pause" : "Start"}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Reset
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            45-minute focused study session
          </p>
        </div>
      </div>
    </main>
  );
}