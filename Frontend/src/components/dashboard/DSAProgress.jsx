import { Code2, ChevronRight } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { dsaTopics } from "../../data/mockData";

export default function DSAProgress() {
  const totalSolved = dsaTopics.reduce((a, b) => a + b.solved, 0);
  const totalProblems = dsaTopics.reduce((a, b) => a + b.total, 0);

  const overallPercent = Math.round(
    (totalSolved / totalProblems) * 100
  );

  return (
    <GlassCard
      className="p-8 bg-white border border-gray-200 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-black" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              DSA Progress
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {totalSolved} / {totalProblems} problems solved
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-black">
            {overallPercent}%
          </span>

          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="space-y-6">
        {dsaTopics.map((topic) => {
          const pct = Math.round(
            (topic.solved / topic.total) * 100
          );

          return (
            <div
              key={topic.name}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">
                  {topic.name}
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">
                    {topic.solved}/{topic.total}
                  </span>

                  <span className="text-sm font-bold text-gray-900 w-10 text-right">
                    {pct}%
                  </span>
                </div>
              </div>

              <div className="w-full h-2.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full rounded-full animate-progress-fill transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: "#111111",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
