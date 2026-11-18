// src/components/ats/InterviewQuestions.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InterviewQuestions({ questions = [] }) {
  const [open, setOpen] = useState(-1);

  if (questions.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-base font-semibold text-slate-900 mb-1">
        Likely interview questions
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Based on your resume against this role — worth rehearsing out loud.
      </p>

      <div className="flex flex-col gap-2.5">
        {questions.map((q, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-[#FAFAFB] overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-start justify-between gap-3 text-left px-4 py-3.5"
              >
                <span className="text-sm text-slate-700 leading-relaxed">
                  {q}
                </span>
                <motion.svg
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-pink-500 flex-shrink-0 mt-0.5"
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 text-xs text-slate-400">
                      Tip: structure your answer around a specific project —
                      what you built, the trade-off you made, and the result.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}