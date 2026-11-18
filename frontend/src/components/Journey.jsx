

function Journey() {
    const STEPS = [
  {
    n: "01",
    title: "Create Your Profile",
    text: "Build a complete profile that showcases your skills, experience and goals — the more you share, the sharper your matches.",
  },
  {
    n: "02",
    title: "Discover Opportunities",
    text: "Browse roles curated to your profile. Filter by industry, location and job type to find your next move.",
    active: true,
  },
  {
    n: "03",
    title: "Apply and Thrive",
    text: "Submit applications in a click and track every status. HireMind stays with you through the whole journey.",
  },
];
  return (
    <section className="px-6 py-14 lg:px-10">
      <h2
        className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Your HireMind Journey in
      </h2>
      <p
        className="text-center text-2xl font-semibold text-pink-500 sm:text-3xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Three Simple Steps
      </p>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 p-6 sm:p-10">
        <div className="mx-auto max-w-sm rounded-2xl bg-white p-4 shadow-xl">
          <p className="mb-3 text-center text-xs font-medium text-gray-500">
            Find Your Match Job Here
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-16 rounded-xl bg-gray-50" />
            <div className="rounded-xl bg-orange-50 p-2.5">
              <p className="text-[11px] font-medium text-gray-800">
                Product Designer
              </p>
              <p className="text-[10px] text-gray-400">$213/hr</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] text-gray-400">
                  Figma · 30 Mar
                </span>
                <span className="rounded-full bg-pink-500 px-2 py-0.5 text-[9px] text-white">
                  View
                </span>
              </div>
            </div>
            <div className="h-16 rounded-xl bg-gray-50" />
            <div className="h-16 rounded-xl bg-gray-50" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-8 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className={
              s.active
                ? "border-t-2 border-pink-500 pt-4"
                : "border-t-2 border-transparent pt-4"
            }
          >
            <p className="text-xs font-medium text-gray-400">{s.n}</p>
            <h3 className="mt-1 text-base font-semibold text-gray-900">
              {s.title}
            </h3>
            <p className="mt-1.5 text-sm text-gray-500">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey