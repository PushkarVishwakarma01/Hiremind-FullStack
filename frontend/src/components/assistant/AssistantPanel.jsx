import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import AssistantHeader from "./AssistantHeader";
import AssistantTabs from "./AssistantTabs";

import JobsTab from "./JobsTab";
import ResumeTab from "./ResumeTab";
import InterviewTab from "./InterviewTab";
import ChatTab from "./ChatTab";

export default function AssistantPanel({
  type = "dashboard",
}) {
  const [activeTab, setActiveTab] = useState(() => {
    switch (type) {
      case "jobs":
        return "jobs";

      case "applications":
        return "jobs";

      default:
        return "chat";
    }
  });

  const renderTab = () => {
    switch (activeTab) {
      case "jobs":
        return <JobsTab />;

      case "resume":
        return <ResumeTab />;

      case "interview":
        return <InterviewTab />;

      default:
        return <ChatTab />;
    }
  };

  return (
    <motion.aside
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
      }}
      className="hidden xl:flex w-[360px] border-l border-gray-200 bg-white/70 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex h-full w-full flex-col">

        <AssistantHeader />

        <AssistantTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="flex-1 overflow-y-auto px-5 py-4">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -30,
              }}
              transition={{
                duration: .25,
              }}
            >
              {renderTab()}
            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </motion.aside>
  );
}