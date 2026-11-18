import LearningPathCard from "./LearningPathCard";
import { learningPaths } from "../../data/learningPaths";

export default function LearningPathGrid() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Learning Paths
          </h2>

          <p className="mt-1 text-gray-500">
            Structured roadmaps to achieve your dream role.
          </p>

        </div>

        <button className="rounded-xl border border-gray-200 px-5 py-2 hover:bg-gray-50">
          View All
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {learningPaths.map((path) => (

          <LearningPathCard
            key={path.id}
            path={path}
          />

        ))}

      </div>

    </section>
  );
}