"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export default function Settings() {
  const [studyGoal, setStudyGoal] = useState("4");
  const [breakDuration, setBreakDuration] = useState("10");
  const [studyTime, setStudyTime] = useState("Morning");
  const [saved, setSaved] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const storedTheme = localStorage.getItem("studyflow-theme");

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      setTheme("system");
    }
  }, []);

  const applyTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);

    if (selectedTheme === "system") {
      localStorage.removeItem("studyflow-theme");

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light",
      );
    } else {
      localStorage.setItem("studyflow-theme", selectedTheme);
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
            StudyFlow
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Manage your StudyFlow preferences.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Preferences
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              Study Preferences
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Customize your study routine.
            </p>
          </div>

          <form onSubmit={handleSave} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="study-goal"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
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
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="break-duration"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
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
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="study-time"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Preferred Study Time
              </label>

              <select
                id="study-time"
                value={studyTime}
                onChange={(event) => setStudyTime(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-500/20"
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
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:scale-[0.98]"
              >
                Save Settings
              </button>

              {saved && (
                <p
                  role="status"
                  className="text-sm font-medium text-emerald-600 dark:text-emerald-400"
                >
                  ✓ Settings saved
                </p>
              )}
            </div>
          </form>
        </section>

        <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Appearance
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              Theme
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Choose how StudyFlow looks across the app.
            </p>
          </div>

          <div
            className="mt-6 grid gap-3 sm:grid-cols-3"
            role="group"
            aria-label="Theme selection"
          >
            {(["light", "dark", "system"] as Theme[]).map((option) => {
              const isSelected = theme === option;

              return (
                <button
                  key={option}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => applyTheme(option)}
                  className={`rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100 dark:border-indigo-400 dark:bg-indigo-950/60 dark:text-indigo-300 dark:ring-indigo-500/20"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-750"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold capitalize">
                      {option}
                    </span>

                    {isSelected && (
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white dark:bg-indigo-500"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs opacity-70">
                    {option === "light" && "Bright and clean"}
                    {option === "dark" && "Easy on the eyes"}
                    {option === "system" && "Follow device settings"}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}