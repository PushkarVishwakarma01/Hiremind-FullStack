import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Coffee,
  Database,
  Brain,
  Cloud,
  Boxes,
  Briefcase,
  Layers,
} from "lucide-react";

const categories = [
  {
    id: "all",
    label: "All",
    icon: BookOpen,
  },
  {
    id: "java",
    label: "Java",
    icon: Coffee,
  },
  {
    id: "spring",
    label: "Spring Boot",
    icon: Layers,
  },
  {
    id: "react",
    label: "React",
    icon: Code2,
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
  },
  {
    id: "docker",
    label: "Docker",
    icon: Boxes,
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: Cloud,
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: Brain,
  },
  {
    id: "interview",
    label: "Interview",
    icon: Briefcase,
  },
];

export default function ResourceCategories({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <section className="mt-8">
      <div className="flex gap-3 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm scrollbar-hide">

        {categories.map((category) => {
          const Icon = category.icon;
          const active = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="relative shrink-0"
            >
              {active && (
                <motion.div
                  layoutId="resource-category"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500"
                />
              )}

              <div
                className={`relative z-10 flex items-center gap-2 rounded-xl px-5 py-3 transition ${
                  active
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon size={18} />

                <span className="text-sm font-medium">
                  {category.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}