import { Play, Clock, Eye, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoCard({ video }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl"
    >
      {/* Thumbnail */}

      <div className="relative">

        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-52 w-full object-cover"
        />

        <button className="absolute inset-0 flex items-center justify-center">

          <div className="rounded-full bg-white/90 p-4 shadow-lg transition hover:scale-110">

            <Play
              size={28}
              className="fill-pink-500 text-pink-500"
            />

          </div>

        </button>

        <div className="absolute left-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">

          {video.aiMatch}% Match

        </div>

        <div className="absolute bottom-4 right-4 rounded-lg bg-black/70 px-2 py-1 text-xs text-white">

          {video.duration}

        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-lg font-semibold">

          {video.title}

        </h3>

        <p className="mt-1 text-gray-500">

          {video.channel}

        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-gray-500">

          <span className="flex items-center gap-1">

            <Eye size={15} />

            {video.views}

          </span>

          <span className="flex items-center gap-1">

            <Clock size={15} />

            {video.level}

          </span>

        </div>

        {video.progress > 0 && (

          <>

            <div className="mt-5 h-2 rounded-full bg-gray-200">

              <div
                className="h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                style={{
                  width: `${video.progress}%`,
                }}
              />

            </div>

            <p className="mt-2 text-sm text-gray-500">

              {video.progress}% completed

            </p>

          </>

        )}

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-medium text-white">

          <Sparkles size={18} />

          Watch Now

        </button>

      </div>
    </motion.div>
  );
}