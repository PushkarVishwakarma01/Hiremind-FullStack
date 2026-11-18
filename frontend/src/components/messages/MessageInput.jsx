import { useState } from "react";

import {
  Smile,
  Paperclip,
  Send,
} from "lucide-react";

export default function MessageInput({
  onSend,
}) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <div className="border-t bg-white p-5">

      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3">

        <button>
          <Smile
            className="text-gray-400"
            size={20}
          />
        </button>

        <button>
          <Paperclip
            className="text-gray-400"
            size={20}
          />
        </button>

        <input
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            handleSend()
          }
          placeholder="Type your message..."
          className="flex-1 bg-transparent outline-none"
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 p-3 text-white"
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}