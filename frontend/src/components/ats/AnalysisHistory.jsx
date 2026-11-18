// src/components/ats/AnalysisHistory.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getATSHistory } from "../../services/atsApi";

// ATSHistoryResponse: { id, resumeId, candidateProfileId, overallScore, jobDescription, analyzedAt }

function jdPreview(jobDescription = "") {
  const clean = jobDescription.trim().replace(/\s+/g, " ");
  return clean.length > 70 ? clean.slice(0, 70) + "…" : clean || "Untitled analysis";
}

export default function AnalysisHistory({ candidateProfileId, onSelect }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!candidateProfileId) {
      setLoading(false);
      return;
    }
    getATSHistory(candidateProfileId)
      .then(setItems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [candidateProfileId]);

  if (loading) {
    return (
      <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 text-center text-sm text-slate-400">
        Loading past analyses…
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-rose-50 border border-rose-100 p-8 text-center text-sm text-rose-500">
        {error}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-10 text-center">
        <p className="text-sm font-medium text-slate-700">
          No analyses yet
        </p>
        <p className="text-sm text-slate-400 mt-1">
          Run your first ATS analysis to see it show up here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white border border-slate-100 shadow-sm divide-y divide-slate-100">
      {items.map((entry, i) => (
        <motion.button
          key={entry.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          onClick={() => onSelect(entry.id)}
          className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-slate-50 transition-colors first:rounded-t-3xl last:rounded-b-3xl"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-9 w-9 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">
                {jdPreview(entry.jobDescription)}
              </p>
              {entry.analyzedAt && (
                <p className="text-xs text-slate-400">
                  {new Date(entry.analyzedAt).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          {typeof entry.overallScore === "number" && (
            <span className="text-sm font-semibold text-pink-600 flex-shrink-0">
              {entry.overallScore}/100
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
}