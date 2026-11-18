import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import ResourcesHero from "../components/resources/ResourcesHero";
import ResourceCategories from "../components/resources/ResourceCategories";
import ContinueLearning from "../components/resources/ContinueLearning";
import LearningPathGrid from "../components/resources/LearningPathGrid";
import ResourceGrid from "../components/resources/ResourceGrid";
import VideoGrid from "../components/resources/VideoGrid";
import ArticleGrid from "../components/resources/ArticleGrid";
import PracticeGrid from "../components/resources/PracticeGrid";
import LearningCoach from "../components/resources/LearningCoach";

export default function Resources() {
  const [collapsed, setCollapsed] = useState(false);

  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div
      className="flex h-screen bg-[#F8F9FD]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}

        <TopBar page="resources" />

        {/* Scrollable Page */}

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[1700px] px-8 py-8">
            {/* Hero */}

            <ResourcesHero
              search={search}
              setSearch={setSearch}
            />

            {/* Categories */}

            <ResourceCategories
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />

            {/* Main Layout */}

            <div className="mt-10 grid gap-8 xl:grid-cols-12">
              {/* Left Content */}

              <div className="xl:col-span-8 2xl:col-span-9 space-y-14">
                <ContinueLearning />

                <LearningPathGrid />

                <ResourceGrid
                  search={search}
                  category={activeCategory}
                />

                <VideoGrid />

                <ArticleGrid />

                <PracticeGrid />
              </div>

              {/* Right Sidebar */}

              <div className="xl:col-span-4 2xl:col-span-3">
                <LearningCoach />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}