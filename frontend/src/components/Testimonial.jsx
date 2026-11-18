import { ChevronLeft,ChevronRight,Quote,Star } from "lucide-react";

function Testimonial() {
  return (
    <section className="px-6 py-14 lg:px-10">
      <div className="mx-auto grid max-w-5xl gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white sm:grid-cols-2">
        <img
          src="https://i.pravatar.cc/500?img=47"
          alt="Aisha M."
          className="h-64 w-full object-cover sm:h-full"
        />
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2
              className="text-xl font-semibold text-gray-900 sm:text-2xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              What Our Users <span className="text-pink-500">Say</span>
            </h2>
            <div className="flex gap-2">
              <button className="rounded-full border border-gray-200 p-1.5 text-gray-400 hover:text-gray-700">
                <ChevronLeft size={16} />
              </button>
              <button className="rounded-full border border-gray-200 p-1.5 text-gray-400 hover:text-gray-700">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <Quote className="mt-4 text-pink-200" size={28} />
          <p className="mt-2 text-sm text-gray-600">
            Connecting with strong employers has never felt this easy. HireMind
            opened doors to roles I would not have found on my own, and the
            matching felt genuinely tailored to me.
          </p>

          <div className="mt-5 flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" stroke="none" />
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-900">Aisha M.</p>
          <p className="text-xs text-gray-400">HR Professional</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial