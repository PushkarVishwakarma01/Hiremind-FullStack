import { useState } from "react";
import {
  Sparkles,
  Send,
  FileText,
  Briefcase,
  GraduationCap,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ChatTab() {
  const [message, setMessage] = useState("");

  const quickActions = [
    {
      title: "Improve Resume",
      icon: FileText,
      prompt: "Review my resume and suggest improvements.",
    },
    {
      title: "Recommend Jobs",
      icon: Briefcase,
      prompt: "Recommend jobs based on my profile.",
    },
    {
      title: "Mock Interview",
      icon: GraduationCap,
      prompt: "Start a Java Backend mock interview.",
    },
    {
      title: "Study Plan",
      icon: BookOpen,
      prompt: "Create a 30-day DSA study plan.",
    },
    {
      title: "Career Advice",
      icon: MessageCircle,
      prompt: "Give me career advice.",
    },
  ];

  const [history, setHistory] = useState([
    "Improve my Spring Boot resume",
    "Interview me on Java",
    "Find Backend jobs in Bangalore",
  ]);

  const handleQuickAction = (prompt) => {
    setMessage(prompt);
  };

  const handleSend = () => {
    if (!message.trim()) return;

    setHistory((prev) => [message, ...prev]);
    setMessage("");

    // Later:
    // axios.post("/api/chat",{message})
  };

  return (
    <div className="flex h-full flex-col">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 p-5 text-white"
      >
        <div className="flex items-center gap-3">
          <Sparkles size={24} />
          <div>
            <h2 className="text-lg font-semibold">
              HireMind AI
            </h2>
            <p className="text-sm text-pink-100">
              Your Career Copilot
            </p>
          </div>
        </div>

        <h3 className="mt-6 text-xl font-semibold">
          Hi Pushkar 👋
        </h3>

        <p className="mt-2 text-sm text-pink-100">
          What would you like to do today?
        </p>
      </motion.div>

      {/* Quick Actions */}

      <div className="mt-6">
        <h3 className="mb-4 font-semibold">
          Quick Actions
        </h3>

        <div className="grid grid-cols-2 gap-3">

          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.title}
                onClick={() => handleQuickAction(action.prompt)}
                className="rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:border-pink-300 hover:shadow-md"
              >
                <Icon
                  size={22}
                  className="mb-3 text-pink-500"
                />

                <p className="text-sm font-medium">
                  {action.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* History */}

      <div className="mt-6 flex-1">
        <h3 className="mb-3 font-semibold">
          Recent Conversations
        </h3>

        <div className="space-y-2">
          {history.map((item, index) => (
            <button
              key={index}
              className="w-full rounded-xl bg-gray-50 p-3 text-left text-sm transition hover:bg-pink-50"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}

      <div className="mt-6 border-t pt-4">
        <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask HireMind..."
            className="flex-1 bg-transparent outline-none"
            onKeyDown={(e) =>
              e.key === "Enter" && handleSend()
            }
          />

          <button
            onClick={handleSend}
            className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 p-3 text-white transition hover:opacity-90"
          >
            <Send size={18} />
          </button>

        </div>
      </div>
    </div>
  );
}