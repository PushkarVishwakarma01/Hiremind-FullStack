// src/components/ats/ATSResult.jsx
import { motion } from "framer-motion";
import JobResumeCard from "./JobResumeCard";
import ScoreCards from "./ScoreCards";
import SkillsComparison from "./SkillsComparison";
import SkillGapList from "./SkillGapList";
import ResumeSuggestions from "./ResumeSuggestions";
import LearningRoadmap from "./LearningRoadmap";
import InterviewQuestions from "./InterviewQuestions";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ATSResult({ result, fileName, analyzedAt, onReset }) {
  if (!result) return null;

  const {
    scores,
    matchedSkills,
    missingSkills,
    strengths,
    weaknesses,
    resumeSuggestions,
    learningRoadmap,
    interviewQuestions,
  } = result;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <motion.div variants={item}>
        <JobResumeCard
          fileName={fileName}
          analyzedAt={analyzedAt}
          onReset={onReset}
        />
      </motion.div>

      <motion.div variants={item}>
        <ScoreCards scores={scores} />
      </motion.div>

      <motion.div variants={item}>
        <SkillsComparison
          matchedSkills={matchedSkills}
          missingSkills={missingSkills}
        />
      </motion.div>

      <motion.div variants={item}>
        <SkillGapList missingSkills={missingSkills} />
      </motion.div>

      {(strengths?.length > 0 || weaknesses?.length > 0) && (
        <motion.div
          variants={item}
          className="grid sm:grid-cols-2 gap-6 rounded-3xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              Strengths
            </p>
            <ul className="flex flex-col gap-2.5">
              {(strengths || []).map((s, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-500 mb-3">
              Watch-outs
            </p>
            <ul className="flex flex-col gap-2.5">
              {(weaknesses || []).map((w, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 flex-shrink-0" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div variants={item}>
          <ResumeSuggestions suggestions={resumeSuggestions} />
        </motion.div>
        <motion.div variants={item}>
          <LearningRoadmap roadmap={learningRoadmap} />
        </motion.div>
      </div>

      <motion.div variants={item}>
        <InterviewQuestions questions={interviewQuestions} />
      </motion.div>
    </motion.div>
  );
}