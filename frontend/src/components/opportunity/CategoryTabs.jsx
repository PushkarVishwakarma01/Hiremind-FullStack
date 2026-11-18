import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Trophy,
  GraduationCap,
  Award,
  Rocket,
  Code2,
  Globe,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "all",
    label: "All",
    icon: Briefcase,
  },
  {
    id: "jobs",
    label: "Jobs",
    icon: Briefcase,
  },
  {
    id: "hackathons",
    label: "Hackathons",
    icon: Trophy,
  },
  {
    id: "internships",
    label: "Internships",
    icon: GraduationCap,
  },
  {
    id: "certifications",
    label: "Certificates",
    icon: Award,
  },
  {
    id: "startup",
    label: "Startup",
    icon: Rocket,
  },
  {
    id: "opensource",
    label: "Open Source",
    icon: Code2,
  },
  {
    id: "scholarships",
    label: "Scholarships",
    icon: Globe,
  },
];

export default function CategoryTabs({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mt-8 overflow-x-auto">
      <div className="flex w-max gap-3 rounded-2xl bg-white p-2 shadow-sm">

        {CATEGORIES.map((category) => {

          const Icon = category.icon;

          const active =
            activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() =>
                setActiveCategory(category.id)
              }
              className="relative"
            >
              {active && (
                <motion.div
                  layoutId="category"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500"
                />
              )}

              <div
                className={`relative z-10 flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition ${
                  active
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon size={16} />

                {category.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}