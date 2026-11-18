// src/layout/Layout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // adjust path if Sidebar lives elsewhere

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#FAFAFB]">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        active={active}
        setActive={setActive}
      />
      <main className="flex-1 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}