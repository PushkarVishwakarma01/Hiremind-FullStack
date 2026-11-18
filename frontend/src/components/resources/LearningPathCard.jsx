import { ArrowRight, BookOpen, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function LearningPathCard({ path }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-xl"
    >
      {/* Icon */}

      <div className="flex items-center justify-between">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-3xl text-white">
          {path.icon}
        </div>

        <TrendingUp className="text-green-500" />
      </div>

      {/* Title */}

      <h3
        className="mt-6 text-2xl font-semibold"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {path.title}
      </h3>

      <p className="mt-2 text-gray-500">
        Become job-ready with a structured roadmap.
      </p>

      {/* Stats */}

      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            Resources
          </div>

          <span>{path.resources}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            Progress
          </div>

          <span>{path.progress}%</span>
        </div>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="h-2 rounded-full bg-gray-200">

          <div
            className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
            style={{
              width: `${path.progress}%`,
            }}
          />

        </div>

      </div>

      {/* Button */}

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-medium text-white transition hover:scale-[1.02]">

        Continue Path

        <ArrowRight size={18} />

      </button>

    </motion.div>
  );
}