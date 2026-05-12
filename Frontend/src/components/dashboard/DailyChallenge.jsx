import { Zap, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { dailyChallenges } from "../../data/mockData";

const iconMap = { DSA: Zap, Aptitude: BookOpen, HR: MessageSquare };
const colorMap = {
  DSA: { bg: "#FFF2D0", text: "#D4960B" },
  Aptitude: { bg: "#FFE8E8", text: "#E36A6A" },
  HR: { bg: "#FFD4D4", text: "#D15555" },
};

export default function DailyChallenge() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-7">
        <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center">
          <Zap className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-text-heading">Daily Challenges</h3>
          <p className="text-sm text-text-muted mt-0.5">Complete all 3 to maintain your streak</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
        {dailyChallenges.map((challenge, i) => {
          const colors = colorMap[challenge.type];
          return (
            <GlassCard key={i} className="p-7 group cursor-pointer">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-lg" style={{ backgroundColor: colors.bg, color: colors.text }}>
                  {challenge.type}
                </span>
                <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${challenge.difficulty === "Easy" ? "bg-success-soft text-success" : "bg-warning-soft text-warning"}`}>
                  {challenge.difficulty}
                </span>
              </div>
              <h4 className="text-base font-semibold text-text-heading mb-2 group-hover:text-accent transition-colors">{challenge.title}</h4>
              <p className="text-sm text-text-muted mb-2">{challenge.topic}</p>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed line-clamp-2">{challenge.description}</p>
              <button className="flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform" style={{ color: colors.text }}>
                Attempt Now <ArrowRight className="w-4 h-4" />
              </button>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
