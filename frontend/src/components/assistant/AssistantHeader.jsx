import {
  Bot,
  Settings,
  Minimize2,
} from "lucide-react";

export default function AssistantHeader() {
  return (
    <div className="border-b border-gray-200 px-5 py-5">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 p-3">

            <Bot
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="font-semibold text-gray-900">
              HireMind AI
            </h2>

            <p className="text-xs text-gray-500">
              Your AI Career Assistant
            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Settings size={18} />
          </button>

          <button className="rounded-lg p-2 hover:bg-gray-100">
            <Minimize2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}