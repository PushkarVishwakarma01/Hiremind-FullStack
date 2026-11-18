import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Sparkles,
  DollarSign,
  Building2,
} from "lucide-react";

export default function FeaturedOpportunity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#111827] p-8 text-white shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:justify-between">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-pink-500/20 px-4 py-2 text-pink-300">

            <Sparkles size={16} />

            Featured Opportunity

          </div>

          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Google Summer of Code 2026
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Contribute to real-world open-source projects,
            work with mentors from Google and receive a
            stipend while building an outstanding portfolio.
          </p>

          {/* Tags */}

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="rounded-xl bg-white/10 px-4 py-2 backdrop-blur">
              🌍 Remote
            </div>

            <div className="rounded-xl bg-white/10 px-4 py-2 backdrop-blur">
              💰 $3000 Stipend
            </div>

            <div className="rounded-xl bg-white/10 px-4 py-2 backdrop-blur">
              🚀 Open Source
            </div>

          </div>

          {/* AI */}

          <div className="mt-8 rounded-2xl border border-pink-400/20 bg-white/5 p-5 backdrop-blur">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold">
                  AI Match Score
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  Recommended because your profile
                  matches Java, Spring Boot, Git and
                  Open Source contributions.
                </p>

              </div>

              <div className="text-4xl font-bold text-pink-400">
                96%
              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="w-full max-w-sm rounded-3xl bg-white/10 p-6 backdrop-blur">

          <h3 className="mb-6 text-xl font-semibold">
            Opportunity Details
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-3">

              <Building2 size={18} />

              Google

            </div>

            <div className="flex items-center gap-3">

              <MapPin size={18} />

              Remote

            </div>

            <div className="flex items-center gap-3">

              <DollarSign size={18} />

              $3000 Stipend

            </div>

            <div className="flex items-center gap-3">

              <Calendar size={18} />

              Deadline: 15 March 2026

            </div>

            <div className="flex items-center gap-3">

              <Clock size={18} />

              Duration: 12 Weeks

            </div>

            <div className="flex items-center gap-3">

              <Trophy size={18} />

              Global Program

            </div>

          </div>

          <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold transition hover:scale-105">

            Apply Now

            <ArrowUpRight size={18} />

          </button>

        </div>

      </div>
    </motion.div>
  );
}