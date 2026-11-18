import { ArrowRight } from "lucide-react";
const COMPANIES = [
  { name: "Northwind", color: "bg-rose-500" },
  { name: "Hexa", color: "bg-amber-500" },
  { name: "Flowly", color: "bg-emerald-500" },
  { name: "Verge", color: "bg-sky-500" },
  { name: "Orbital", color: "bg-indigo-500" },
  { name: "Pulse", color: "bg-pink-500" },
];

function Hero() {
  const positions = [
    { top: "0%", left: "32%", size: "h-14 w-14", img: 1 },
    { top: "6%", left: "62%", size: "h-12 w-12", img: 5 },
    { top: "34%", left: "4%", size: "h-14 w-14", img: 8 },
    { top: "30%", left: "82%", size: "h-16 w-16", img: 3 },
    { top: "70%", left: "30%", size: "h-16 w-16", img: 9 },
    { top: "66%", left: "70%", size: "h-12 w-12", img: 4 },
  ];

  return (
    <section className="grid gap-10 px-6 pb-16 pt-10 lg:grid-cols-2 lg:items-center lg:px-10">
      <div>
        <h1
          className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Unlock Your <br />
          <span className="text-pink-500">Career Potential</span> <br />
          with HireMind
        </h1>
        <p className="mt-4 max-w-md text-sm text-gray-500 sm:text-base">
          Smart matching, real opportunities, and a clearer path forward —
          discover roles, connect with employers, and let HireMind think
          alongside your career.
        </p>

        <div className="mt-6 flex max-w-md items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-3 py-2 text-sm text-gray-700 outline-none"
          />
          <button className="flex shrink-0 items-center gap-1.5 rounded-full bg-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-600">
            Get Started <ArrowRight size={14} />
          </button>
        </div>

        <p className="mt-8 text-xs font-medium uppercase tracking-wide text-gray-400">
          Several companies are opening vacancies here
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {COMPANIES.map((c) => (
            <div
              key={c.name}
              title={c.name}
              className={`flex h-9 w-9 items-center justify-center rounded-full ${c.color} text-xs font-semibold text-white`}
            >
              {c.name[0]}
            </div>
          ))}
        </div>
      </div>

      {/* signature visual */}
      <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-200 via-pink-100 to-orange-100 sm:h-[400px]">
        <div
          className="absolute h-64 w-64 rounded-full border-2 border-dashed border-white/70"
          style={{ animation: "spin-slow 30s linear infinite" }}
        />
        <div className="absolute h-44 w-44 rounded-full border border-white/50" />

        <div className="relative flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-800 shadow-lg">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to Work
        </div>

        {positions.map((p, i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/100?img=${p.img}`}
            alt=""
            className={`absolute ${p.size} rounded-full border-4 border-white object-cover shadow-md`}
            style={{ top: p.top, left: p.left }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero