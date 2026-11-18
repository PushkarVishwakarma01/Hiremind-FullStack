import { Search } from "lucide-react";
import ConversationCard from "./ConversationCard";

export default function ConversationList({
  conversations,
  selectedConversation,
  setSelectedConversation,
  search,
  setSearch,
}) {
  const filtered = conversations.filter((item) => {
    const q = search.toLowerCase();

    return (
      item.company.toLowerCase().includes(q) ||
      item.recruiter.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex h-full w-[340px] flex-col border-r border-gray-200 bg-white">

      {/* Header */}

      <div className="border-b p-5">

        <h2 className="text-2xl font-bold">
          Messages
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Recruiter conversations
        </p>

        <div className="mt-5 flex items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search recruiter..."
            className="ml-3 flex-1 bg-transparent outline-none"
          />

        </div>

      </div>

      {/* List */}

      <div className="flex-1 space-y-2 overflow-y-auto p-3">

        {filtered.map((conversation) => (

          <ConversationCard
            key={conversation.id}
            conversation={conversation}
            selected={
              selectedConversation.id ===
              conversation.id
            }
            onClick={() =>
              setSelectedConversation(
                conversation
              )
            }
          />

        ))}

      </div>

    </div>
  );
}