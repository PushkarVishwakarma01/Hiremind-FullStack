import { X } from "lucide-react";

export default function AppliedFilterDrawer({
  open,
  onClose,
  filters,
  setFilters,
}) {
  if (!open) return null;

  const resetFilters = () => {
    setFilters({
      status: "",
      company: "",
      location: "",
      workMode: "",
      sort: "Newest",
    });
  };

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 z-50 flex h-screen w-[380px] flex-col bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Filter Applications
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Narrow down your applied jobs
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="flex-1 space-y-6 overflow-y-auto p-6">

          {/* Status */}

          <div>
            <label className="mb-2 block font-medium">
              Application Status
            </label>

            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  status: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-3 focus:border-pink-400 focus:outline-none"
            >
              <option value="">All</option>
              <option>Applied</option>
              <option>Under Review</option>
              <option>Interview</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Company */}

          <div>
            <label className="mb-2 block font-medium">
              Company
            </label>

            <input
              type="text"
              placeholder="Google..."
              value={filters.company}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  company: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-3 focus:border-pink-400 focus:outline-none"
            />
          </div>

          {/* Location */}

          <div>
            <label className="mb-2 block font-medium">
              Location
            </label>

            <select
              value={filters.location}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  location: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-3 focus:border-pink-400 focus:outline-none"
            >
              <option value="">All</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Pune</option>
              <option>Noida</option>
              <option>Remote</option>
            </select>
          </div>

          {/* Work Mode */}

          <div>
            <label className="mb-2 block font-medium">
              Work Mode
            </label>

            <select
              value={filters.workMode}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  workMode: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-3 focus:border-pink-400 focus:outline-none"
            >
              <option value="">All</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>
          </div>

          {/* Sort */}

          <div>
            <label className="mb-2 block font-medium">
              Sort By
            </label>

            <select
              value={filters.sort}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sort: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-3 focus:border-pink-400 focus:outline-none"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Company (A-Z)</option>
              <option>Status</option>
            </select>
          </div>

        </div>

        {/* Footer */}

        <div className="flex gap-3 border-t p-6">

          <button
            onClick={resetFilters}
            className="flex-1 rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-100"
          >
            Reset
          </button>

          <button
            onClick={onClose}
            className="flex-1 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-3 font-medium text-white transition hover:opacity-90"
          >
            Apply Filters
          </button>

        </div>

      </div>
    </>
  );
}