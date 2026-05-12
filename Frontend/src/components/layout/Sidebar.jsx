import {
  LayoutDashboard, Code2, Video, FileText, Brain, Sparkles,
  BarChart3, CalendarDays, Settings, LogOut, Crown,
  Building2, Briefcase, Map, ListChecks,
} from "lucide-react";
import { sidebarNav, interviewPrepItems } from "../../data/mockData";

const iconMap = {
  LayoutDashboard, Code2, Video, FileText, Brain, Sparkles,
  BarChart3, CalendarDays, Settings,
  Building2, Briefcase, Map, ListChecks,
};

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-[90px] bottom-0 w-[260px] bg-white border-r border-border-light flex flex-col z-40 overflow-hidden">
      {/* Pro badge */}
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-bg-secondary border border-border-default">
          <Crown className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs font-semibold text-text-heading">Pro Member</p>
            <p className="text-[10px] text-text-muted">All features unlocked</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 pb-2 overflow-y-auto space-y-6">
        {/* Menu Section */}
        <div>
          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Menu
          </p>
          <div className="space-y-0.5">
            {sidebarNav.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <button
                  key={item.label}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 group
                    ${item.active
                      ? "bg-bg-secondary text-accent border border-border-default"
                      : "text-text-secondary hover:bg-bg-hover hover:text-text-heading"
                    }
                  `}
                >
                  {Icon && (
                    <Icon className={`w-[18px] h-[18px] flex-shrink-0 transition-colors ${
                      item.active ? "text-accent" : "text-text-muted group-hover:text-text-secondary"
                    }`} />
                  )}
                  <span>{item.label}</span>
                  {item.active && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Specific Interview Prep Section */}
        <div>
          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Interview Prep
          </p>
          <div className="space-y-0.5">
            {interviewPrepItems.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-text-secondary hover:bg-bg-hover hover:text-text-heading transition-all duration-200 group"
                >
                  {Icon && (
                    <Icon className="w-[18px] h-[18px] flex-shrink-0 text-text-muted group-hover:text-text-secondary transition-colors" />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <div>
          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Account
          </p>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-text-secondary hover:bg-bg-hover hover:text-text-heading transition-all duration-200 group">
            <Settings className="w-[18px] h-[18px] flex-shrink-0 text-text-muted group-hover:text-text-secondary transition-colors" />
            <span>Settings</span>
          </button>
        </div>
      </nav>

      {/* Bottom */}
      <div className="px-4 pb-5 pt-3 border-t border-border-light">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium text-text-secondary hover:bg-danger-soft hover:text-accent transition-all duration-200">
          <LogOut className="w-[18px] h-[18px]" />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
