
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

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
    </main>
  );
}