import {
  Sparkles,
  AlertTriangle,
  Lightbulb,
  HelpCircle,
  CalendarCheck,
  CheckCircle2,
  Circle,
  ChevronRight,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import { aiRecommendations } from "../../data/mockData";

export default function AIRecommendations() {
  const {
    weakTopics,
    suggestedPractice,
    recommendedQuestions,
    dailyPlan,
  } = aiRecommendations;

  return (
    <GlassCard className="p-10 bg-white border border-gray-200 shadow-sm" hover={false}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-black" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">
            AI Recommendations
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Personalized insights powered by AI
          </p>
        </div>

        <span className="px-3 py-1.5 rounded-lg bg-black text-white text-xs font-semibold uppercase tracking-wider">
          AI Powered
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weak Topics */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-5">
            <AlertTriangle className="w-5 h-5 text-amber-500" />

            <h4 className="text-base font-semibold text-gray-900">
              Weak Topics
            </h4>
          </div>

          <div className="space-y-4">
            {weakTopics.map((topic, i) => (
              <div
                key={i}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-gray-700">
                  {topic.topic}
                </span>

                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full rounded-full animate-progress-fill"
                      style={{
                        width: `${topic.accuracy}%`,
                        backgroundColor:
                          topic.accuracy < 50
                            ? "#ef4444"
                            : "#f59e0b",
                      }}
                    />
                  </div>

                  <span className="text-sm font-semibold text-gray-500 w-10 text-right">
                    {topic.accuracy}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Practice */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-5">
            <Lightbulb className="w-5 h-5 text-black" />

            <h4 className="text-base font-semibold text-gray-900">
              Suggested Practice
            </h4>
          </div>

          <div className="space-y-2">
            {suggestedPractice.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer group"
              >
                <ChevronRight className="w-4 h-4 text-black mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />

                <span className="text-sm text-gray-700 group-hover:text-black transition">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Questions */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-5">
            <HelpCircle className="w-5 h-5 text-blue-500" />

            <h4 className="text-base font-semibold text-gray-900">
              Recommended Questions
            </h4>
          </div>

          <div className="space-y-3">
            {recommendedQuestions.map((q, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {q.title}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {q.topic}
                  </p>
                </div>

                <span
                  className={
                    q.difficulty === "Hard"
                      ? "text-xs font-semibold px-3 py-1 rounded-lg bg-red-100 text-red-600"
                      : q.difficulty === "Medium"
                      ? "text-xs font-semibold px-3 py-1 rounded-lg bg-amber-100 text-amber-600"
                      : "text-xs font-semibold px-3 py-1 rounded-lg bg-green-100 text-green-600"
                  }
                >
                  {q.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Plan */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-5">
            <CalendarCheck className="w-5 h-5 text-green-500" />

            <h4 className="text-base font-semibold text-gray-900">
              Daily Learning Plan
            </h4>
          </div>

          <div className="space-y-3">
            {dailyPlan.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition"
              >
                {item.done ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}

                <p
                  className={
                    item.done
                      ? "text-sm text-gray-400 line-through flex-1"
                      : "text-sm text-gray-700 flex-1"
                  }
                >
                  {item.task}
                </p>

                <span className="text-xs text-gray-500">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
