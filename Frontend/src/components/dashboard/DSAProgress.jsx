import { Code2, ChevronRight } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { dsaTopics } from "../../data/mockData";

export default function DSAProgress() {
  const totalSolved = dsaTopics.reduce((a, b) => a + b.solved, 0);
  const totalProblems = dsaTopics.reduce((a, b) => a + b.total, 0);
  const overallPercent = Math.round((totalSolved / totalProblems) * 100);

  return (
    <GlassCard className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-bg-secondary flex items-center justify-center">
            <Code2 className="w-5 h-5 text-teal-dark" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-text-heading">DSA Progress</h3>
            <p className="text-sm text-text-muted mt-0.5">
              {totalSolved} / {totalProblems} problems solved
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-2xl font-display font-bold text-accent">{overallPercent}%</span>
          <button className="p-2 rounded-lg hover:bg-bg-hover transition-colors">
            <ChevronRight className="w-5 h-5 text-text-muted" />
          </button>
        </div>
      </div>

      {/* Topic Progress Bars */}
      <div className="space-y-6">
        {dsaTopics.map((topic) => {
          const pct = Math.round((topic.solved / topic.total) * 100);
          return (
            <div key={topic.name} className="group cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-text-secondary group-hover:text-text-heading transition-colors">
                  {topic.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-text-muted tabular-nums">
                    {topic.solved}/{topic.total}
                  </span>
                  <span className="text-sm font-bold text-text-heading tabular-nums w-10 text-right">
                    {pct}%
                  </span>
                </div>
              </div>
              <div className="w-full h-2.5 rounded-full bg-border-light overflow-hidden">
                <div
                  className="h-full rounded-full animate-progress-fill transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: topic.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
