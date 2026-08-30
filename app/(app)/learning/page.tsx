export default function Learning() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600">StudyFlow</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What did you learn?</h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">Complete your reflection before moving to the next session.</p>
        </div>

        <section className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Session reflection</h2>
              <p className="mt-1 text-sm text-slate-500">Capture the key ideas you want to remember.</p>
            </div>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-600">Java Arrays</span>
          </div>

          <label htmlFor="learning-reflection" className="block text-sm font-medium text-slate-700">Your learning</label>
          <textarea
            id="learning-reflection"
            rows={6}
            placeholder="Write what you learned in this session..."
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">Keep it brief and concrete.</p>
            <button type="button" className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Submit Learning
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}