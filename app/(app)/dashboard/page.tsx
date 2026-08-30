"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Welcome */}
        <section>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Good morning 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Let's make today productive.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Today's Progress
            </p>

            <div className="mt-4 flex items-end justify-between">
              <p className="text-3xl font-bold text-slate-900">
                60%
              </p>

              <p className="text-sm font-medium text-indigo-600">
                3 / 5 sessions
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-3/5 rounded-full bg-indigo-600" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Learning Progress
            </p>

            <div className="mt-4 flex items-end justify-between">
              <p className="text-3xl font-bold text-slate-900">
                72%
              </p>

              <p className="text-sm font-medium text-emerald-600">
                On track
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[72%] rounded-full bg-emerald-500" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Study Goal
            </p>

            <div className="mt-4 flex items-end justify-between">
              <p className="text-3xl font-bold text-slate-900">
                3.5h
              </p>

              <p className="text-sm font-medium text-slate-500">
                of 4h
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[87%] rounded-full bg-cyan-500" />
            </div>
          </div>

        </section>

        {/* Current Session */}
        <section className="mt-6 overflow-hidden rounded-2xl bg-indigo-600 p-6 text-white shadow-sm sm:p-8">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
                Current Session
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Java Arrays
              </h2>

              <p className="mt-2 text-indigo-100">
                45 minutes of focused study
              </p>
            </div>

            <Link
              href="/study"
              className="inline-flex w-fit items-center rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600 transition hover:scale-105"
            >
              Start Session →
            </Link>

          </div>
        </section>

        {/* Schedule */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Schedule
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Today's Learning Plan
              </h2>
            </div>

            <Link
              href="/timetable"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View timetable →
            </Link>
          </div>

          <div className="mt-6 divide-y divide-slate-100">

            <div className="flex items-center gap-4 py-4">
              <div className="w-20 shrink-0 text-sm font-medium text-slate-500">
                9:00 AM
              </div>

              <div className="flex-1">
                <p className="font-semibold text-slate-900">
                  Java Arrays
                </p>
                <p className="text-sm text-slate-500">
                  Completed
                </p>
              </div>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                Done
              </span>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="w-20 shrink-0 text-sm font-medium text-slate-500">
                10:00 AM
              </div>

              <div className="flex-1">
                <p className="font-semibold text-slate-900">
                  Break
                </p>
                <p className="text-sm text-slate-500">
                  15 minutes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="w-20 shrink-0 text-sm font-medium text-slate-500">
                10:15 AM
              </div>

              <div className="flex-1">
                <p className="font-semibold text-slate-900">
                  Java Strings
                </p>
                <p className="text-sm text-slate-500">
                  45 minutes
                </p>
              </div>

              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                Next
              </span>
            </div>

            <div className="flex items-center gap-4 py-4">
              <div className="w-20 shrink-0 text-sm font-medium text-slate-500">
                11:15 AM
              </div>

              <div className="flex-1">
                <p className="font-semibold text-slate-900">
                  DSA Practice
                </p>
                <p className="text-sm text-slate-500">
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