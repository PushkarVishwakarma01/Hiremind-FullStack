import { useMemo, useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import ApplicationStats from "../components/ApplicationStats";
import AppliedJobCard from "../components/AppliedJobCard";
import AppliedFilterDrawer from "../components/AppliedFilterDrawer";

import { appliedJobs } from "../data/appliedJobs";

export default function AppliedJobs() {
  const [collapsed, setCollapsed] = useState(false);

  const [search, setSearch] = useState("");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [filters, setFilters] = useState({
    status: "",
    company: "",
    location: "",
    workMode: "",
    sort: "Newest",
  });

  const filteredJobs = useMemo(() => {
    let list = [...appliedJobs];

    // Search

    if (search.trim()) {
      const keyword = search.toLowerCase();

      list = list.filter(
        (job) =>
          job.title.toLowerCase().includes(keyword) ||
          job.company.toLowerCase().includes(keyword)
      );
    }

    // Filters

    if (filters.status)
      list = list.filter((j) => j.status === filters.status);

    if (filters.company)
      list = list.filter((j) =>
        j.company
          .toLowerCase()
          .includes(filters.company.toLowerCase())
      );

    if (filters.location)
      list = list.filter(
        (j) => j.location === filters.location
      );

    if (filters.workMode)
      list = list.filter(
        (j) => j.workMode === filters.workMode
      );

    // Sort

    switch (filters.sort) {
      case "Oldest":
        list.sort(
          (a, b) =>
            new Date(a.appliedDate) -
            new Date(b.appliedDate)
        );
        break;

      case "Company (A-Z)":
        list.sort((a, b) =>
          a.company.localeCompare(b.company)
        );
        break;

      case "Status":
        list.sort((a, b) =>
          a.status.localeCompare(b.status)
        );
        break;

      default:
        list.sort(
          (a, b) =>
            new Date(b.appliedDate) -
            new Date(a.appliedDate)
        );
    }

    return list;
  }, [search, filters]);

  return (
    <div className="flex h-screen bg-[#FBFAFC]">

      <div className="flex flex-1 flex-col overflow-hidden">

        <TopBar
          search={search}
          setSearch={setSearch}
          onFilterClick={() => setDrawerOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-8">

          {/* Header */}

          <div className="mb-8">

            <h1 className="text-4xl font-bold text-gray-900">
              Applied Jobs
            </h1>

            <p className="mt-2 text-gray-500">
              Track your applications and monitor
              every stage of the hiring process.
            </p>

          </div>

          {/* Statistics */}

          <ApplicationStats jobs={appliedJobs} />

          {/* Toolbar */}

          <div className="mt-10 flex items-center justify-between">

            <div>

              <h2 className="text-xl font-semibold">
                Applications
              </h2>

              <p className="text-gray-500">

                {filteredJobs.length} Results

              </p>

            </div>

            <button
              onClick={() =>
                setDrawerOpen(true)
              }
              className="rounded-xl border border-gray-200 bg-white px-5 py-3 font-medium shadow-sm hover:bg-gray-50"
            >
              Filter Applications
            </button>

          </div>

          {/* Cards */}

          <div className="mt-8 space-y-6">

            {filteredJobs.length ? (
              filteredJobs.map((job) => (
                <AppliedJobCard
                  key={job.id}
                  job={job}
                />
              ))
            ) : (
              <div className="rounded-3xl bg-white p-20 text-center shadow-sm">

                <h2 className="text-2xl font-semibold">
                  No Applications Found
                </h2>

                <p className="mt-2 text-gray-500">
                  Try another search or filter.
                </p>

              </div>
            )}

          </div>

        </main>

      </div>

      <AppliedFilterDrawer
        open={drawerOpen}
        onClose={() =>
          setDrawerOpen(false)
        }
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}