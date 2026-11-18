import {
  Brain,
  CheckCircle2,
  Circle,
  Sparkles,
  Play,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function InterviewTab() {
  const topics = [
    {
      name: "Java Core",
      done: true,
    },
    {
      name: "OOP",
      done: true,
    },
    {
      name: "Spring Boot",
      done: false,
    },
    {
      name: "SQL",
      done: false,
    },
    {
      name: "DSA",
      done: false,
    },
  ];

  const suggestions = [
    "Revise Spring Boot Annotations",
    "Practice SQL JOIN Questions",
    "Solve 2 Medium LeetCode Problems",
    "Review Java Multithreading",
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white"
      >
        <div className="flex items-center gap-3">

          <Brain size={26} />

          <div>

            <h2 className="text-xl font-semibold">
              AI Interview Coach
            </h2>

            <p className="text-sm text-purple-100">
              Personalized preparation roadmap
            </p>

          </div>

        </div>

        <div className="mt-6">

          <p className="text-sm opacity-90">
            Interview Readiness
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            84%
          </h1>

          <div className="mt-4 h-3 rounded-full bg-white/20">

            <div
              className="h-full rounded-full bg-white"
              style={{ width: "84%" }}
            />

          </div>

        </div>

      </motion.div>

      {/* Target Role */}

      <div className="rounded-2xl bg-white p-5 shadow-sm">

        <p className="text-sm text-gray-500">
          Target Role
        </p>

        <h3 className="mt-1 text-lg font-semibold">
          Java Backend Developer
        </h3>

      </div>

      {/* Practice */}

      <div className="rounded-2xl bg-white p-5 shadow-sm">

        <h3 className="mb-5 font-semibold">
          Today's Practice
        </h3>

        <div className="space-y-4">

          {topics.map((topic) => (

            <div
              key={topic.name}
              className="flex items-center gap-3"
            >

              {topic.done ? (

                <CheckCircle2
                  className="text-green-500"
                  size={18}
                />

              ) : (

                <Circle
                  className="text-gray-400"
                  size={18}
                />

              )}

              <span>{topic.name}</span>

            </div>

          ))}

        </div>

      </div>

      {/* Suggestions */}

      <div className="rounded-2xl bg-pink-50 p-5">

        <div className="flex items-center gap-2">

          <Sparkles
            size={18}
            className="text-pink-500"
          />

          <h3 className="font-semibold">
            AI Suggestions
          </h3>

        </div>

        <div className="mt-5 space-y-4">

          {suggestions.map((item) => (

            <div
              key={item}
              className="flex gap-3 text-sm"
            >

              <ArrowRight
                size={16}
                className="mt-1 text-pink-500"
              />

              {item}

            </div>

          ))}

        </div>

      </div>

      {/* Buttons */}

      <button
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold text-white transition hover:scale-[1.02]"
      >
        <Play size={18} />

        Start Mock Interview
      </button>

      <button
        className="w-full rounded-2xl border border-pink-200 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
      >
        Generate Interview Questions
      </button>

    </div>
  );
}