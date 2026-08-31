"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type StatIconProps = {
  type: "clock" | "book" | "target";
};

function StatIcon({ type }: StatIconProps) {
  if (type === "clock") {
    return (
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
    );
  }

  if (type === "book") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 5.5v16" strokeLinecap="round" />
        <path d="M8 7h8M8 11h6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const stats = [
  {
  label: "Today's Progress",
  value: "60%",
  detail: "3 / 5 sessions",
  progress: "60%",
  accent: "bg-indigo-600",
  detailColor: "text-indigo-600 dark:text-indigo-400",
  icon: "clock" as const,
  iconStyle:
    "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400",
},
  {
  label: "Learning Progress",
  value: "72%",
  detail: "On track",
  progress: "72%",
  accent: "bg-emerald-500",
  detailColor: "text-emerald-600 dark:text-emerald-400",
  icon: "book" as const,
  iconStyle:
    "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400",
},
  {
  label: "Study Goal",
  value: "3.5h",
  detail: "of 4h",
  progress: "87%",
  accent: "bg-cyan-500",
  detailColor: "text-cyan-600 dark:text-cyan-400",
  icon: "target" as const,
  iconStyle:
    "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/50 dark:text-cyan-400",
},
];
function TimelineIcon({
  type,
}: {
  type: "completed" | "break" | "next" | "practice";
}) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    className: "h-4.5 w-4.5",
    "aria-hidden": true,
  };

  if (type === "completed") {
    return (
      <svg {...commonProps}>
        <path
          d="m6.5 12.5 3.5 3.5 7.5-8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "break") {
    return (
      <svg {...commonProps}>
        <path d="M8 5v14M16 5v14" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "next") {
    return (
      <svg {...commonProps}>
        <path
          d="M5 12h13M13 7l5 5-5 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        d="M6 7h12M6 12h12M6 17h8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-100/70 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white px-6 py-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_30px_rgba(15,23,42,0.04)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_10px_30px_rgba(0,0,0,0.18)] sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-100/80 blur-3xl dark:bg-indigo-900/30" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.06),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.08),_transparent_42%)]" />

          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
                Dashboard
              </p>
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Good morning <span aria-hidden="true">👋</span>
            </h1>

            <p className="mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400 sm:text-base">
              Keep your momentum going. You&apos;re making solid progress today.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
  key={stat.label}
  className="animate-[fadeInUp_0.4s_ease-out_both] group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-sm dark:hover:shadow-lg"
  style={{
    animationDelay: `${stats.indexOf(stat) * 100}ms`,
  }}
>
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <div
  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${stat.iconStyle}`}
>
  <StatIcon type={stat.icon} />
</div>
              </div>

              <div className="mt-5 flex items-end justify-between gap-3">
                <p className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  {stat.value}
                </p>
                <p className={`text-sm font-semibold ${stat.detailColor}`}>
                  {stat.detail}
                </p>
              </div>

              <div
  className={`h-full rounded-full ${stat.accent} animate-[growProgress_0.9s_ease-out_both]`}
  style={
    {
      "--progress-width": stat.progress,
    } as React.CSSProperties
  }
/>
            </div>
          ))}
        </section>

        <section className="animate-[fadeInUp_0.5s_ease-out_both] relative mt-6 overflow-hidden rounded-[28px] bg-indigo-600 p-6 text-white shadow-[0_20px_45px_rgba(79,70,229,0.18)] dark:bg-indigo-700 dark:shadow-[0_20px_45px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-300" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-200">
                  Up next
                </p>
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Java Arrays
              </h2>

              <p className="mt-2 text-sm text-indigo-100 sm:text-base">
                45 minutes of focused study
              </p>
            </div>

            <Link
              href="/study"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-50 hover:shadow-md active:translate-y-0"
            >
              Start Session
              <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>

        <section className="animate-[fadeInUp_0.5s_ease-out_0.1s_both] mt-6 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">
                Schedule
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900 dark:text-slate-100">
                Today&apos;s Learning Plan
              </h2>
            </div>

            <Link
              href="/timetable"
              className="w-fit text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              View timetable →
            </Link>
          </div>

          <div className="mt-6 space-y-2">
            <div className="animate-[fadeInUp_0.4s_ease-out_0.15s_both] group flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <div className="w-20 shrink-0 text-sm font-medium text-slate-400 dark:text-slate-500">
                9:00 AM
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
  <TimelineIcon type="completed" />
</div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Java Arrays
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Completed
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                Done
              </span>
            </div>

            <div className="animate-[fadeInUp_0.4s_ease-out_0.15s_both] group flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <div className="w-20 shrink-0 text-sm font-medium text-slate-400 dark:text-slate-500">
                10:00 AM
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
  <TimelineIcon type="break" />
</div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Break
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  15 minutes
                </p>
              </div>
            </div>

            <div className="animate-[fadeInUp_0.4s_ease-out_0.15s_both] group flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-3 py-4 transition-all hover:bg-indigo-50 dark:border-indigo-900 dark:bg-indigo-950/40 dark:hover:bg-indigo-950/60">
              <div className="w-20 shrink-0 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                10:15 AM
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-300">
  <TimelineIcon type="next" />
</div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Java Strings
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  45 minutes
                </p>
              </div>

              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200">
                Next
              </span>
            </div>

            <div className="animate-[fadeInUp_0.4s_ease-out_0.15s_both] group flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
              <div className="w-20 shrink-0 text-sm font-medium text-slate-400 dark:text-slate-500">
                11:15 AM
              </div>

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
  <TimelineIcon type="practice" />
</div>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  DSA Practice
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  60 minutes
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}