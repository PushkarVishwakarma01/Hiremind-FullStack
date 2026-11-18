import { motion } from "framer-motion";
import {
  Code2,
  Flame,
  ArrowRight,
  Trophy,
} from "lucide-react";

export default function PracticeCard({ sheet }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl transition"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div
          className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${sheet.color} flex items-center justify-center text-white`}
        >
          <Code2 size={30} />
        </div>

        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
          {sheet.difficulty}
        </span>

      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {sheet.title}
      </h3>

      <p className="mt-2 text-gray-500">
        {sheet.platform}
      </p>

      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">

          <span>Progress</span>

          <span>{sheet.progress}%</span>

        </div>

        <div className="h-2 rounded-full bg-gray-200">

          <div
            className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
            style={{
              width: `${sheet.progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stats */}

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">

          <span className="text-gray-500">
            Solved
          </span>

          <span>
            {sheet.completed}/{sheet.totalProblems}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="flex items-center gap-2 text-gray-500">

            <Flame size={16} />

            Streak

          </span>

          <span>{sheet.streak} Days</span>

        </div>

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-white font-medium">

        Continue Practice

        <ArrowRight size={18} />

      </button>

    </motion.div>
  );
}