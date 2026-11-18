import { motion } from "framer-motion";

export default function MessageBubble({
  message,
}) {
  const mine = message.sender === "me";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`flex ${
        mine
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-3xl px-5 py-3 shadow-sm ${
          mine
            ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            : "bg-white"
        }`}
      >
        <p>{message.text}</p>

        <div
          className={`mt-2 text-right text-xs ${
            mine
              ? "text-pink-100"
              : "text-gray-400"
          }`}
        >
          {message.time}
        </div>

      </div>
    </motion.div>
  );
}