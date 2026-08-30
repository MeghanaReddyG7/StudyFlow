export default function Learning() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold">What Did You Learn?</h1>

      <p className="mt-2 text-gray-600">
        Complete your reflection before moving to the next session.
      </p>

      <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <label className="text-sm font-medium">
          Your Learning
        </label>

        <textarea
          rows={6}
          placeholder="Write what you learned in this session..."
          className="mt-2 w-full rounded-lg border px-4 py-3"
        />

        <button className="mt-5 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">
          Submit Learning
        </button>
      </section>
    </main>
  );
}