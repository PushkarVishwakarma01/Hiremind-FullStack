// src/components/ats/LearningRoadmap.jsx
import { motion } from "framer-motion";

function renderRich(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function LearningRoadmap({ roadmap = [] }) {
  if (roadmap.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-base font-semibold text-slate-900 mb-1">
        Your learning roadmap
      </h3>
      <p className="text-sm text-slate-400 mb-6">
        Close the skill gaps above, in this order.
      </p>

      <div className="relative pl-8">
        <div className="absolute left-[11px] top-1 bottom-1 w-px bg-slate-100" />
        <div className="flex flex-col gap-7">
          {roadmap.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="relative"
            >
              <span className="absolute -left-8 top-0.5 h-6 w-6 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-500 text-white text-[11px] font-bold flex items-center justify-center ring-4 ring-white">
                {i + 1}
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                {renderRich(item)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}