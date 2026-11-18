import {
  Briefcase,
  FileText,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

const tabs = [
  {
    id: "jobs",
    icon: Briefcase,
    label: "Jobs",
  },
  {
    id: "resume",
    icon: FileText,
    label: "Resume",
  },
  {
    id: "interview",
    icon: GraduationCap,
    label: "Interview",
  },
  {
    id: "chat",
    icon: MessageCircle,
    label: "Chat",
  },
];

export default function AssistantTabs({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="border-b border-gray-200">

      <div className="grid grid-cols-4">

        {tabs.map((tab) => {

          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(tab.id)
              }
              className={`flex flex-col items-center gap-2 py-4 transition

              ${
                activeTab === tab.id
                  ? "border-b-2 border-pink-500 bg-pink-50 text-pink-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >

              <Icon size={18} />

              <span className="text-xs font-medium">
                {tab.label}
              </span>

            </button>
          );
        })}
      </div>
    </div>
  );
}