import { ArrowUpRight } from "lucide-react";

function JobsGrid() {
    const JOBS = [
  {
    title: "Sneaker Designer",
    rate: "$300/hr",
    company: "Stride Co.",
    date: "24 Mar 2024",
    bg: "bg-emerald-50",
    badge: "bg-emerald-500",
  },
  {
    title: "React Developer",
    rate: "$420/hr",
    company: "Codeworks",
    date: "12 Mar 2024",
    bg: "bg-lime-50",
    badge: "bg-lime-500",
  },
  {
    title: "Product Designer",
    rate: "$213/hr",
    company: "PixelForge",
    date: "26 Mar 2024",
    bg: "bg-orange-50",
    badge: "bg-orange-500",
  },
  {
    title: "Senior Archaeologist",
    rate: "$1200/hr",
    company: "Heritage Labs",
    date: "12 Mar 2024",
    bg: "bg-sky-50",
    badge: "bg-sky-500",
  },
  {
    title: "Chef Leader",
    rate: "$862/hr",
    company: "Bistro Group",
    date: "08 Mar 2024",
    bg: "bg-rose-50",
    badge: "bg-rose-500",
  },
  {
    title: "Cleaning Service",
    rate: "$80/hr",
    company: "CleanPro",
    date: "24 Mar 2024",
    bg: "bg-cyan-50",
    badge: "bg-cyan-500",
  },
];
  return (
    <section className="px-6 py-14 lg:px-10">
      <h2
        className="text-center text-2xl font-semibold text-pink-500 sm:text-3xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Find Your Match
      </h2>
      <p
        className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Job Here
      </p>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {JOBS.map((job) => (
          <div key={job.title} className={`rounded-2xl ${job.bg} p-5`}>
            <div className="flex items-start justify-between">
              <span className="rounded-md bg-white/70 p-1.5 text-gray-500">
                <ArrowUpRight size={14} />
              </span>
              <span className="text-xs text-gray-400">•••</span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-900">
              {job.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{job.rate}</p>

            <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-3">
              <div className="flex items-center gap-2">
                <span className={`h-6 w-6 rounded-full ${job.badge}`} />
                <div className="leading-tight">
                  <p className="text-xs font-medium text-gray-700">
                    {job.company}
                  </p>
                  <p className="text-[10px] text-gray-400">{job.date}</p>
                </div>
              </div>
              <button className="rounded-full bg-pink-500 px-3 py-1 text-[11px] font-medium text-white">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
          Show More
        </button>
      </div>
    </section>
  );
}
export default JobsGrid