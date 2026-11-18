import {
  Phone,
  Video,
  MoreVertical,
} from "lucide-react";

export default function ChatHeader({
  conversation,
}) {
  return (
    <div className="flex items-center justify-between border-b bg-white px-6 py-4">

      <div className="flex items-center gap-4">

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

        <div>

          <h2 className="font-semibold text-gray-900">
            {conversation.recruiter}
          </h2>

          <p className="text-sm text-gray-500">
            {conversation.role}
          </p>

          <div className="mt-1 flex items-center gap-2">

            <span className="text-sm font-medium text-gray-700">
              {conversation.company}
            </span>

            {conversation.online && (
              <>
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs text-green-600">
                  Online
                </span>
              </>
            )}

          </div>

        </div>

      </div>

      <div className="flex items-center gap-2">

        <button className="rounded-xl p-3 hover:bg-gray-100">
          <Phone size={18} />
        </button>

        <button className="rounded-xl p-3 hover:bg-gray-100">
          <Video size={18} />
        </button>

        <button className="rounded-xl p-3 hover:bg-gray-100">
          <MoreVertical size={18} />
        </button>

      </div>

    </div>
  );
}