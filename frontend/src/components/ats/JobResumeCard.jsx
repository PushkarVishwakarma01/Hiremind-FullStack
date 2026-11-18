// src/components/ats/JobResumeCard.jsx
import { motion } from "framer-motion";

export default function JobResumeCard({ fileName, analyzedAt, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between flex-wrap gap-3 rounded-2xl bg-slate-50 border border-slate-100 px-5 py-3.5"
    >
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800">
            {fileName || "Your resume"}
          </p>
          {analyzedAt && (
            <p className="text-xs text-slate-400">
              Analyzed {new Date(analyzedAt).toLocaleString()}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={onReset}
        className="text-xs font-semibold text-pink-600 hover:text-pink-700 rounded-full border border-pink-200 px-4 py-2 transition-colors"
      >
        Analyze another
      </button>
    </motion.div>
  );
}