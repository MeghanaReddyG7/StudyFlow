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

      {/* Readability layers */}
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/60" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="group text-xl font-bold tracking-tight sm:text-2xl"
        >
          <span className="transition-opacity duration-300 group-hover:opacity-80">
            StudyFlow
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-xl"
        >
          <Link
            href="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white active:scale-95 sm:px-5"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-cyan-50 active:translate-y-0 active:scale-95 sm:px-5"
          >
            Create Account
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pb-20 text-center sm:pb-24">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-100/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            Your focused study workspace
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            Focus better.
            <br />
            <span className="bg-gradient-to-r from-cyan-100 via-white to-cyan-200 bg-clip-text text-transparent">
              Study smarter.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Plan your sessions, stay focused with a built-in timer,
            track your progress, and get help whenever you need it.
          </p>

          {/* Main CTA */}
          <div className="mt-10">
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-bold text-slate-950 shadow-2xl shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-cyan-50 hover:shadow-cyan-400/20 active:translate-y-0 active:scale-[0.98]"
            >
              <span className="relative z-10">
                Let's Go
              </span>

              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-100/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* Supporting line */}
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
            Plan · Focus · Track · Improve
          </p>
        </div>
      </section>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-slate-950/60 to-transparent" />
    </main>
  );
}