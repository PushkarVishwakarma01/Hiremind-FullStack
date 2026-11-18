// src/components/ats/CircularScore.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLORS = {
  strong: { ring: "#10B981", text: "#047857" }, // >=75
  mid: { ring: "#EC4899", text: "#BE185D" },    // >=50
  weak: { ring: "#F59E0B", text: "#B45309" },   // <50
};

function tone(score) {
  if (score >= 75) return COLORS.strong;
  if (score >= 50) return COLORS.mid;
  return COLORS.weak;
}

export default function CircularScore({
  score = 0,
  size = 160,
  strokeWidth = 12,
  label,
  sublabel,
}) {
  const [display, setDisplay] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, score));
  const offset = circumference - (display / 100) * circumference;
  const { ring, text } = tone(clamped);

  useEffect(() => {
    const controls = { current: 0 };
    let raf;
    const start = performance.now();
    const duration = 900;

    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * clamped));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clamped]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#F1F0F7"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={ring}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke 0.3s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold" style={{ color: text }}>
            {display}
          </span>
          <span className="text-xs text-slate-400">/ 100</span>
        </div>
      </div>
      {label && (
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-800">{label}</p>
          {sublabel && <p className="text-xs text-slate-400">{sublabel}</p>}
        </div>
      )}
    </div>
  );
}