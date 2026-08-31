import Link from "next/link";

type StudyFlowLogoProps = {
  href?: string;
  className?: string;
};

export default function StudyFlowLogo({
  href = "/",
  className = "",
}: StudyFlowLogoProps) {
  return (
    <Link
      href={href}
      className={`font-bold tracking-tight ${className || "text-slate-900 dark:text-slate-100"}`}
      aria-label="StudyFlow home"
    >
      Study
      <span className="text-indigo-600 dark:text-indigo-400">Flow</span>
    </Link>
  );
}