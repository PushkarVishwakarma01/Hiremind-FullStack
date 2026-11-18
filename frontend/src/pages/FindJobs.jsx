import { useMemo, useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import JobsGrid from "../components/JobsGrid";
import FilterDrawer from "../components/FilterDrawer";
import AIRecommendation from "../components/AIRecommendation";

import { jobs } from "../data/jobs";
import { userProfile } from "../data/userProfile";

export default function FindJobs() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("find-jobs");

  const [search, setSearch] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [showAI, setShowAI] = useState(false);

  const [filters, setFilters] = useState({
    location: "",
    experience: "",
    type: "",
    workMode: "",
    salary: "",
  });

  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        const keyword = search.toLowerCase();

        const matchesSearch =
          job.title.toLowerCase().includes(keyword) ||
          job.company.toLowerCase().includes(keyword) ||
          job.location.toLowerCase().includes(keyword) ||
          job.skills.some((skill) =>
            skill.toLowerCase().includes(keyword)
          );

        const matchesLocation =
          !filters.location ||
          job.location === filters.location;

        const matchesExperience =
          !filters.experience ||
          job.experience === filters.experience;

        const matchesType =
          !filters.type ||
          job.type === filters.type;

        const matchesWorkMode =
          !filters.workMode ||
          job.workMode === filters.workMode;

        return (
          matchesSearch &&
          matchesLocation &&
          matchesExperience &&
          matchesType &&
          matchesWorkMode
        );
      })
      .sort(
        (a, b) =>
          new Date(b.createdAt) -
          new Date(a.createdAt)
      );
  }, [search, filters]);

  return (
    <div
      className="flex h-screen bg-[#FBFAFC]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar
          search={search}
          setSearch={setSearch}
          onFilterClick={() => setDrawerOpen(true)}
          onAIRecommend={() => setShowAI(true)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Heading */}

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">
              Find Your Dream Job
            </h1>

            <p className="mt-2 text-gray-500">
              Discover opportunities tailored for you.
            </p>
          </div>

          {/* Total */}

          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-500">
              {filteredJobs.length} Jobs Found
            </p>

            <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
              Sorted by Latest
            </span>
          </div>

          {/* Jobs */}

          <JobsGrid jobs={filteredJobs} />
        </main>
      </div>

      {/* Drawer */}

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />

      {/* AI */}

      {showAI && (
        <AIRecommendation
          profile={userProfile}
          jobs={jobs}
          onClose={() => setShowAI(false)}
        />
      )}
    </div>
  );
}