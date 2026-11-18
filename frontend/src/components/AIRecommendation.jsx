import {
  Sparkles,
  X,
  MapPin,
  Briefcase,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function AIRecommendation({
  profile,
  jobs,
  onClose,
}) {
  const recommendedJobs = [...jobs]
    .sort((a, b) => b.match - a.match)
    .slice(0, 5);

  return (
    <>
      {/* Background */}

      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Modal */}

      <div className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">

          <div>
            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 p-3">
                <Sparkles className="text-white" size={22} />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  AI Career Assistant
                </h2>

                <p className="text-sm text-gray-500">
                  Personalized recommendations based on your profile
                </p>
              </div>

            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-3 hover:bg-gray-100"
          >
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="grid lg:grid-cols-3">

          {/* Left */}

          <div className="border-r bg-gray-50 p-6">

            <h3 className="text-lg font-semibold">
              Your Profile
            </h3>

            <div className="mt-5 space-y-5">

              <div>
                <p className="text-sm text-gray-500">
                  Preferred Role
                </p>

                <p className="font-semibold">
                  {profile.role}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Experience
                </p>

                <p className="font-semibold">
                  {profile.experience}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Preferred Location
                </p>

                <p className="font-semibold">
                  {profile.preferredLocation}
                </p>
              </div>

              <div>

                <p className="mb-3 text-sm text-gray-500">
                  Skills
                </p>

                <div className="flex flex-wrap gap-2">

                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="col-span-2 p-6">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="text-lg font-semibold">
                Best Matches
              </h3>

              <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-600">
                Top {recommendedJobs.length} Jobs
              </span>

            </div>

            <div className="space-y-4">

              {recommendedJobs.map((job) => (

                <div
                  key={job.id}
                  className="rounded-2xl border border-gray-200 p-5 transition hover:border-pink-300 hover:shadow-lg"
                >

                  <div className="flex items-start justify-between">

                    <div>

                      <h3 className="text-lg font-semibold">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-gray-500">
                        {job.company}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500">

                        <div className="flex items-center gap-1">
                          <MapPin size={15} />
                          {job.location}
                        </div>

                        <div className="flex items-center gap-1">
                          <Briefcase size={15} />
                          {job.type}
                        </div>

                      </div>

                    </div>

                    <div className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white">
                      {job.match}% Match
                    </div>

                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {job.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                  <div className="mt-6 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-green-600">

                      <CheckCircle2 size={18} />

                      <span className="text-sm font-medium">
                        Recommended for your profile
                      </span>

                    </div>

                    <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2 text-sm font-medium text-white hover:opacity-95">

                      View Job

                      <ArrowUpRight size={16} />

                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}