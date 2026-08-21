"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl">
          ⚠️
        </div>

        <h2 className="mt-4 text-xl font-bold text-gray-900">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          We couldn't load this page correctly. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-5 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Try again
        </button>
      </div>
    </main>
  );
}