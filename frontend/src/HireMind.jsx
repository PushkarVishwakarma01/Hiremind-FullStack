import React, { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JobsGrid from "./components/JobsGrid";
import Journey from "./components/Journey";
import Sidebar from "./components/Sidebar";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import TopBar from "./components/TopBar";
import WhyHireMind from "./components/WhyHireMind";

import {
  LayoutGrid,
  Search,
  Send,
  Compass,
  MessageSquare,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bell,
  Sparkles,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Star,
  Quote,
  CheckCircle2,
  GraduationCap,
  Plug,
  LogOut,
} from "lucide-react";


export default function HireMind() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  return (
    <div
      className="flex h-screen w-full bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        active={active}
        setActive={setActive}
      />

      <div className="flex-1 overflow-y-auto">
        <TopBar />
        <Hero />
        <Stats />
        <WhyHireMind />
        <Journey />
        <JobsGrid />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
