import { ArrowRight, TrendingUp } from "lucide-react";
import GlassCard from "../ui/GlassCard";

export default function HeroSection() {
  const dailyProgress = 64;

  return (
    <GlassCard className="p-10 relative overflow-hidden" hover={false}>
      {/* Soft decorative background */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-bg-secondary opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-secondary-light opacity-40 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left content */}
        <div className="flex-1">
          <p className="text-sm font-medium text-accent mb-3 tracking-wide uppercase">
            Monday, May 12
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-heading mb-4 leading-snug">
            Welcome back, Sowmiya 👋
          </h2>

          <p className="text-base text-text-secondary max-w-xl leading-relaxed mb-8">
            "The best way to predict the future is to create it." — Keep pushing, your dream placement is closer than you think!
          </p>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent text-white text-base font-semibold shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.98] transition-all duration-200">
              Continue Learning
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white border border-border-default text-base font-medium text-text-secondary hover:border-border-focus hover:text-text-heading transition-all duration-200">
              <TrendingUp className="w-5 h-5" />
              View Progress
            </button>
          </div>
        </div>

        {/* Daily Progress Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#FFEFD6" strokeWidth="7" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke="#E36A6A"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={`${dailyProgress * 2.64} ${264 - dailyProgress * 2.64}`}
                className="animate-progress-fill"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-display font-bold text-text-heading">{dailyProgress}%</span>
              <span className="text-xs text-text-muted uppercase tracking-wider">Daily Goal</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-text-muted">Today's Progress</p>
        </div>
      </div>
    </GlassCard>
  );
}
