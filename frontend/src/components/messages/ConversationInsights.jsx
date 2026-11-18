import {
  Sparkles,
  User,
  FileText,
  CalendarDays,
  Clock,
  Building2,
  Send,
  Bot,
} from "lucide-react";

export default function ConversationInsights({
  conversation,
}) {
  return (
    <aside className="hidden xl:flex w-[330px] flex-col border-l border-gray-200 bg-white">

      {/* Header */}

      <div className="border-b p-6">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 p-3">

            <Bot
              size={20}
              className="text-white"
            />

          </div>

          <div>

            <h2 className="font-semibold text-gray-900">
              AI Insights
            </h2>

            <p className="text-sm text-gray-500">
              Conversation Assistant
            </p>

          </div>

        </div>

      </div>

      <div className="flex-1 space-y-6 overflow-y-auto p-5">

        {/* Summary */}

        <div className="rounded-2xl bg-pink-50 p-5">

          <div className="mb-3 flex items-center gap-2">

            <Sparkles
              size={18}
              className="text-pink-500"
            />

            <h3 className="font-semibold">
              Summary
            </h3>

          </div>

          <p className="text-sm leading-6 text-gray-600">

            Recruiter is interested in your
            Java Backend profile and wants
            to schedule an interview.

          </p>

        </div>

        {/* Suggested Reply */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <h3 className="mb-3 font-semibold">

            Suggested Reply

          </h3>

          <p className="text-sm leading-6 text-gray-600">

            Thank you for reaching out.

            I'm available tomorrow and would
            be happy to discuss the role.

          </p>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 font-medium text-white">

            <Send size={16} />

            Use Reply

          </button>

        </div>

        {/* Recruiter */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="mb-4 flex items-center gap-2">

            <User size={18} />

            <h3 className="font-semibold">

              Recruiter

            </h3>

          </div>

          <div className="space-y-3 text-sm">

            <div className="flex items-center gap-2">

              <Building2 size={15} />

              {conversation.company}

            </div>

            <div>

              {conversation.recruiter}

            </div>

            <div>

              {conversation.role}

            </div>

          </div>

        </div>

        {/* Interview */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="mb-4 flex items-center gap-2">

            <CalendarDays size={18} />

            <h3 className="font-semibold">

              Interview

            </h3>

          </div>

          <p className="text-sm text-gray-600">

            No interview scheduled yet.

          </p>

          <button className="mt-4 w-full rounded-xl border border-pink-200 py-2 text-pink-600 hover:bg-pink-50">

            Set Reminder

          </button>

        </div>

        {/* Shared Files */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="mb-4 flex items-center gap-2">

            <FileText size={18} />

            <h3 className="font-semibold">

              Shared Files

            </h3>

          </div>

          <div className="rounded-xl bg-gray-50 p-3">

            Resume.pdf

          </div>

        </div>

        {/* Response Time */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5">

          <div className="mb-4 flex items-center gap-2">

            <Clock size={18} />

            <h3 className="font-semibold">

              Average Response

            </h3>

          </div>

          <p className="text-sm text-gray-600">

            Recruiter replies within

            <span className="font-semibold">

              {" "}2 hours

            </span>

          </p>

        </div>

      </div>

    </aside>
  );
}