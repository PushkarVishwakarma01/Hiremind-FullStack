import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OpportunityHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-10 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            <span className="text-sm font-medium">
              AI Powered Career Hub
            </span>

          </div>

          <h1
            className="mt-6 text-5xl font-bold leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Discover Amazing
            <br />
            Opportunities 🚀
          </h1>

          <p className="mt-5 max-w-xl text-lg text-pink-100 leading-8">
            Explore internships, hackathons, hiring challenges,
            certifications, scholarships and open-source programs
            recommended specifically for your profile.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button className="rounded-2xl bg-white px-7 py-3 font-semibold text-pink-600 shadow-lg transition hover:scale-105">
              Explore Now
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-white/30 px-7 py-3 font-medium backdrop-blur hover:bg-white/10">
              AI Recommendations
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* Right Stats */}

        <div className="grid w-full max-w-sm grid-cols-2 gap-4">

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

            <h2 className="text-3xl font-bold">
              1.2K+
            </h2>

            <p className="mt-2 text-sm text-pink-100">
              Opportunities
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

            <h2 className="text-3xl font-bold">
              250+
            </h2>

            <p className="mt-2 text-sm text-pink-100">
              Companies
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

            <h2 className="text-3xl font-bold">
              98%
            </h2>

            <p className="mt-2 text-sm text-pink-100">
              AI Match Accuracy
            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-6 backdrop-blur">

            <h2 className="text-3xl font-bold">
              24
            </h2>

            <p className="mt-2 text-sm text-pink-100">
              New Today
            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}