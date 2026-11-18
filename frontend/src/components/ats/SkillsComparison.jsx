// src/components/ats/SkillsComparison.jsx
import { motion } from "framer-motion";

export default function SkillsComparison({ matchedSkills = [], missingSkills = [] }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-base font-semibold text-slate-900 mb-1">
        Skills comparison
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        {matchedSkills.length} matched · {missingSkills.length} missing
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-3">
            On your resume
          </p>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02 }}
                className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 text-xs font-medium"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {skill}
              </motion.span>
            ))}
            {matchedSkills.length === 0 && (
              <p className="text-sm text-slate-400">No direct matches found.</p>
            )}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-3">
            Missing from your resume
          </p>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, i) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02 }}
                className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100 px-3 py-1.5 text-xs font-medium"
              >
                {skill.name}
              </motion.span>
            ))}
            {missingSkills.length === 0 && (
              <p className="text-sm text-slate-400">
                No critical gaps — nice work.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}