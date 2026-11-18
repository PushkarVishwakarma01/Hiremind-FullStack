// src/layout/AuthLayout.jsx
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const AVATARS = [
  { src: "https://i.pravatar.cc/100?img=12", style: "top-10 left-8" },
  { src: "https://i.pravatar.cc/100?img=32", style: "top-4 right-10" },
  { src: "https://i.pravatar.cc/100?img=15", style: "top-1/2 left-2 -translate-y-1/2" },
  { src: "https://i.pravatar.cc/100?img=8", style: "top-1/2 right-2 -translate-y-1/2" },
  { src: "https://i.pravatar.cc/100?img=45", style: "bottom-8 left-14" },
  { src: "https://i.pravatar.cc/100?img=33", style: "bottom-10 right-16" },
];

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen w-full flex bg-[#FAFAFB]">
      {/* Form side */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-10">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
              <Sparkles className="h-4.5 w-4.5 text-white" size={18} />
            </div>
            <div className="leading-tight">
              <p
                className="font-semibold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                HireMind
              </p>
              <p className="text-[11px] text-gray-400">Think. Apply. Thrive.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl font-bold text-slate-900 mb-1.5">
              {title}
            </h1>
            <p className="text-sm text-slate-500 mb-8">{subtitle}</p>
            {children}
          </motion.div>
        </div>
      </div>

      {/* Brand side */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-10">
        <div className="relative w-full h-full max-h-[720px] rounded-[2rem] bg-gradient-to-br from-purple-300 via-pink-200 to-orange-100 overflow-hidden">
          {AVATARS.map((a, i) => (
            <motion.img
              key={a.src}
              src={a.src}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              className={`absolute h-16 w-16 rounded-full object-cover ring-4 ring-white shadow-lg ${a.style}`}
              alt=""
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border-2 border-dashed border-white/60" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-x-0 bottom-10 flex flex-col items-center text-center px-10"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to Work
            </p>
            <p className="text-lg font-semibold text-slate-800 max-w-xs">
              Smart matching, real opportunities, a clearer path forward.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}