export default function Progress() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold">Your Progress</h1>

      <p className="mt-2 text-gray-600">
        Track your study consistency.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Study Time</p>
          <h2 className="mt-2 text-3xl font-bold">3h 40m</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Sessions Completed</p>
          <h2 className="mt-2 text-3xl font-bold">4</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Current Streak</p>
          <h2 className="mt-2 text-3xl font-bold">6 days</h2>
        </div>
      </div>

      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Weekly Progress</h2>

        <div className="mt-6 space-y-4">
          <div>Monday ███████</div>
          <div>Tuesday █████</div>
          <div>Wednesday ████████</div>
          <div>Thursday ██████</div>
          <div>Friday ███</div>
        </div>
      </section>
    </main>
  );
}