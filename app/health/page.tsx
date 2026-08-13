export default async function Health() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  const data = await response.json();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold">
        {process.env.NEXT_PUBLIC_APP_NAME} Health
      </h1>

      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
        <p className="text-green-600">✓ API Connected</p>

        <h2 className="mt-6 text-xl font-semibold">
          Fetched Data
        </h2>

        <div className="mt-4 rounded-lg bg-gray-50 p-4">
          <p>Task ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
      </div>
    </main>
  );
}