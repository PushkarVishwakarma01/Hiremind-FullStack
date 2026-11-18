// src/components/auth/GoogleButton.jsx
import { motion } from "framer-motion";

export default function GoogleButton({ onClick, disabled, label = "Continue with Google" }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.01 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className="w-full inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <svg width="18" height="18" viewBox="0 0 48 48">
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 2.9l6-6C34.5 5.3 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.4-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3 0 5.8 1.1 7.9 2.9l6-6C34.5 5.3 29.5 3 24 3 15.9 3 8.9 7.6 6.3 14.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 45c5.4 0 10.3-2.1 14-5.5l-6.5-5.3C29.4 35.9 26.8 37 24 37c-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C8.8 40.3 15.8 45 24 45z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.5 5.3C41.4 35.9 44 30.5 44 24c0-1.4-.1-2.4-.4-3.5z"
        />
      </svg>
      {label}
    </motion.button>
  );
}