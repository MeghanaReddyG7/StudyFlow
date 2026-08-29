"use client";

import dynamic from "next/dynamic";

const StudyFlow3D = dynamic(
  () => import("@/components/StudyFlow3D"),
  {
    ssr: false,
    loading: () => (
  <div className="flex h-[450px] w-full items-center justify-center rounded-2xl bg-slate-950">
    <div className="text-center text-white">
      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-indigo-400/40 bg-indigo-500/20">
        <span className="text-2xl font-bold">SF</span>
      </div>

      <h2 className="text-lg font-semibold">
        StudyFlow Focus
      </h2>

      <p className="mt-1 text-sm text-white/60">
        Preparing your focus space...
      </p>
    </div>
  </div>
),
  }
);

export default function ThreeDPage() {
  return (
    <main className="min-h-screen p-6">
      <StudyFlow3D />
    </main>
  );
}