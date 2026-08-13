export default function Timetable() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-3xl font-bold">My Timetable</h1>

      <p className="mt-2 text-gray-600">
        Plan your study sessions for today.
      </p>

      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Add Study Session</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium">
              Subject / Task
            </label>

            <input
              type="text"
              placeholder="Example: Java Arrays"
              className="mt-2 w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Duration
            </label>

            <input
              type="number"
              placeholder="60"
              className="mt-2 w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Start Time
            </label>

            <input
              type="time"
              className="mt-2 w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Break Time
            </label>

            <input
              type="number"
              placeholder="10"
              className="mt-2 w-full rounded-lg border px-4 py-2"
            />
          </div>
        </div>

        <button className="mt-6 rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700">
          Add Session
        </button>
      </section>

      <section className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Today's Sessions</h2>

        <div className="mt-4 space-y-3">
          <div className="flex justify-between rounded-lg bg-gray-50 p-4">
            <span>9:00 AM • Java Arrays</span>
            <span>60 min</span>
          </div>

          <div className="flex justify-between rounded-lg bg-gray-50 p-4">
            <span>10:10 AM • Java Strings</span>
            <span>45 min</span>
          </div>
        </div>
      </section>
    </main>
  );
}