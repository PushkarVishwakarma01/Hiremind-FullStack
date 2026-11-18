// src/components/ats/UploadResumeCard.jsx
import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCEPTED = [".pdf", ".doc", ".docx"];

export default function UploadResumeCard({ file, onFileSelected, disabled }) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = useCallback(
    (fileList) => {
      const picked = fileList?.[0];
      if (!picked) return;
      const ext = "." + picked.name.split(".").pop().toLowerCase();
      if (!ACCEPTED.includes(ext)) {
        onFileSelected(null, `Please upload a ${ACCEPTED.join(", ")} file.`);
        return;
      }
      onFileSelected(picked, null);
    },
    [onFileSelected]
  );

  return (
    <div>
      <p className="text-sm font-semibold text-slate-800 mb-2">Your resume</p>
      <motion.div
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (!disabled) handleFiles(e.dataTransfer.files);
        }}
        onClick={() => !disabled && inputRef.current?.click()}
        animate={{
          borderColor: isDragging ? "#EC4899" : "#E5E7EB",
          backgroundColor: isDragging ? "#FDF2F8" : "#FAFAFB",
        }}
        className={`relative rounded-2xl border-2 border-dashed p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-opacity ${
          disabled ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED.join(",")}
          className="hidden"
          disabled={disabled}
          onChange={(e) => handleFiles(e.target.files)}
        />

        <AnimatePresence mode="wait">
          {file ? (
            <motion.div
              key="file"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">
                {file.name.split(".").pop().toUpperCase()}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-slate-800 truncate max-w-[220px]">
                  {file.name}
                </p>
                <p className="text-xs text-slate-400">
                  {(file.size / 1024).toFixed(0)} KB · tap to replace
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
            >
              <div className="mx-auto mb-3 h-11 w-11 rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-500 flex items-center justify-center text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 16V4m0 0L7 9m5-5l5 5M5 20h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-slate-700">
                Drop your resume here, or{" "}
                <span className="text-pink-600 underline">browse</span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                PDF, DOC or DOCX · max 10MB
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}