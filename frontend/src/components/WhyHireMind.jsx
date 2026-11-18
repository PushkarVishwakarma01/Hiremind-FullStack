import { CheckCircle2,GraduationCap } from "lucide-react";


function WhyHireMind() {
  return (
    <section className="px-6 py-10 lg:px-10">
      <h2
        className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Why <span className="text-pink-500">HireMind</span>?
      </h2>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-2">
        {/* card 1 */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">Bima Sakti</p>
              <p className="text-xs text-gray-400">bimasp22@email.com</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-gray-50 p-4">
            <p className="mb-3 text-xs font-medium text-gray-400">
              Jobs that match you
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-rose-50 p-3">
                <p className="text-xs font-medium text-gray-800">
                  Sneaker Designer
                </p>
                <p className="text-xs text-gray-400">$300/hr</p>
              </div>
              <div className="rounded-xl bg-lime-50 p-3">
                <p className="text-xs font-medium text-gray-800">
                  React Developer
                </p>
                <p className="text-xs text-gray-400">$420/hr</p>
              </div>
            </div>
          </div>
          <h3 className="mt-5 text-base font-semibold text-gray-900">
            Tailored Job Matches
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Our matching engine reads your skills and goals to surface roles
            built around you.
          </p>
        </div>

        {/* card 2 */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center py-2 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500">
              <CheckCircle2 className="text-white" size={26} />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-800">
              Your application is being reviewed
            </p>
            <div className="mt-4 flex w-full items-center justify-between text-xs text-gray-400">
              <span className="text-pink-600">Apply</span>
              <span className="text-pink-600">Review</span>
              <span>Interview</span>
            </div>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100">
              <div className="h-1.5 w-2/3 rounded-full bg-pink-500" />
            </div>
          </div>
          <h3 className="mt-5 text-base font-semibold text-gray-900">
            Streamlined Application Process
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Apply to multiple roles in a click and track every status from one
            tidy dashboard.
          </p>
        </div>

        {/* card 3 */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-5">
            <div>
              <p className="text-sm font-medium text-gray-800">
                How to Ace Your Interview
              </p>
              <p className="text-xs text-gray-500">
                Professional Designer Track
              </p>
            </div>
            <GraduationCap className="text-orange-500" size={30} />
          </div>
          <h3 className="mt-5 text-base font-semibold text-gray-900">
            Professional Growth Resources
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Articles, guides and short courses designed to sharpen your skills
            and your story.
          </p>
        </div>

        {/* card 4 */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="space-y-3">
            {[
              { name: "Hamba Allah", role: "UX Designer" },
              { name: "Sampo Lifeboy", role: "Recruiter" },
              { name: "Liquid Kental", role: "Talent Partner" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between rounded-xl bg-gray-50 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-300 to-pink-300" />
                  <div>
                    <p className="text-xs font-medium text-gray-800">
                      {p.name}
                    </p>
                    <p className="text-[11px] text-gray-400">{p.role}</p>
                  </div>
                </div>
                <button className="rounded-full bg-pink-500 px-3 py-1 text-[11px] font-medium text-white">
                  Connect
                </button>
              </div>
            ))}
          </div>
          <h3 className="mt-5 text-base font-semibold text-gray-900">
            Connect with Top Employers
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Reach recruiters and hiring teams at companies actively building
            their next team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyHireMind