import {
  CheckCircle2,
  Circle,
  Clock3,
} from "lucide-react";

const STEPS = [
  "Applied",
  "Resume Viewed",
  "HR Round",
  "Technical Round",
  "Interview",
  "Selected",
];

export default function HorizontalTimeline({
  timeline,
}) {
  const currentIndex = timeline.length - 1;

  return (
    <div className="w-full py-4">

      <div className="flex items-center justify-between">

        {STEPS.map((step, index) => {

          const completed = timeline.includes(step);

          const current =
            index === currentIndex && completed;

          return (

            <div
              key={step}
              className="flex flex-1 items-center"
            >

              {/* Node */}

              <div className="flex flex-col items-center">

                {completed ? (

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full
                    ${
                      current
                        ? "bg-pink-500"
                        : "bg-green-500"
                    }`}
                  >
                    {current ? (
                      <Clock3
                        size={18}
                        className="text-white"
                      />
                    ) : (
                      <CheckCircle2
                        size={18}
                        className="text-white"
                      />
                    )}
                  </div>

                ) : (

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 bg-white">

                    <Circle
                      size={16}
                      className="text-gray-300"
                    />

                  </div>

                )}

                <span
                  className={`mt-2 text-center text-xs font-medium
                  ${
                    completed
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {step}
                </span>

              </div>

              {/* Line */}

              {index !== STEPS.length - 1 && (

                <div
                  className={`mx-2 mb-7 h-1 flex-1 rounded-full
                  ${
                    index < currentIndex
                      ? "bg-green-500"
                      : "bg-gray-200"
                  }`}
                />

              )}

            </div>

          );
        })}
      </div>
    </div>
  );
}