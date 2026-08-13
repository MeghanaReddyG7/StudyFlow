"use client";

import { useState } from "react";

export default function Study() {
  const [timeLeft, setTimeLeft] = useState(45 * 60);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-indigo-600">
          CURRENT SESSION
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          Java Arrays
        </h1>

        <p className="mt-2 text-gray-600">
          Focus on your task. You've got this!
        </p>

        <div className="my-10 text-7xl font-bold tracking-wider">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>

        <button
          onClick={() => setTimeLeft((time) => Math.max(0, time - 60))}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Test Timer
        </button>
      </div>
    </main>
  );
}