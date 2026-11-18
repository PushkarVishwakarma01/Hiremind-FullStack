import {
  Sparkles,
  Target,
  Flame,
  CalendarDays,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  Circle,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function LearningCoach() {
  const tasks = [
    {
      title: "Java Collections",
      completed: true,
    },
    {
      title: "Spring Security",
      completed: false,
    },
    {
      title: "Docker Basics",
      completed: false,
    },
    {
      title: "Solve 2 LeetCode Problems",
      completed: false,
    },
  ];

  const missingSkills = [
    "Docker",
    "AWS",
    "Redis",
    "Microservices",
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-6 rounded-3xl bg-white p-6 shadow-sm"
    >
      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 p-3">

          <BrainCircuit
            className="text-white"
            size={24}
          />

        </div>

        <div>

          <h2 className="font-bold text-xl">
            AI Learning Coach
          </h2>

          <p className="text-sm text-gray-500">
            Personalized guidance
          </p>

        </div>

      </div>

      {/* Goal */}

      <div className="mt-8 rounded-2xl bg-pink-50 p-5">

        <div className="flex items-center gap-2">

          <Target
            size={18}
            className="text-pink-500"
          />

          <span className="font-semibold">
            Goal
          </span>

        </div>

        <h3 className="mt-3 text-lg font-semibold">

          Java Backend Developer

        </h3>

        <div className="mt-5 h-3 rounded-full bg-pink-100">

          <div
            className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
            style={{ width: "74%" }}
          />

        </div>

        <p className="mt-3 text-sm text-gray-600">

          74% Job Ready

        </p>

      </div>

      {/* Today */}

      <div className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <CalendarDays
            size={18}
            className="text-pink-500"
          />

          <h3 className="font-semibold">

            Today's Plan

          </h3>

        </div>

        <div className="space-y-4">

          {tasks.map(task => (

            <div
              key={task.title}
              className="flex items-center gap-3"
            >

              {task.completed ? (

                <CheckCircle2
                  className="text-green-500"
                  size={20}
                />

              ) : (

                <Circle
                  className="text-gray-300"
                  size={20}
                />

              )}

              <span>

                {task.title}

              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-gray-50 p-4">

          <Flame className="text-orange-500" />

          <p className="mt-2 text-2xl font-bold">

            18

          </p>

          <p className="text-xs text-gray-500">

            Day Streak

          </p>

        </div>

        <div className="rounded-2xl bg-gray-50 p-4">

          <BookOpen className="text-blue-500" />

          <p className="mt-2 text-2xl font-bold">

            24

          </p>

          <p className="text-xs text-gray-500">

            Resources

          </p>

        </div>

      </div>

      {/* Missing Skills */}

      <div className="mt-8">

        <div className="flex items-center gap-2">

          <TrendingUp
            size={18}
            className="text-pink-500"
          />

          <h3 className="font-semibold">

            Missing Skills

          </h3>

        </div>

        <div className="mt-4 flex flex-wrap gap-2">

          {missingSkills.map(skill => (

            <span
              key={skill}
              className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600"
            >

              {skill}

            </span>

          ))}

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 p-5 text-white">

        <div className="flex items-center gap-2">

          <Sparkles size={18} />

          <span className="font-semibold">

            AI Recommendation

          </span>

        </div>

        <p className="mt-3 text-sm leading-6">

          Finish Docker this week to
          improve your Job Match
          from 91% to 96%.

        </p>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-medium text-pink-600">

          Generate Study Plan

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.aside>
  );
}