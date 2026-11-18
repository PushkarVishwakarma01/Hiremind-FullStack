import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import AssistantPanel from "../components/assistant/AssistantPanel";

export default function DashboardLayout({
  children,
  topbarProps = {},
  assistantType = "default",
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="flex h-screen bg-[#F7F8FC]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Sidebar */}

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main */}

      <div className="flex flex-1 overflow-hidden">

        {/* Content */}

        <div className="flex flex-1 flex-col overflow-hidden">

          <TopBar {...topbarProps} />

          <main className="flex-1 overflow-y-auto p-8">

            {children}

          </main>

        </div>

        {/* AI */}

        <AssistantPanel
          type={assistantType}
        />

      </div>

    </div>
  );
}