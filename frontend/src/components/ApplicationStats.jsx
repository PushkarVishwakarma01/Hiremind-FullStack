import {
  Send,
  Eye,
  CalendarDays,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function ApplicationStats({ jobs }) {
  const total = jobs.length;

  const underReview = jobs.filter(
    (job) => job.status === "Under Review"
  ).length;

  const interview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const selected = jobs.filter(
    (job) => job.status === "Selected"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const cards = [
    {
      title: "Applied",
      value: total,
      icon: Send,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      title: "Under Review",
      value: underReview,
      icon: Eye,
      bg: "from-amber-400 to-orange-500",
    },
    {
      title: "Interview",
      value: interview,
      icon: CalendarDays,
      bg: "from-purple-500 to-pink-500",
    },
    {
      title: "Selected",
      value: selected,
      icon: CheckCircle2,
      bg: "from-emerald-500 to-green-500",
    },
    {
      title: "Rejected",
      value: rejected,
      icon: XCircle,
      bg: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div
                className={`rounded-2xl bg-gradient-to-r ${card.bg} p-3 shadow-lg`}
              >
                <Icon className="text-white" size={22} />
              </div>

              <span className="text-3xl font-bold text-gray-900">
                {card.value}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="font-semibold text-gray-800">
                {card.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {card.title === "Applied"
                  ? "Total applications submitted"
                  : `Applications ${card.title.toLowerCase()}`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}