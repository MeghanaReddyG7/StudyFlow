
import StudyFlowLogo from "@/components/StudyFlowLogo";
import Link from "next/link";
import LazyShaderHero from "@/components/LazyShaderHero";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Shader background */}
      <div className="absolute inset-0">
        <LazyShaderHero />
      </div>

      {/* Soft dark overlays */}
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-transparent to-slate-950/80" />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <StudyFlowLogo
           href="/"
            className="group text-xl text-white sm:text-2xl animate-[fadeDown_0.8s_ease-out_both]"
        />

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-1 rounded-full border border-white/[0.10] bg-white/[0.045] p-1.5 shadow-2xl shadow-black/20 backdrop-blur-2xl animate-[fadeDown_0.8s_ease-out_0.1s_both]"
        >
          <Link
            href="/login"
            className="group rounded-full px-4 py-2 text-sm font-medium text-white/65 transition-all duration-300 hover:bg-white/[0.07] hover:text-white active:scale-95 sm:px-5"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-px">
              Login
            </span>
          </Link>

          <Link
            href="/signup"
            className="group relative overflow-hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl hover:shadow-black/30 active:translate-y-0 active:scale-[0.97] sm:px-5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Create Account

              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </span>

            <span className="absolute inset-y-0 left-[-100%] w-1/2 skew-x-[-20deg] bg-white/40 blur-sm transition-all duration-700 ease-out group-hover:left-[140%]" />
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-96px)] items-center justify-center px-6 pb-24 text-center sm:pb-28">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.10] bg-white/[0.045] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/55 shadow-lg shadow-black/10 backdrop-blur-xl animate-[fadeUp_0.9s_ease-out_0.15s_both]">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            Your study, your flow
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-7xl lg:text-[88px]">
            Find your focus.
            <br />

            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Build your flow.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-7 text-white/55 sm:text-lg sm:leading-8 animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]">
            Organize your study time, stay focused through every session,
            <br className="hidden sm:block" />
            and keep moving toward your goals.
          </p>

          {/* CTA */}
          <div className="mt-10 animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.7s_both]">
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-slate-950 shadow-2xl shadow-black/30 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.025] hover:bg-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] active:translate-y-0 active:scale-[0.98]"
            >
              <span className="relative z-10">
                Start studying
              </span>

              <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-slate-950/10 transition-all duration-300 group-hover:bg-slate-950/15">
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </span>

              <span className="absolute inset-y-0 left-[-100%] w-1/2 skew-x-[-20deg] bg-white/40 blur-sm transition-all duration-700 ease-out group-hover:left-[140%]" />
            </Link>
          </div>

          {/* Supporting line */}
          <div className="mt-9 animate-[fadeUp_1s_cubic-bezier(0.22,1,0.36,1)_0.85s_both]">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-white/25">
              Plan
              <span className="mx-2 text-white/10">·</span>
              Focus
              <span className="mx-2 text-white/10">·</span>
              Track
              <span className="mx-2 text-white/10">·</span>
              Improve
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-16 w-full max-w-6xl px-4 pb-20 sm:px-6">
  <div className="grid gap-6 md:grid-cols-3">
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="text-lg font-semibold text-white">
        Focus sessions
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        Stay focused with structured study sessions and a simple timer built
        around your goals.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M5 19V9M12 19V5M19 19v-7"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <h2 className="text-lg font-semibold text-white">
        Track your progress
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        See your study habits, completed sessions, goals, and progress at a
        glance.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            d="M12 3 4 7v5c0 4.5 3.1 7.6 8 9 4.9-1.4 8-4.5 8-9V7l-8-4Z"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="text-lg font-semibold text-white">
        AI study support
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        Get help while you study with an AI assistant designed to keep your
        learning moving forward.
      </p>
    </div>
  </div>
</section>
<section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
  <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-sm">
    <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:p-14">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-indigo-300">
          Your focus space
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Turn study time into focused time.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          Plan your sessions, stay focused with the timer, and understand your
          progress without filling your workspace with distractions.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200">
            Focus timer
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200">
            Progress tracking
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200">
            AI assistance
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-8 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative rounded-[28px] border border-white/10 bg-slate-950/80 p-5 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">
                Current session
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                DSA Practice
              </p>
            </div>

            <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-300">
              Focus
            </span>
          </div>

          <div className="mt-7 flex justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-indigo-400/20 bg-indigo-500/[0.06] shadow-[inset_0_0_50px_rgba(99,102,241,0.08)]">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-indigo-400/20 bg-slate-950">
                <div className="text-center">
                  <p className="text-3xl font-bold tracking-tight text-white">
                    45:00
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Focus session
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex gap-3">
            <div className="h-10 flex-1 rounded-xl bg-indigo-600" />
            <div className="h-10 w-20 rounded-xl border border-white/10 bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
    </main>
  );
}