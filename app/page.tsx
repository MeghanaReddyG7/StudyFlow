"use client";

import Link from "next/link";
import ShaderHero from "@/components/ShaderHero";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Shader background */}
      <div className="absolute inset-0">
        <ShaderHero showContent={false} />
      </div>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          StudyFlow
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 pb-20 text-center">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/90">
            Your focused study workspace
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            Focus better.
            <br />
            <span className="text-cyan-100">
              Study smarter.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Plan your study sessions, follow your timetable, stay focused with
            a built-in timer, track your progress, and get help when you need
            it.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/login"
              className="rounded-full bg-white px-8 py-3.5 font-semibold text-slate-900 shadow-lg transition hover:scale-105"
            >
              Dive In
            </Link>

            <Link
              href="/signup"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20"
            >
              Create Account
            </Link>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Plan · Focus · Track · Improve
          </p>
        </div>
      </section>
    </main>
  );
}