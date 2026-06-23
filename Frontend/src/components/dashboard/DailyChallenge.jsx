import {
  Zap,
  BookOpen,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import { dailyChallenges } from "../../data/mockData";

// eslint-disable-next-line no-unused-vars
const iconMap = {
  DSA: Zap,
  Aptitude: BookOpen,
  HR: MessageSquare,
};

const colorMap = {
  DSA: {
    bg: "#111111",
    text: "#FFFFFF",
  },

  Aptitude: {
    bg: "#E5E7EB",
    text: "#374151",
  },

  HR: {
    bg: "#D1D5DB",
    text: "#111827",
  },
};

export default function DailyChallenge() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <Zap className="w-5 h-5 text-black" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Daily Challenges
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Complete all 3 to maintain your streak
          </p>
        </div>
      </div>

      {/* Challenge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
        {dailyChallenges.map((challenge, i) => {
          const colors = colorMap[challenge.type];

          return (
            <GlassCard
              key={i}
              className="p-7 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg"
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                  }}
                >
                  {challenge.type}
                </span>

                <span
                  className={
                    challenge.difficulty === "Easy"
                      ? "text-xs font-semibold px-3 py-1 rounded-lg bg-green-100 text-green-600"
                      : "text-xs font-semibold px-3 py-1 rounded-lg bg-amber-100 text-amber-600"
                  }
                >
                  {challenge.difficulty}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-black transition-colors">
                {challenge.title}
              </h4>

              {/* Topic */}
              <p className="text-sm text-gray-500 mb-2">
                {challenge.topic}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-700 mb-6 leading-relaxed line-clamp-2">
                {challenge.description}
              </p>

              {/* CTA */}
              <button
                className="flex items-center gap-2 text-sm font-semibold text-black group-hover:translate-x-1 transition-transform"
              >
                Attempt Now

                <ArrowRight className="w-4 h-4" />
              </button>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
