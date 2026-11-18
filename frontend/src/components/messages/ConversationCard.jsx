import { motion } from "framer-motion";

export default function ConversationCard({
  conversation,
  selected,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full rounded-2xl p-4 transition-all duration-200 ${
        selected
          ? "bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 shadow-md"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="flex items-start gap-3">

        <div className="relative">

          <img
            src={conversation.avatar}
            alt={conversation.recruiter}
            className="h-12 w-12 rounded-full object-cover"
          />

          {conversation.online && (
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
          )}

        </div>

        <div className="flex-1 overflow-hidden text-left">

          <div className="flex items-center justify-between">

            <h3 className="truncate font-semibold text-gray-900">
              {conversation.company}
            </h3>

            <span className="text-xs text-gray-400">
              {conversation.lastTime}
            </span>

          </div>

          <p className="text-sm text-gray-500">
            {conversation.recruiter}
          </p>

          <p className="mt-1 truncate text-sm text-gray-400">
            {conversation.lastMessage}
          </p>

        </div>

        {conversation.unread > 0 && (
          <div className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-pink-500 px-2 text-xs font-semibold text-white">
            {conversation.unread}
          </div>
        )}

      </div>
    </motion.button>
  );
}