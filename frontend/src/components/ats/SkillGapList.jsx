// src/components/ats/SkillGapList.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRIORITY_STYLES = {
  HIGH: "bg-rose-50 text-rose-600 border-rose-100",
  MEDIUM: "bg-amber-50 text-amber-600 border-amber-100",
  LOW: "bg-slate-50 text-slate-500 border-slate-100",
};

export default function SkillGapList({ missingSkills = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (missingSkills.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-base font-semibold text-slate-900 mb-1">
        Skill gaps, ranked
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Why each skill matters for this specific role.
      </p>

      <div className="flex flex-col divide-y divide-slate-100">
        {missingSkills.map((skill, i) => {
          const open = openIndex === i;
          return (
            <div key={skill.name} className="py-3.5">
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="w-full flex items-center justify-between gap-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide rounded-full border px-2.5 py-1 ${
                      PRIORITY_STYLES[skill.priority] || PRIORITY_STYLES.LOW
                    }`}
                  >
                    {skill.priority}
                  </span>
                  <span className="text-sm font-medium text-slate-800">
                    {skill.name}
                  </span>
                </div>
                <motion.svg
                  animate={{ rotate: open ? 180 : 0 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-slate-400 flex-shrink-0"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden text-sm text-slate-500 pl-[70px] pr-2"
                  >
                    <span className="block pt-2">{skill.reason}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}