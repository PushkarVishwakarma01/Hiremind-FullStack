import { useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

import { messages as messageData } from "../../data/messages";

export default function ChatWindow({
  conversation,
}) {
  const [chat, setChat] = useState(
    messageData[conversation.id] || []
  );

  const handleSend = (text) => {
    setChat((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "me",
        text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  return (
    <div className="flex flex-1 flex-col bg-[#F8F9FD]">

      <ChatHeader conversation={conversation} />

      <div className="flex-1 space-y-5 overflow-y-auto p-6">

        {chat.map((message) => (

          <MessageBubble
            key={message.id}
            message={message}
          />

        ))}

      </div>

      <MessageInput onSend={handleSend} />

    </div>
  );
}