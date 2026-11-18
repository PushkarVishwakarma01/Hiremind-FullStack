import { useMemo, useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import ConversationList from "../components/messages/ConversationList";
import ChatWindow from "../components/messages/ChatWindow";
import ConversationInsights from "../components/messages/ConversationInsights";

import { conversations } from "../data/conversations";

export default function Messages() {
  const [collapsed, setCollapsed] = useState(false);

  const [search, setSearch] = useState("");

  const [selectedConversation, setSelectedConversation] =
    useState(conversations[0]);

  const filteredConversations = useMemo(() => {
    if (!search.trim()) return conversations;

    const keyword = search.toLowerCase();

    return conversations.filter(
      (conversation) =>
        conversation.company.toLowerCase().includes(keyword) ||
        conversation.recruiter.toLowerCase().includes(keyword)
    );
  }, [search]);

  return (
    <div
      className="flex h-screen bg-[#F8F9FD]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">

        <TopBar
          page="messages"
        />

        {/* Chat Layout */}

        <div className="flex flex-1 overflow-hidden">

          {/* Conversation List */}

          <ConversationList
            conversations={filteredConversations}
            selectedConversation={selectedConversation}
            setSelectedConversation={setSelectedConversation}
            search={search}
            setSearch={setSearch}
          />

          {/* Chat */}

          <ChatWindow
            conversation={selectedConversation}
          />

          {/* AI Insights */}

          <ConversationInsights
            conversation={selectedConversation}
          />

        </div>

      </div>
    </div>
  );
}