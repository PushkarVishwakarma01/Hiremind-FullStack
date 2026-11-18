import {
  ArrowUpRight,
  Calendar,
  Heart,
  MapPin,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function OpportunityCard({ opportunity }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl"
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${opportunity.color} text-lg font-bold text-white`}
        >
          {opportunity.company.charAt(0)}
        </div>

        <button className="rounded-full p-2 hover:bg-pink-50">
          <Heart
            size={18}
            className="text-gray-400 group-hover:text-pink-500"
          />
        </button>

      </div>

      {/* Title */}

      <h3 className="mt-5 text-lg font-semibold text-gray-900">
        {opportunity.title}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {opportunity.company}
      </p>

      {/* AI Match */}

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-pink-50 p-3">

        <div className="flex items-center gap-2">

          <Sparkles
            size={16}
            className="text-pink-500"
          />

          <span className="text-sm font-medium">
            AI Match
          </span>

        </div>

        <span className="font-bold text-pink-600">
          {opportunity.aiMatch}%
        </span>

      </div>

      {/* Details */}

      <div className="mt-5 space-y-3 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          <MapPin size={16} />
          {opportunity.location}
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={16} />
          {opportunity.deadline}
        </div>

      </div>

      {/* Tags */}

      <div className="mt-5 flex flex-wrap gap-2">

        {opportunity.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <div>
          <p className="text-xs text-gray-400">
            Reward
          </p>

          <p className="font-semibold">
            {opportunity.reward}
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 text-white transition hover:scale-105">

          Apply

          <ArrowUpRight size={16} />

        </button>

      </div>

    </motion.div>
  );
}