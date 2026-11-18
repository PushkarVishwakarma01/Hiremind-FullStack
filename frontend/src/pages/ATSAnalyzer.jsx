// src/pages/ATSAnalyzer.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ATSHero from "../components/ats/ATSHero";
import ATSUploadCard from "../components/ats/ATSUploadCard";
import ATSLoading from "../components/ats/ATSLoading";
import ATSResult from "../components/ats/ATSResult";
import AnalysisHistory from "../components/ats/AnalysisHistory";
import { uploadResumeAI, analyzeResume, getATSHistoryById } from "../services/atsApi";

// Route: add   <Route path="/ats" element={<ATSAnalyzer />} />   to your router.

export default function ATSAnalyzer() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [uploadInfo, setUploadInfo] = useState(null); // { resumeId, candidateProfileId, fileName }
  const [result, setResult] = useState(null);
  const [analyzedAt, setAnalyzedAt] = useState(null);

  const [status, setStatus] = useState("idle"); // idle | uploading | analyzing | done
  const [error, setError] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  const loading = status === "uploading" || status === "analyzing";

  function handleFileSelected(selected, fileError) {
    setError(fileError);
    setFile(selected);
    setUploadInfo(null);
  }

  async function handleAnalyze() {
    setError(null);
    try {
      // Step 1 — upload + AI-parse the resume if we haven't already for this file
      let info = uploadInfo;
      if (!info) {
        setStatus("uploading");
        info = await uploadResumeAI(file);
        setUploadInfo(info);
      }

      // Step 2 — run the ATS match against the job description
      setStatus("analyzing");
      const analysis = await analyzeResume({
        resumeId: info.resumeId,
        jobDescription,
      });

      setResult(analysis);
      setAnalyzedAt(new Date().toISOString());
      setStatus("done");
    } catch (e) {
      setError(e.message || "Something went wrong. Please try again.");
      setStatus("idle");
    }
  }

  function handleReset() {
    setFile(null);
    setJobDescription("");
    setUploadInfo(null);
    setResult(null);
    setAnalyzedAt(null);
    setStatus("idle");
    setError(null);
  }

  async function handleSelectHistoryEntry(id) {
    try {
      setError(null);
      const analysis = await getATSHistoryById(id);
      setResult(analysis);
      setAnalyzedAt(null);
      setStatus("done");
      setShowHistory(false);
    } catch (e) {
      setError(e.message || "Couldn't load that analysis.");
    }
  }

  return (
    <div className="min-h-full w-full bg-[#FAFAFB] px-4 sm:px-8 lg:px-12 py-10">
      <div className="max-w-4xl mx-auto">
        <ATSHero
          onToggleHistory={() => setShowHistory((s) => !s)}
          showingHistory={showHistory}
        />

        <AnimatePresence mode="wait">
          {showHistory ? (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <AnalysisHistory
                candidateProfileId={uploadInfo?.candidateProfileId}
                onSelect={handleSelectHistoryEntry}
              />
            </motion.div>
          ) : status === "done" && result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ATSResult
                result={result}
                fileName={uploadInfo?.fileName || file?.name}
                analyzedAt={analyzedAt}
                onReset={handleReset}
              />
            </motion.div>
          ) : loading ? (
            <motion.div key="loading" exit={{ opacity: 0 }}>
              <ATSLoading />
            </motion.div>
          ) : (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <ATSUploadCard
                file={file}
                onFileSelected={handleFileSelected}
                jobDescription={jobDescription}
                onJobDescriptionChange={setJobDescription}
                onAnalyze={handleAnalyze}
                loading={loading}
                error={error}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
















// // src/pages/ATSAnalyzer.jsx
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import ATSHero from "../components/ats/ATSHero";
// import ATSUploadCard from "../components/ats/ATSUploadCard";
// import ATSLoading from "../components/ats/ATSLoading";
// import ATSResult from "../components/ats/ATSResult";
// import AnalysisHistory from "../components/ats/AnalysisHistory";
// import { uploadResumeAI, analyzeResume, getATSHistoryById } from "../services/atsApi";

// // Route: add   <Route path="/ats" element={<ATSAnalyzer />} />   to your router.

// export default function ATSAnalyzer() {
//   const [file, setFile] = useState(null);
//   const [jobDescription, setJobDescription] = useState("");
//   const [uploadInfo, setUploadInfo] = useState(null); // { resumeId, candidateProfileId, fileName }
//   const [result, setResult] = useState(null);
//   const [analyzedAt, setAnalyzedAt] = useState(null);

//   const [status, setStatus] = useState("idle"); // idle | uploading | analyzing | done
//   const [error, setError] = useState(null);
//   const [showHistory, setShowHistory] = useState(false);

//   const loading = status === "uploading" || status === "analyzing";

//   function handleFileSelected(selected, fileError) {
//     setError(fileError);
//     setFile(selected);
//     setUploadInfo(null);
//   }

//   async function handleAnalyze() {
//     setError(null);
//     try {
//       // Step 1 — upload + AI-parse the resume if we haven't already for this file
//       let info = uploadInfo;
//       if (!info) {
//         setStatus("uploading");
//         info = await uploadResumeAI(file);
//         setUploadInfo(info);
//       }

//       // Step 2 — run the ATS match against the job description
//       setStatus("analyzing");
//       const analysis = await analyzeResume({
//         resumeId: info.resumeId,
//         jobDescription,
//       });

//       setResult(analysis);
//       setAnalyzedAt(new Date().toISOString());
//       setStatus("done");
//     } catch (e) {
//       setError(e.message || "Something went wrong. Please try again.");
//       setStatus("idle");
//     }
//   }

//   function handleReset() {
//     setFile(null);
//     setJobDescription("");
//     setUploadInfo(null);
//     setResult(null);
//     setAnalyzedAt(null);
//     setStatus("idle");
//     setError(null);
//   }

//   async function handleSelectHistoryEntry(id) {
//     try {
//       setError(null);
//       const analysis = await getATSHistoryById(id);
//       setResult(analysis);
//       setAnalyzedAt(null);
//       setStatus("done");
//       setShowHistory(false);
//     } catch (e) {
//       setError(e.message || "Couldn't load that analysis.");
//     }
//   }

//   return (
//     <div className="min-h-full w-full bg-[#FAFAFB] px-4 sm:px-8 lg:px-12 py-10">
//       <div className="max-w-4xl mx-auto">
//         <ATSHero
//           onToggleHistory={() => setShowHistory((s) => !s)}
//           showingHistory={showHistory}
//         />

//         <AnimatePresence mode="wait">
//           {showHistory ? (
//             <motion.div
//               key="history"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               <AnalysisHistory
//                 candidateProfileId={uploadInfo?.candidateProfileId}
//                 onSelect={handleSelectHistoryEntry}
//               />
//             </motion.div>
//           ) : status === "done" && result ? (
//             <motion.div
//               key="result"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               <ATSResult
//                 result={result}
//                 fileName={uploadInfo?.fileName || file?.name}
//                 analyzedAt={analyzedAt}
//                 onReset={handleReset}
//               />
//             </motion.div>
//           ) : loading ? (
//             <motion.div key="loading" exit={{ opacity: 0 }}>
//               <ATSLoading />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="upload"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               <ATSUploadCard
//                 file={file}
//                 onFileSelected={handleFileSelected}
//                 jobDescription={jobDescription}
//                 onJobDescriptionChange={setJobDescription}
//                 onAnalyze={handleAnalyze}
//                 loading={loading}
//                 error={error}
//               />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }