"use client";

import { useState } from "react";

type Session = {
  id: number;
  subject: string;
  duration: number;
  startTime: string;
  breakTime: number;
};

export default function Timetable() {
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState("");
  const [breakTime, setBreakTime] = useState("");

  const [sessions, setSessions] = useState<Session[]>([
    {
      id: 1,
      subject: "Java Arrays",
      duration: 60,
      startTime: "09:00",
      breakTime: 10,
    },
    {
      id: 2,
      subject: "Java Strings",
      duration: 45,
      startTime: "10:10",
      breakTime: 10,
    },
  ]);

  const handleAddSession = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!subject.trim() || !duration || !startTime) {
      return;
    }

    const newSession: Session = {
      id: Date.now(),
      subject: subject.trim(),
      duration: Number(duration),
      startTime,
      breakTime: Number(breakTime) || 0,
    };

    setSessions((currentSessions) => [...currentSessions, newSession]);

    setSubject("");
    setDuration("");
    setStartTime("");
    setBreakTime("");
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();

    date.setHours(Number(hours), Number(minutes));

    return date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            StudyFlow
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Timetable
          </h1>

          <p className="mt-2 text-slate-500">
            Plan your study sessions for today.
          </p>
        </div>

        {/* Add Session */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Add Study Session
          </h2>

          <form onSubmit={handleAddSession}>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700"
                >
                  Subject / Task
                </label>

                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="Example: Java Arrays"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-slate-700"
                >
                  Duration (minutes)
                </label>

                <input
                  id="duration"
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                  placeholder="60"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="start-time"
                  className="block text-sm font-medium text-slate-700"
                >
                  Start Time
                </label>

                <input
                  id="start-time"
                  type="time"
                  value={startTime}
                  onChange={(event) => setStartTime(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="break-time"
                  className="block text-sm font-medium text-slate-700"
                >
                  Break Time (minutes)
                </label>

                <input
                  id="break-time"
                  type="number"
                  min="0"
                  value={breakTime}
                  onChange={(event) => setBreakTime(event.target.value)}
                  placeholder="10"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
            >
              Add Session
            </button>
          </form>
        </section>

        {/* Sessions */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Today
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Today's Sessions
              </h2>
            </div>

            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
              {sessions.length} sessions
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {session.subject}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {formatTime(session.startTime)} ·{" "}
                    {session.duration} minutes
                  </p>
                </div>

                <span className="text-sm font-medium text-slate-500">
                  {session.breakTime} min break
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}