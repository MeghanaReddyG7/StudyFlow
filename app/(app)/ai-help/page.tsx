import StudyFlowChat from "@/components/StudyFlowChat";

export default function AIHelpPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            StudyFlow
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            AI Help
          </h1>

          <p className="mt-2 max-w-2xl text-gray-500">
            Ask questions, understand difficult concepts, create practice
            questions, or check your study progress.
          </p>
        </div>

        <StudyFlowChat />
      </div>
    </main>
  );
}