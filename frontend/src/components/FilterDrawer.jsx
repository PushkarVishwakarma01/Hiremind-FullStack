import { X } from "lucide-react";

export default function FilterDrawer({
  open,
  onClose,
  filters,
  setFilters,
}) {
  if (!open) return null;

  return (
    <>
      {/* Background */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
      />

      {/* Drawer */}

      <div className="fixed right-0 top-0 z-50 h-screen w-[360px] overflow-y-auto bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-xl font-semibold">
            Filter Jobs
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div className="space-y-7 p-6">
          {/* Location */}

          <div>
            <label className="mb-2 block font-medium">
              Location
            </label>

            <select
              className="w-full rounded-xl border p-3"
              value={filters.location}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  location: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Bangalore</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Remote</option>
            </select>
          </div>

          {/* Experience */}

          <div>
            <label className="mb-2 block font-medium">
              Experience
            </label>

            <select
              className="w-full rounded-xl border p-3"
              value={filters.experience}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  experience: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Fresher</option>
              <option>0-2 Years</option>
              <option>2-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          {/* Job Type */}

          <div>
            <label className="mb-2 block font-medium">
              Job Type
            </label>

            <select
              className="w-full rounded-xl border p-3"
              value={filters.type}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  type: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>

          {/* Work Mode */}

          <div>
            <label className="mb-2 block font-medium">
              Work Mode
            </label>

            <select
              className="w-full rounded-xl border p-3"
              value={filters.workMode}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  workMode: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Onsite</option>
            </select>
          </div>

          {/* Salary */}

          <div>
            <label className="mb-2 block font-medium">
              Salary
            </label>

            <select
              className="w-full rounded-xl border p-3"
              value={filters.salary}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  salary: e.target.value,
                })
              }
            >
              <option value="">All</option>
              <option>5 LPA</option>
              <option>10 LPA</option>
              <option>15 LPA</option>
              <option>20+ LPA</option>
            </select>
          </div>
        </div>

        {/* Footer */}

        <div className="sticky bottom-0 flex gap-3 border-t bg-white p-6">
          <button
            onClick={() =>
              setFilters({
                location: "",
                experience: "",
                type: "",
                workMode: "",
                salary: "",
              })
            }
            className="flex-1 rounded-xl border border-gray-300 py-3 font-medium hover:bg-gray-100"
          >
            Reset
          </button>

          <button
            onClick={onClose}
            className="flex-1 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-3 font-medium text-white hover:opacity-95"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}