import {
  ArrowUpRight,
  Sparkles,
  Briefcase,
  MapPin,
} from "lucide-react";

import { jobs } from "../../data/jobs";
import { userProfile } from "../../data/userProfile";

export default function JobsTab() {

  const recommendedJobs = [...jobs]
    .sort((a, b) => b.match - a.match)
    .slice(0, 4);

  return (
    <div className="space-y-6">

      {/* AI Header */}

      <div className="rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 p-5 text-white">

        <div className="flex items-center gap-3">

          <Sparkles size={22} />

          <div>

            <h2 className="font-semibold text-lg">
              AI Recommendations
            </h2>

            <p className="text-sm text-pink-100">
              Personalized for your profile
            </p>

          </div>

        </div>

      </div>

      {/* Recommended Jobs */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <h3 className="font-semibold text-gray-800">
            Top Matches
          </h3>

          <button className="text-sm font-medium text-pink-600 hover:underline">
            View All
          </button>

        </div>

        <div className="space-y-4">

          {recommendedJobs.map((job) => (

            <div
              key={job.id}
              className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg"
            >

              <div className="flex items-start justify-between">

                <div>

                  <h4 className="font-semibold text-gray-900">
                    {job.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-500">
                    {job.company}
                  </p>

                </div>

                <div className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-600">
                  {job.match}%
                </div>

              </div>

              <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">

                <div className="flex items-center gap-1">

                  <MapPin size={14} />

                  {job.location}

                </div>

                <div className="flex items-center gap-1">

                  <Briefcase size={14} />

                  {job.type}

                </div>

              </div>

              <div className="mt-4 flex flex-wrap gap-2">

                {job.skills.slice(0, 3).map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <button
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 py-2.5 font-medium text-white transition hover:bg-pink-600"
              >
                View Job

                <ArrowUpRight size={16} />

              </button>

            </div>

          ))}

        </div>

      </div>

      {/* AI Insight */}

      <div className="rounded-2xl border border-pink-100 bg-pink-50 p-5">

        <div className="flex items-center gap-2">

          <Sparkles
            size={18}
            className="text-pink-500"
          />

          <h3 className="font-semibold">
            AI Insight
          </h3>

        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">

          Based on your profile,

          <span className="font-semibold">
            {" "}
            {userProfile.skills[0]}
          </span>

          ,

          <span className="font-semibold">
            {" "}
            {userProfile.skills[1]}
          </span>

          ,

          and

          <span className="font-semibold">
            {" "}
            {userProfile.skills[2]}
          </span>

          are currently in high demand.

          Learning

          <span className="font-semibold text-pink-600">
            {" "}
            Docker
          </span>

          {" "}and{" "}

          <span className="font-semibold text-pink-600">
            AWS
          </span>

          {" "}could increase your AI job match by approximately

          <span className="font-semibold text-pink-600">
            {" "}12%
          </span>.

        </p>

      </div>

    </div>
  );
}