// src/components/ats/ATSLoading.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  "Reading your resume",
  "Matching skills against the job description",
  "Scoring experience & projects",
  "Building your learning roadmap",
];

export default function ATSLoading() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="rounded-3xl bg-white border border-slate-100 shadow-sm p-10 flex flex-col items-center text-center"
    >
      <div className="relative h-20 w-20 mb-6">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-pink-100"
        />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-pink-500">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l1.9 4.9L19 10l-5.1 2.1L12 17l-1.9-4.9L5 10l5.1-2.1L12 3z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 mb-1">
        Analyzing your resume
      </h3>
      <p className="text-sm text-slate-400 mb-6">
        This usually takes a few seconds.
      </p>

      <div className="flex flex-col gap-2.5 items-start">
        {STEPS.map((step, i) => (
          <div key={step} className="flex items-center gap-2.5 text-sm">
            <span
              className={`h-2 w-2 rounded-full flex-shrink-0 ${
                i <= stepIndex ? "bg-pink-500" : "bg-slate-200"
              }`}
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={i <= stepIndex ? "active" : "inactive"}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: i <= stepIndex ? 1 : 0.4 }}
                className={i <= stepIndex ? "text-slate-700" : "text-slate-400"}
              >
                {step}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}