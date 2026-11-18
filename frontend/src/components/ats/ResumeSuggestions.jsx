// src/components/ats/ResumeSuggestions.jsx
import { motion } from "framer-motion";

// Backend sends strings like "**Provide Active Links:** Immediately update..."
// This renders the **bold** lead-in without pulling in a markdown library.
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

export default function ResumeSuggestions({ suggestions = [] }) {
  if (suggestions.length === 0) return null;

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-base font-semibold text-slate-900 mb-1">
        Resume suggestions
      </h3>
      <p className="text-sm text-slate-400 mb-5">
        Small edits that meaningfully raise your score.
      </p>

      <ol className="flex flex-col gap-3.5">
        {suggestions.map((tip, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-3.5 text-sm text-slate-600 leading-relaxed"
          >
            <span className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-50 text-pink-600 text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <p>{renderRich(tip)}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}