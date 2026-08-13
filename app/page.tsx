export default function Home() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold">
        Plan it. Study it. Prove it.
      </h1>

      <p className="mt-4 max-w-xl text-lg text-gray-600">
        StudyFlow helps students plan their study time and stay consistent.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/signup"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
        >
          Get Started
        </a>

        <a
          href="/login"
          className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
        >
          Login
        </a>
      </div>
    </main>
  );
}