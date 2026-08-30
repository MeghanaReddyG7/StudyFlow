"use client";

import { useState } from "react";

export default function Settings() {
  const [studyGoal, setStudyGoal] = useState("4");
  const [breakDuration, setBreakDuration] = useState("10");
  const [studyTime, setStudyTime] = useState("Morning");
  const [saved, setSaved] = useState(false);

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            StudyFlow
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your StudyFlow preferences.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Study Preferences
          </h2>

          <form onSubmit={handleSave} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="study-goal"
                className="block text-sm font-medium text-slate-700"
              >
                Daily Study Goal (hours)
              </label>

              <input
                id="study-goal"
                type="number"
                min="1"
                max="24"
                value={studyGoal}
                onChange={(event) => setStudyGoal(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label
                htmlFor="break-duration"
                className="block text-sm font-medium text-slate-700"
              >
                Default Break Duration (minutes)
              </label>

              <input
                id="break-duration"
                type="number"
                min="0"
                max="60"
                value={breakDuration}
                onChange={(event) => setBreakDuration(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label
                htmlFor="study-time"
                className="block text-sm font-medium text-slate-700"
              >
                Preferred Study Time
              </label>

              <select
                id="study-time"
                value={studyTime}
                onChange={(event) => setStudyTime(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Save Settings
              </button>

              {saved && (
                <p
                  role="status"
                  className="text-sm font-medium text-emerald-600"
                >
                  ✓ Settings saved
                </p>
              )}
            </div>
          </form>
        </section>

        {/* Appearance */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Appearance
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Theme controls will be available here.
          </p>
        </section>
      </div>
    </main>
  );
}