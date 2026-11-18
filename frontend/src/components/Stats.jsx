function Stats() {
    const STATS = [
  {
    value: "95%",
    label:
      "of HireMind users find job matches tailored to their skills and aspirations",
    bar: "bg-pink-500",
  },
  {
    value: "98%",
    label:
      "report a noticeably smoother application process compared to other job boards",
    bar: "bg-amber-400",
  },
  {
    value: "96%",
    label:
      "connect with top employers and advance their careers through HireMind",
    bar: "bg-purple-500",
  },
];
  return (
    <section className="px-6 py-14 text-center lg:px-10">
      <h2
        className="text-2xl font-semibold text-gray-900 sm:text-3xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Join HireMind Today and Experience
      </h2>
      <p
        className="text-2xl font-semibold text-pink-500 sm:text-3xl"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        The Power of Numbers
      </p>

      <div className="mx-auto mt-10 grid max-w-4xl gap-8 text-left sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.value} className={`border-l-4 ${s.bar} pl-4`}>
            <p className="text-3xl font-semibold text-gray-900">{s.value}</p>
            <p className="mt-1 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Stats