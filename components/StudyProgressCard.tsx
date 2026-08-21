type StudyProgressCardProps = {
  subject: string;
  completed: number;
  total: number;
  percentage: number;
  status: string;
};

export default function StudyProgressCard({
  subject,
  completed,
  total,
  percentage,
  status,
}: StudyProgressCardProps) {
  return (
    <div className="mt-3 w-full max-w-sm rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            Study Progress
          </p>

          <h3 className="mt-1 text-lg font-bold text-gray-900">
            {subject}
          </h3>
        </div>

        <div className="text-2xl font-bold text-indigo-600">
          {percentage}%
        </div>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-gray-600">
          {completed} of {total} completed
        </span>

        <span className="font-semibold text-indigo-700">
          {status}
        </span>
      </div>
    </div>
  );
}