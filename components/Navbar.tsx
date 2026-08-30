"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Timetable", href: "/timetable" },
    { name: "Study", href: "/study" },
    { name: "AI Help", href: "/ai-help" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex min-h-16 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/dashboard"
            className="shrink-0 text-xl font-bold tracking-tight text-slate-900"
          >
            Study<span className="text-indigo-600">Flow</span>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center md:hidden">
            <label htmlFor="mobile-navigation" className="sr-only">
              Navigate to page
            </label>

            <select
              id="mobile-navigation"
              value={pathname}
              onChange={(event) => {
                window.location.href = event.target.value;
              }}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              {navItems.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}