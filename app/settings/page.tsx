export default function Settings() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold">Settings</h1>

      <p className="mt-2 text-gray-600">
        Manage your StudyFlow preferences.
      </p>

      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Study Preferences</h2>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm font-medium">
              Daily Study Goal
            </label>

            <input
              type="number"
              placeholder="4"
              className="mt-2 w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Default Break Duration
            </label>

            <input
              type="number"
              placeholder="10"
              className="mt-2 w-full rounded-lg border px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Preferred Study Time
            </label>

            <select className="mt-2 w-full rounded-lg border px-4 py-2">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
          </div>
        </div>

        <button className="mt-6 rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700">
          Save Settings
        </button>
      </section>
    </main>
  );
}