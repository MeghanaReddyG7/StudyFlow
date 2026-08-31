import StudyFlowChat from "@/components/StudyFlowChat";

export default function AIHelpPage() {
  return (
    <main className="min-h-screen bg-slate-100/70 px-4 py-8 text-[var(--foreground)] dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <section className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white px-6 py-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:px-8 sm:py-9">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/5 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600">
                StudyFlow AI
              </p>
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              AI Help
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
              Ask questions, understand difficult concepts, create practice
              questions, or check your study progress.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--primary)]">
                Concept explanations
              </span>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
  Practice questions
</span>

              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
  Study progress
</span>
            </div>
          </div>
        </section>
        <div className="mt-6">
        <StudyFlowChat />
        </div>
      </div>
    </main>
  );
}