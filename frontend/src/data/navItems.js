import {
  LayoutGrid,
  Search,
  Send,
  Compass,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { key: "find-jobs", label: "Find Jobs", icon: Search },
  { key: "applied", label: "Applied Jobs", icon: Send },
  { key: "opportunities", label: "Opportunities", icon: Compass },
  { key: "messages", label: "Messages", icon: MessageSquare },
  { key: "resources", label: "Resources", icon: BookOpen },
];