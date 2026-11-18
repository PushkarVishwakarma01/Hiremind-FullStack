import { BookOpen, Clock, Sparkles, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticleCard({ article }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition"
    >
      {/* Cover */}

      <div className="relative">

        <img
          src={article.image}
          alt={article.title}
          className="h-52 w-full object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
          {article.aiMatch}% Match
        </div>

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">

          <Bookmark size={18} />

        </button>

      </div>

      <div className="p-6">

        <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-600">

          {article.category}

        </span>

        <h3 className="mt-4 text-xl font-semibold">

          {article.title}

        </h3>

        <p className="mt-3 text-gray-500">

          {article.description}

        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">

          <span className="flex items-center gap-2">

            <Clock size={15} />

            {article.readTime}

          </span>

          <span>

            {article.published}

          </span>

        </div>

        <div className="mt-4 text-sm text-gray-400">

          By {article.author}

        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-white font-medium">

          <BookOpen size={18} />

          Read Article

        </button>

      </div>
    </motion.div>
  );
}