import {
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ResumeTab() {

  const strengths = [
    "Java",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "REST API",
  ];

  const missing = [
    "Docker",
    "AWS",
    "Kubernetes",
  ];

  const suggestions = [
    "Add measurable project achievements.",
    "Include Docker deployment experience.",
    "Mention REST API performance improvements.",
    "Highlight hackathons and internships.",
  ];

  return (
    <div className="space-y-6">

      {/* Score */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 p-6 text-white"
      >

        <p className="text-sm opacity-90">
          Resume Score
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          92%
        </h1>

        <div className="mt-5 h-3 rounded-full bg-white/20">

          <div
            className="h-full rounded-full bg-white"
            style={{ width: "92%" }}
          />

        </div>

        <p className="mt-4 text-sm opacity-90">
          Excellent! A few improvements could make
          your profile stand out even more.
        </p>

      </motion.div>

      {/* Strengths */}

      <div className="rounded-2xl bg-white p-5 shadow-sm">

        <h3 className="mb-4 font-semibold">
          Strengths
        </h3>

        <div className="space-y-3">

          {strengths.map((skill) => (

            <div
              key={skill}
              className="flex items-center gap-3"
            >

              <CheckCircle2
                className="text-green-500"
                size={18}
              />

              {skill}

            </div>

          ))}

        </div>

      </div>

      {/* Missing */}

      <div className="rounded-2xl bg-white p-5 shadow-sm">

        <h3 className="mb-4 font-semibold">
          Missing Skills
        </h3>

        <div className="space-y-3">

          {missing.map((skill) => (

            <div
              key={skill}
              className="flex items-center gap-3"
            >

              <XCircle
                className="text-red-500"
                size={18}
              />

              {skill}

            </div>

          ))}

        </div>

      </div>

      {/* Suggestions */}

      <div className="rounded-2xl bg-pink-50 p-5">

        <div className="flex items-center gap-2">

          <Sparkles
            className="text-pink-500"
            size={18}
          />

          <h3 className="font-semibold">
            AI Suggestions
          </h3>

        </div>

        <div className="mt-4 space-y-4">

          {suggestions.map((item) => (

            <div
              key={item}
              className="flex gap-3 text-sm"
            >

              <ArrowRight
                size={16}
                className="mt-1 text-pink-500"
              />

              {item}

            </div>

          ))}

        </div>

      </div>

      <button className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-semibold text-white hover:opacity-90">

        Improve Resume

      </button>

    </div>
  );
}