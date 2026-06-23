import {
  Code2,
  Video,
  Flame,
  Target,
  TrendingUp,
} from "lucide-react";

import { statsData } from "../../data/mockData";

const iconMap = {
  Code2,
  Video,
  Flame,
  Target,
};

const colorMap = {
  problems: {
    bg: "#F3F4F6",
    icon: "#111111",
    bar: "#111111",
  },

  interviews: {
    bg: "#F3F4F6",
    icon: "#111111",
    bar: "#111111",
  },

  streak: {
    bg: "#F3F4F6",
    icon: "#111111",
    bar: "#111111",
  },

  readiness: {
    bg: "#F3F4F6",
    icon: "#111111",
    bar: "#111111",
  },
};

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
      {statsData.map((stat) => {
        const Icon = iconMap[stat.icon];
        const colors = colorMap[stat.id];

        const percentage = stat.total
          ? Math.round((stat.value / stat.total) * 100)
          : null;

        return (
          <div
            key={stat.id}
            className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundColor: colors.bg,
                }}
              >
                {Icon && (
                  <Icon
                    className="w-6 h-6"
                    style={{
                      color: colors.icon,
                    }}
                  />
                )}
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-100">
                <TrendingUp className="w-3.5 h-3.5 text-green-600" />

                <span className="text-xs font-semibold text-green-600">
                  ↑
                </span>
              </div>
            </div>

            {/* Value */}
            <div className="mb-2">
              <span className="text-4xl font-bold text-gray-900 tabular-nums">
                {stat.value}
              </span>

              {stat.total && (
                <span className="text-base text-gray-400 ml-1.5">
                  / {stat.total}
                </span>
              )}
            </div>

            {/* Label */}
            <p className="text-base font-medium text-gray-700 mb-1">
              {stat.label}
            </p>

            <p className="text-sm text-gray-500">
              {stat.change}
            </p>

            {/* Progress */}
            {percentage !== null && (
              <div className="mt-5 w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full animate-progress-fill"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: colors.bar,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}