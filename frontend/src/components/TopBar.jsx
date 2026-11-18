import { Search, Bell, SlidersHorizontal, Sparkles } from "lucide-react";

export default function TopBar({
  search,
  setSearch,
  onFilterClick,
  onAIRecommend,
}) {
  return (
    <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="flex flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}

        <div className="relative w-full lg:max-w-xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs, companies, skills..."
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-100"
          />
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">
          {/* Filter */}

          <button
            onClick={onFilterClick}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-pink-200 hover:bg-pink-50"
          >
            <SlidersHorizontal size={18} />

            Filter
          </button>

          {/* AI */}

          <button
            onClick={onAIRecommend}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200 transition hover:scale-105"
          >
            <Sparkles size={18} />

            AI Recommend
          </button>

          {/* Notification */}

          <button className="relative rounded-full border border-gray-200 p-3 transition hover:bg-gray-50">
            <Bell size={18} className="text-gray-600" />

            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-pink-500"></span>
          </button>
        </div>
      </div>
    </div>
  );
}




// import { Search,Bell,ArrowUpRight } from "lucide-react";

// function TopBar() {
//   return (
//     <div className="flex items-center justify-between gap-4 border-b border-gray-100 bg-white/80 px-6 py-4 backdrop-blur">
//       <div className="relative w-full max-w-sm">
//         <Search
//           size={16}
//           className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//         />
//         <input
//           type="text"
//           placeholder="Search roles, companies, skills..."
//           className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-4 text-sm text-gray-700 outline-none focus:border-pink-300 focus:bg-white focus:ring-2 focus:ring-pink-100"
//         />
//       </div>
//       <div className="flex items-center gap-3">
//         <button className="relative rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
//           <Bell size={18} />
//           <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-pink-500" />
//         </button>
//         <button className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-pink-200 hover:opacity-95 sm:flex">
//           Post a Job <ArrowUpRight size={14} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TopBar