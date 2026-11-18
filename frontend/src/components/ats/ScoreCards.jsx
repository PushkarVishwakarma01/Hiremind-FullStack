// src/components/ats/ScoreCards.jsx
import { motion } from "framer-motion";
import CircularScore from "./CircularScore";

const SUB_SCORES = [
  { key: "keywordScore", label: "Keyword Match" },
  { key: "experienceScore", label: "Experience" },
  { key: "projectScore", label: "Projects" },
  { key: "educationScore", label: "Education" },
  { key: "resumeQualityScore", label: "Resume Quality" },
];

function barColor(score) {
  if (score >= 75) return "bg-emerald-500";
  if (score >= 50) return "bg-pink-500";
  return "bg-amber-500";
}

export default function ScoreCards({ scores }) {
  if (!scores) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-stretch">
      {/* Overall score */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-gradient-to-br from-pink-50 via-fuchsia-50 to-orange-50 border border-pink-100 p-8 flex flex-col items-center justify-center"
      >
        <CircularScore
          score={scores.overallScore}
          size={180}
          strokeWidth={14}
          label="Overall ATS Score"
          sublabel="How well your resume matches this role"
        />
      </motion.div>

      {/* Sub-scores */}
      <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 grid gap-4">
        {SUB_SCORES.map((item, i) => {
          const value = scores[item.key] ?? 0;
          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-slate-700">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {value}
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${barColor(value)}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}