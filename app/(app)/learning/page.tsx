export default function Learning() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 dark:bg-slate-950 dark:text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
            StudyFlow
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            What did you learn?
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Complete your reflection before moving to the next session.
          </p>
        </div>

        {/* Reflection card */}
        <section className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_20px_45px_rgba(0,0,0,0.18)]">
          <div className="border-b border-slate-100 px-6 py-6 dark:border-slate-800 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  Reflection
                </p>

                <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">
                  Session reflection
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Capture the key ideas you want to remember.
                </p>
              </div>

              <span className="w-fit rounded-full bg-indigo-50 px-3 py-1.5 text-[11px] font-semibold text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-300">
                Java Arrays
              </span>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <label
              htmlFor="learning-reflection"
              className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              Your learning
            </label>

            <textarea
              id="learning-reflection"
              rows={6}
              placeholder="Write what you learned in this session..."
              className="mt-2 w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-950"
            />

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  ✓
                </span>
                <p>Keep it brief and concrete.</p>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 sm:w-auto"
              >
                Submit Learning
              </button>
            </div>
          </div>
        </section>

        {/* Small guidance section */}
        <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-5 py-4 dark:border-indigo-950 dark:bg-indigo-950/30">
          <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-200">
            Quick reflection
          </p>

          <p className="mt-1 text-xs leading-5 text-indigo-700 dark:text-indigo-300">
            Try noting one concept you understood, one thing you found
            challenging, and one thing you want to practice next.
          </p>
        </div>
      </div>
    </main>
  );
}