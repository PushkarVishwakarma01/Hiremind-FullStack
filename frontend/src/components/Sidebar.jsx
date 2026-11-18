import { Sparkles,ChevronLeft,ChevronRight,LayoutGrid,Search,Send,Compass,MessageSquare,BookOpen,Settings,LogOut,ScanSearch } from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar({ collapsed, setCollapsed, active, setActive }) {

   const NAV_ITEMS = [
    {
        label: "Dashboard",
        icon: LayoutGrid,
        path: "/dashboard",
    },

    {
        label: "Find Jobs",
        icon: Search,
        path: "/findjobs",
    },

    {
        label: "Applied Jobs",
        icon: Send,
        path: "/appliedjobs",
    },

    {
        label: "Opportunities",
        icon: Compass,
        path: "/opportunities",
    },

    {
        label: "ATS Analyzer",
        icon: ScanSearch,
        path: "/ats",
    },

    {
        label: "Messages",
        icon: MessageSquare,
        path: "/messages",
    },

    {
        label: "Resources",
        icon: BookOpen,
        path: "/resources",
    },
];

  return (
    <aside
      className={`relative flex h-screen flex-col border-r border-gray-100 bg-[#FBFAFC] transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* logo + collapse toggle */}
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
            <Sparkles className="h-4.5 w-4.5 text-white" size={18} />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <p
                className="font-semibold text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                HireMind
              </p>
              <p className="text-[11px] text-gray-400">Think. Apply. Thrive.</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-7 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-pink-600"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* nav */}
      <nav className="mt-2 flex-1 space-y-1 px-3">

    {NAV_ITEMS.map((item) => {

        const Icon = item.icon;

        return (

            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                    `group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                        isActive
                            ? "bg-pink-50 text-pink-600 font-medium"
                            : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    } ${collapsed ? "justify-center" : ""}`
                }
            >

                <Icon size={18} />

                {!collapsed && item.label}

            </NavLink>

        );
    })}

</nav>

      {/* settings */}
      <div className="px-3 pb-2">
        <NavLink
    to="/settings"
    className={({ isActive }) =>
        `flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${
            isActive
                ? "bg-pink-50 text-pink-600 font-medium"
                : "text-gray-500 hover:bg-gray-100"
        } ${collapsed ? "justify-center" : ""}`
    }
>
    <Settings size={18} />

    {!collapsed && "Settings"}

</NavLink>
      </div>

      {/* profile */}
      <div className="border-t border-gray-100 p-3">
        <button
          onClick={() => setActive("profile")}
          className={`flex w-full items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-gray-100 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Your profile"
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-white"
          />
          {!collapsed && (
            <div className="min-w-0 flex-1 text-left">
              <p className="truncate text-sm font-medium text-gray-900">
                Bima Sakti
              </p>
              <p className="truncate text-xs text-gray-400">My Profile</p>
            </div>
          )}
          {!collapsed && <LogOut size={15} className="text-gray-300" />}
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;