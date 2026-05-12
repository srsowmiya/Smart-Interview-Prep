import { Code2, Video, Flame, Target, TrendingUp } from "lucide-react";
import { statsData } from "../../data/mockData";

const iconMap = { Code2, Video, Flame, Target };

const colorMap = {
  problems: { bg: "#FFF2D0", icon: "#D4960B", bar: "#E36A6A" },
  interviews: { bg: "#FFE8E8", icon: "#E36A6A", bar: "#FFB2B2" },
  streak: { bg: "#FFF2D0", icon: "#D4960B", bar: "#E36A6A" },
  readiness: { bg: "#FFE8E8", icon: "#E36A6A", bar: "#E36A6A" },
};

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
      {statsData.map((stat) => {
        const Icon = iconMap[stat.icon];
        const colors = colorMap[stat.id];
        const percentage = stat.total ? Math.round((stat.value / stat.total) * 100) : null;

        return (
          <div key={stat.id} className="card card-hover p-7 cursor-pointer group">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: colors.bg }}
              >
                {Icon && <Icon className="w-6 h-6" style={{ color: colors.icon }} />}
              </div>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-success-soft">
                <TrendingUp className="w-3.5 h-3.5 text-success" />
                <span className="text-xs font-semibold text-success">↑</span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <span className="text-4xl font-display font-bold text-text-heading tabular-nums">
                {stat.value}
              </span>
              {stat.total && (
                <span className="text-base text-text-muted ml-1.5">/ {stat.total}</span>
              )}
            </div>

            {/* Label & Change */}
            <p className="text-base font-medium text-text-secondary mb-1">{stat.label}</p>
            <p className="text-sm text-text-muted">{stat.change}</p>

            {/* Progress bar */}
            {percentage !== null && (
              <div className="mt-5 w-full h-2 rounded-full bg-border-light overflow-hidden">
                <div
                  className="h-full rounded-full animate-progress-fill"
                  style={{ width: `${percentage}%`, backgroundColor: colors.bar }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
