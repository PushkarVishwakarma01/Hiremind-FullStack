// src/components/ats/ATSUploadCard.jsx
import { motion, AnimatePresence } from "framer-motion";
import UploadResumeCard from "./UploadResumeCard";
import JobDescriptionCard, { MIN_CHARS } from "./JobDescriptionCard";
import AnalyzeButton from "./AnalyzeButton";

export default function ATSUploadCard({
  file,
  onFileSelected,
  jobDescription,
  onJobDescriptionChange,
  onAnalyze,
  loading,
  error,
}) {
  const canAnalyze = !!file && jobDescription.trim().length >= MIN_CHARS;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <UploadResumeCard
          file={file}
          onFileSelected={onFileSelected}
          disabled={loading}
        />
        <JobDescriptionCard
          value={jobDescription}
          onChange={onJobDescriptionChange}
          disabled={loading}
        />
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 text-sm text-rose-500 bg-rose-50 border border-rose-100 rounded-xl px-4 py-2.5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
        <p className="text-xs text-slate-400">
          Your resume is analyzed securely and never shared with employers
          without your action.
        </p>
        <AnalyzeButton
          onClick={onAnalyze}
          disabled={!canAnalyze}
          loading={loading}
        />
      </div>
    </motion.div>
  );
}