export default function Dashboard() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold">Good morning 👋</h1>

      <p className="mt-2 text-gray-600">
        Let's make today productive.
      </p>

      {/* Progress */}
      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Today's Progress</h2>

        <div className="mt-4 h-3 rounded-full bg-gray-200">
          <div className="h-3 w-3/5 rounded-full bg-indigo-600"></div>
        </div>

        <p className="mt-2 text-sm text-gray-600">
          3 of 5 sessions completed
        </p>
      </section>

      {/* Current Session */}
      <section className="mt-6 rounded-xl bg-indigo-600 p-6 text-white">
        <p className="text-sm opacity-80">CURRENT SESSION</p>

        <h2 className="mt-2 text-2xl font-bold">
          Java Arrays
        </h2>

        <p className="mt-2">
          45 minutes
        </p>

        <a
          href="/study"
          className="mt-5 inline-block rounded-lg bg-white px-5 py-2 font-medium text-indigo-600"
        >
          Start Session
        </a>
      </section>

      {/* Today's Schedule */}
      <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">
          Today's Schedule
        </h2>

        <div className="mt-4 space-y-4">
          <div className="flex justify-between border-b pb-3">
            <span>9:00 AM</span>
            <span>Java Arrays ✓</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>10:00 AM</span>
            <span>Break</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>10:15 AM</span>
            <span>Java Strings</span>
          </div>

          <div className="flex justify-between">
            <span>11:15 AM</span>
            <span>DSA Practice</span>
          </div>
        </div>
      </section>
    </main>
  );
}