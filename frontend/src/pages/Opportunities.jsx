import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

import OpportunityHero from "../components/opportunity/OpportunityHero";
import CategoryTabs from "../components/opportunity/CategoryTabs";
import FeaturedOpportunity from "../components/opportunity/FeaturedOpportunity";
import OpportunityGrid from "../components/opportunity/OpportunityGrid";

export default function Opportunities() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div
      className="flex h-screen bg-[#F8F9FD]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* Main Content */}

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* Top Navigation */}

        <TopBar page="opportunities" />

        {/* Scrollable Content */}

        <main className="flex-1 overflow-y-auto px-8 py-8">

          {/* Hero */}

          <OpportunityHero />

          {/* Categories */}

          <CategoryTabs
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Featured Opportunity */}

          <FeaturedOpportunity />

          {/* Opportunity Cards */}

          <OpportunityGrid
            activeCategory={activeCategory}
          />

        </main>
      </div>
    </div>
  );
}