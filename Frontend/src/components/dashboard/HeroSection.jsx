import { ArrowRight, TrendingUp } from "lucide-react";
import GlassCard from "../ui/GlassCard";

export default function HeroSection() {
  const dailyProgress = 64;

  return (
    <GlassCard
      className="p-10 relative overflow-hidden bg-white border border-gray-200 shadow-sm"
      hover={false}
    >
      {/* Decorative Background */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gray-100 opacity-70 blur-3xl pointer-events-none" />

      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gray-200 opacity-40 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-black mb-3 uppercase tracking-wider">
            Monday, May 12
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Welcome back, Sowmiya 👋
          </h2>

          <p className="text-gray-600 max-w-2xl leading-relaxed mb-8">
            “The best way to predict the future is to create it.”
            Keep pushing forward — every problem solved today
            gets you closer to your dream placement.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition">
              Continue Learning
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition">
              <TrendingUp className="w-5 h-5" />
              View Progress
            </button>
          </div>
        </div>

        {/* Progress Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40">
            <svg
              className="w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background Ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="7"
              />

              {/* Progress Ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#111111"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={`${
                  dailyProgress * 2.64
                } ${264 - dailyProgress * 2.64}`}
                className="animate-progress-fill"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">
                {dailyProgress}%
              </span>

              <span className="text-xs text-gray-500 uppercase tracking-widest">
                Daily Goal
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Today's Progress
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
