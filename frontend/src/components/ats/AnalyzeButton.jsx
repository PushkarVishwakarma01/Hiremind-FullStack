// src/components/ats/AnalyzeButton.jsx
import { motion } from "framer-motion";

export default function AnalyzeButton({
  onClick,
  disabled,
  loading,
  label = "Analyze my resume",
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition-opacity ${
        disabled || loading
          ? "bg-slate-300 shadow-none cursor-not-allowed"
          : "bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:opacity-95"
      }`}
    >
      {loading ? (
        <>
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Analyzing…
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l1.9 4.9L19 10l-5.1 2.1L12 17l-1.9-4.9L5 10l5.1-2.1L12 3z"
              fill="currentColor"
            />
          </svg>
          {label}
        </>
      )}
    </motion.button>
  );
}