import { CheckCircle2, Circle } from "lucide-react";

const STEPS = [
  "Applied",
  "Resume Viewed",
  "HR Round",
  "Technical Round",
  "Interview",
  "Selected",
];

export default function ApplicationTimeline({ timeline }) {
  // Last completed step
  const currentIndex = timeline.length - 1;

  return (
    <div className="mt-6">
      <h4 className="mb-4 text-sm font-semibold text-gray-800">
        Application Progress
      </h4>

      <div className="space-y-4">
        {STEPS.map((step, index) => {
          const completed = timeline.includes(step);

          const current = index === currentIndex;

          return (
            <div
              key={step}
              className="flex items-start gap-3"
            >
              {/* Left */}

              <div className="flex flex-col items-center">

                {completed ? (
                  <CheckCircle2
                    size={20}
                    className="text-green-500"
                  />
                ) : current ? (
                  <div className="h-5 w-5 rounded-full border-4 border-pink-500" />
                ) : (
                  <Circle
                    size={18}
                    className="text-gray-300"
                  />
                )}

                {index !== STEPS.length - 1 && (
                  <div
                    className={`mt-1 h-8 w-[2px] ${
                      completed
                        ? "bg-green-500"
                        : "bg-gray-200"
                    }`}
                  />
                )}
              </div>

              {/* Right */}

              <div>

                <p
                  className={`text-sm font-medium ${
                    completed
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </p>

                {current && completed && (
                  <span className="text-xs text-pink-500">
                    Current Stage
                  </span>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}