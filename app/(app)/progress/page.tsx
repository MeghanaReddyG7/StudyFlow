export default function Progress() {
  const weeklyProgress = [
    { day: "Monday", value: 78, label: "6.2h" },
    { day: "Tuesday", value: 52, label: "4.1h" },
    { day: "Wednesday", value: 88, label: "7.1h" },
    { day: "Thursday", value: 66, label: "5.3h" },
    { day: "Friday", value: 44, label: "3.5h" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600">StudyFlow</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your Progress</h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">Track your study consistency and momentum.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <p className="text-sm font-medium text-slate-500">Study Time</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">3h 40m</h2>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <p className="text-sm font-medium text-slate-500">Sessions Completed</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">4</h2>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <p className="text-sm font-medium text-slate-500">Current Streak</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">6 days</h2>
          </div>
        </div>

        <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">Weekly Progress</h2>

          <div className="mt-6 space-y-4">
            {weeklyProgress.map((item) => (
              <div key={item.day} className="grid grid-cols-[84px_1fr_56px] items-center gap-3">
                <span className="text-sm font-medium text-slate-500">{item.day}</span>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-indigo-600" style={{ width: `${item.value}%` }} />
                </div>
                <span className="text-right text-sm font-semibold text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}