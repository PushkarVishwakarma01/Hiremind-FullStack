import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div className="rounded-3xl bg-white px-5 py-4 shadow-sm">

        <div className="flex gap-2">

          {[0, 1, 2].map((i) => (

            <motion.span
              key={i}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: .8,
                delay: i * .15,
              }}
              className="h-2 w-2 rounded-full bg-gray-400"
            />

          ))}

        </div>

      </div>

    </div>
  );
}