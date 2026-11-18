// src/components/ats/ATSHero.jsx
import { motion } from "framer-motion";

export default function ATSHero({ onToggleHistory, showingHistory }) {
  return (
    <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold px-3 py-1 mb-3">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l1.9 4.9L19 10l-5.1 2.1L12 17l-1.9-4.9L5 10l5.1-2.1L12 3z"
              fill="currentColor"
            />
          </svg>
          ATS Analyzer
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          See your resume the way{" "}
          <span className="text-pink-500">an ATS sees it</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-2 max-w-xl">
          Upload your resume and a job description — HireMind scores the
          match, finds skill gaps, and preps you for the interview that
          follows.
        </p>
      </motion.div>

      <button
        onClick={onToggleHistory}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:border-pink-300 hover:text-pink-600 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 8v4l3 3M21 12a9 9 0 11-9-9 9 9 0 019 9z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        {showingHistory ? "Back to analyzer" : "Past analyses"}
      </button>
    </div>
  );
}