import { Search, Sparkles, BookOpen, Trophy, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesHero({
  search,
  setSearch,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-10 text-white"
    >
      {/* Background Blur */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            AI Personalized Learning

          </div>

          <h1
            className="mt-6 text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Learn Smarter.
            <br />
            Get Hired Faster.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-pink-100">
            Explore curated roadmaps, articles, videos,
            interview resources and AI-powered study plans
            personalized for your career goals.
          </p>

          {/* Search */}

          <div className="mt-8 flex max-w-xl items-center rounded-2xl bg-white px-5 py-4 shadow-lg">

            <Search
              size={20}
              className="text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search Java, Spring Boot, Docker..."
              className="ml-4 flex-1 bg-transparent text-gray-800 outline-none"
            />

          </div>

        </div>

        {/* Stats */}

        <div className="grid w-full max-w-sm grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <BookOpen size={24} />

            <h2 className="mt-4 text-3xl font-bold">
              450+
            </h2>

            <p className="text-sm text-pink-100">
              Resources
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <Trophy size={24} />

            <h2 className="mt-4 text-3xl font-bold">
              35
            </h2>

            <p className="text-sm text-pink-100">
              Learning Paths
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <Flame size={24} />

            <h2 className="mt-4 text-3xl font-bold">
              18
            </h2>

            <p className="text-sm text-pink-100">
              Day Streak
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">

            <Sparkles size={24} />

            <h2 className="mt-4 text-3xl font-bold">
              94%
            </h2>

            <p className="text-sm text-pink-100">
              Job Readiness
            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}