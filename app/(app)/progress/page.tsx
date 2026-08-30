export default function Progress() {
  const weeklyProgress = [
    { day: "Monday", value: 78, label: "6.2h" },
    { day: "Tuesday", value: 52, label: "4.1h" },
    { day: "Wednesday", value: 88, label: "7.1h" },
    { day: "Thursday", value: 66, label: "5.3h" },
    { day: "Friday", value: 44, label: "3.5h" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
            StudyFlow
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Your Progress
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Track your study consistency and momentum.
          </p>
        </div>

        {/* Summary cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Study Time
              </p>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                ⏱
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              3h 40m
            </h2>

            <p className="mt-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              +12% this week
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Sessions Completed
              </p>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                ✓
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              4
            </h2>

            <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              Focused sessions this week
            </p>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Current Streak
              </p>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                ★
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              6 days
            </h2>

            <p className="mt-2 text-xs font-medium text-amber-600 dark:text-amber-400">
              Keep the momentum going
            </p>
          </div>
        </div>

        {/* Weekly progress */}
        <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_45px_rgba(0,0,0,0.18)] sm:p-8">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
                This Week
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">
                Weekly Progress
              </h2>
            </div>

            <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
              Study hours
            </span>
          </div>

          <div className="mt-7 space-y-5">
            {weeklyProgress.map((item) => (
              <div
                key={item.day}
                className="grid grid-cols-[76px_1fr_48px] items-center gap-3 sm:grid-cols-[84px_1fr_56px] sm:gap-4"
              >
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {item.day}
                </span>

                <div
                  className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
                  role="progressbar"
                  aria-label={`${item.day} study progress`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={item.value}
                >
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all duration-700 dark:bg-indigo-500"
                    style={{ width: `${item.value}%` }}
                  />
                </div>

                <span className="text-right text-sm font-semibold text-slate-600 dark:text-slate-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Weekly summary */}
          <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between dark:bg-slate-800/70 dark:ring-slate-700">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                You&apos;re building a consistent routine.
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Wednesday was your strongest study day this week.
              </p>
            </div>

            <span className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
              88% peak
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}