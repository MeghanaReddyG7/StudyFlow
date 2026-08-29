
"use client";

import { useEffect, useState } from "react";
import StudyFlowChat from "@/components/StudyFlowChat";

export default function Study() {
  const [timeLeft, setTimeLeft] = useState(45 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 0) {
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

        <div
          data-testid="study-timer"
          className="my-10 text-7xl font-bold tracking-wider"
        >
          {formattedTime}
        </div>        
        <button
          type="button"
          onClick={() => setTimeLeft(44 * 60)}
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
        >
        Test Timer
        </button>


      </div>

      <StudyFlowChat />
    </main>
  );
}

