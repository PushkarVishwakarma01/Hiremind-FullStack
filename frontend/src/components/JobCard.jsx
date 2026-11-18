import {
  MapPin,
  Clock3,
  IndianRupee,
  Briefcase,
  Sparkles,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl">
      {/* Top */}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            src={job.logo}
            alt={job.company}
            className="h-12 w-12 rounded-2xl border object-cover"
          />

          <div>
            <h3 className="font-semibold text-gray-900">
              {job.company}
            </h3>

            <p className="text-sm text-gray-500">
              {job.location}
            </p>
          </div>
        </div>

        <button className="rounded-full p-2 hover:bg-pink-50">
          <Bookmark
            size={18}
            className="text-gray-400 hover:text-pink-500"
          />
        </button>
      </div>

      {/* Title */}

      <div className="mt-5">
        <h2 className="text-xl font-semibold text-gray-900">
          {job.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {job.description}
        </p>
      </div>

      {/* Skills */}

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Details */}

      <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <IndianRupee size={16} />
          {job.salary}
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          {job.type}
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <Clock3 size={16} />
          {job.posted}
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-pink-50 px-3 py-2">
          <Sparkles
            size={15}
            className="text-pink-500"
          />

          <span className="text-sm font-semibold text-pink-600">
            {job.match}% Match
          </span>
        </div>

        <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2 text-sm font-medium text-white transition hover:scale-105">
          Apply

          <ArrowUpRight size={16} />
        </button>
      </div>
    </div>
  );
}