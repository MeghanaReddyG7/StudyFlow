import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white px-4 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600"
        >
          StudyFlow
        </Link>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>

          <Link href="/dashboard" className="hover:text-indigo-600">
            Dashboard
          </Link>

          <Link href="/timetable" className="hover:text-indigo-600">
            Timetable
          </Link>

          <Link href="/study" className="hover:text-indigo-600">
            Study
          </Link>

          <Link href="/learning" className="hover:text-indigo-600">
            Learning
          </Link>

          <Link href="/progress" className="hover:text-indigo-600">
            Progress
          </Link>

          <Link href="/settings" className="hover:text-indigo-600">
            Settings
          </Link>

          <Link href="/login" className="hover:text-indigo-600">
            Login
          </Link>

          <Link href="/signup" className="hover:text-indigo-600">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}