import {
  LayoutDashboard,
  Code2,
  Video,
  FileText,
  Brain,
  Sparkles,
  BarChart3,
  CalendarDays,
  Settings,
  LogOut,
  Crown,
  Building2,
  Briefcase,
  Map,
  ListChecks,
} from "lucide-react";

import {
  sidebarNav,
  interviewPrepItems,
} from "../../data/mockData";

const iconMap = {
  LayoutDashboard,
  Code2,
  Video,
  FileText,
  Brain,
  Sparkles,
  BarChart3,
  CalendarDays,
  Settings,
  Building2,
  Briefcase,
  Map,
  ListChecks,
};

export default function Sidebar() {
  return (
    <aside className="fixed left-4 top-[95px] bottom-4 w-[280px] bg-[#111111] rounded-3xl shadow-2xl flex flex-col overflow-hidden">

      {/* Pro Card */}
      <div className="p-5">
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center">
            <Crown className="w-5 h-5 text-yellow-500" />
          </div>

          <div>
            <p className="text-sm font-semibold text-black">
              Pro Member
            </p>

            <p className="text-xs text-gray-500">
              All features unlocked
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto">

        {/* Main Menu */}
        <div className="mb-8">
          <p className="px-3 mb-3 text-xs uppercase tracking-widest text-gray-500">
            Menu
          </p>

          <div className="space-y-2">
            {sidebarNav.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <button
                  key={item.label}
                  className={
                    item.active
                      ? "w-full flex items-center gap-3 bg-white text-black px-4 py-3 rounded-2xl font-medium transition"
                      : "w-full flex items-center gap-3 text-white/80 hover:bg-[#1f1f1f] hover:text-white px-4 py-3 rounded-2xl transition"
                  }
                >
                  {Icon && (
                    <Icon
                      size={18}
                      className={
                        item.active
                          ? "text-black"
                          : "text-gray-400"
                      }
                    />
                  )}

                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interview Prep */}
        <div className="mb-8">
          <p className="px-3 mb-3 text-xs uppercase tracking-widest text-gray-500">
            Interview Prep
          </p>

          <div className="space-y-2">
            {interviewPrepItems.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 text-white/80 hover:bg-[#1f1f1f] hover:text-white px-4 py-3 rounded-2xl transition"
                >
                  {Icon && (
                    <Icon
                      size={18}
                      className="text-gray-400"
                    />
                  )}

                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Account */}
        <div>
          <p className="px-3 mb-3 text-xs uppercase tracking-widest text-gray-500">
            Account
          </p>

          <button className="w-full flex items-center gap-3 text-white/80 hover:bg-[#1f1f1f] hover:text-white px-4 py-3 rounded-2xl transition">
            <Settings
              size={18}
              className="text-gray-400"
            />
            <span>Settings</span>
          </button>
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-3 text-red-400 hover:bg-red-500/10 px-4 py-3 rounded-2xl transition">
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
