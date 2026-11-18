import { useState } from "react";
import {
  Building2,
  MapPin,
  IndianRupee,
  Briefcase,
  CalendarDays,
  Eye,
  Trash2,
  CheckCircle2,
  Clock3,
  XCircle,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
} from "lucide-react";

import HorizontalTimeline from "./HorizontalTimeline";
import ApplicationTimeline from "./ApplicationTimeline";

const STATUS = {
  Applied: {
    color: "bg-blue-100 text-blue-700",
    icon: Clock3,
  },

  "Under Review": {
    color: "bg-yellow-100 text-yellow-700",
    icon: Eye,
  },

  Interview: {
    color: "bg-purple-100 text-purple-700",
    icon: CalendarDays,
  },

  Selected: {
    color: "bg-green-100 text-green-700",
    icon: CheckCircle2,
  },

  Rejected: {
    color: "bg-red-100 text-red-700",
    icon: XCircle,
  },
};

export default function AppliedJobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  const config = STATUS[job.status];
  const StatusIcon = config.icon;

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">

      {/* HEADER */}

      <div className="p-6">

        <div className="flex items-start justify-between">

          <div className="flex gap-4">

            <img
              src={job.logo}
              alt={job.company}
              className="h-14 w-14 rounded-2xl border"
            />

            <div>

              <h2 className="text-xl font-semibold">
                {job.title}
              </h2>

              <div className="mt-2 flex items-center gap-2 text-gray-500">

                <Building2 size={16} />

                {job.company}

              </div>

            </div>

          </div>

          <div
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${config.color}`}
          >
            <StatusIcon size={16} />

            {job.status}
          </div>

        </div>

        {/* Job Details */}

        <div className="mt-6 grid gap-5 md:grid-cols-4">

          <div className="flex items-center gap-2 text-gray-600">

            <MapPin size={16} />

            {job.location}

          </div>

          <div className="flex items-center gap-2 text-gray-600">

            <Briefcase size={16} />

            {job.type}

          </div>

          <div className="flex items-center gap-2 text-gray-600">

            <IndianRupee size={16} />

            {job.salary}

          </div>

          <div className="rounded-full bg-gray-100 px-4 py-2 text-center text-sm font-medium">

            {job.workMode}

          </div>

        </div>

        {/* Horizontal Timeline */}

        <div className="mt-8">

          <HorizontalTimeline
            timeline={job.timeline}
          />

        </div>

        {/* Bottom */}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">

          <span className="text-sm text-gray-500">

            Applied on{" "}

            {new Date(job.appliedDate).toLocaleDateString()}

          </span>

          <div className="flex gap-3">

            <button
              onClick={() =>
                setExpanded(!expanded)
              }
              className="flex items-center gap-2 rounded-xl border border-pink-200 px-5 py-2 font-medium text-pink-600 hover:bg-pink-50"
            >

              {expanded ? (
                <>
                  Hide Details

                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  View Details

                  <ChevronDown size={18} />
                </>
              )}

            </button>

            {job.status !== "Rejected" &&
              job.status !== "Selected" && (

                <button className="flex items-center gap-2 rounded-xl bg-red-50 px-5 py-2 font-medium text-red-600 hover:bg-red-100">

                  <Trash2 size={17} />

                  Withdraw

                </button>

              )}

          </div>

        </div>

      </div>

      {/* EXPANDABLE SECTION */}

      {expanded && (

        <div className="border-t bg-gray-50 p-6">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Timeline */}

            <div>

              <h3 className="mb-5 text-lg font-semibold">

                Application Timeline

              </h3>

              <ApplicationTimeline
                timeline={job.timeline}
              />

            </div>

            {/* Right */}

            <div className="space-y-6">

              <div>

                <h3 className="mb-3 text-lg font-semibold">

                  Recruiter Notes

                </h3>

                <div className="rounded-2xl bg-white p-5 shadow-sm">

                  <p className="text-gray-600">

                    Your application is currently under
                    review.

                    We'll notify you once the recruiter
                    updates your application.

                  </p>

                </div>

              </div>

              <div>

                <h3 className="mb-3 text-lg font-semibold">

                  Resume

                </h3>

                <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm">

                  <div className="flex items-center gap-3">

                    <FileText
                      className="text-pink-500"
                      size={24}
                    />

                    <div>

                      <p className="font-medium">

                        Resume.pdf

                      </p>

                      <p className="text-sm text-gray-500">

                        Uploaded while applying

                      </p>

                    </div>

                  </div>

                  <button className="rounded-xl bg-pink-500 p-3 text-white">

                    <Download size={18} />

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}