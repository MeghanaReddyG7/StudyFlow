export default async function Health() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600">System check</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {process.env.NEXT_PUBLIC_APP_NAME ?? "StudyFlow"} Health
        </h1>

        <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            <p className="text-sm font-semibold text-emerald-600">API Connected</p>
          </div>

          <h2 className="mt-6 text-xl font-bold text-slate-900">Fetched Data</h2>

          <div className="mt-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <dl className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-slate-500">Task ID</dt>
                <dd className="text-right text-slate-900">{data.id}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-slate-500">Title</dt>
                <dd className="text-right text-slate-900">{data.title}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-slate-500">Completed</dt>
                <dd className="text-right text-slate-900">{data.completed ? "Yes" : "No"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}