import {
  Sparkles, AlertTriangle, Lightbulb, HelpCircle,
  CalendarCheck, CheckCircle2, Circle, ChevronRight,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { aiRecommendations } from "../../data/mockData";

export default function AIRecommendations() {
  const { weakTopics, suggestedPractice, recommendedQuestions, dailyPlan } = aiRecommendations;

  return (
    <GlassCard className="p-12" hover={false}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-xl bg-accent-soft flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display font-bold text-text-heading">AI Recommendations</h3>
          <p className="text-sm text-text-muted mt-0.5">Personalized insights powered by AI</p>
        </div>
        <span className="px-3 py-1.5 rounded-lg bg-accent-soft text-xs font-bold text-accent uppercase tracking-wider">
          AI Powered
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weak Topics */}
        <div className="p-6 rounded-xl bg-bg-primary border border-border-light">
          <div className="flex items-center gap-2.5 mb-5">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <h4 className="text-base font-semibold text-text-heading">Weak Topics</h4>
          </div>
          <div className="space-y-4">
            {weakTopics.map((topic, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">{topic.topic}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 h-2 rounded-full bg-border-light overflow-hidden">
                    <div
                      className="h-full rounded-full animate-progress-fill"
                      style={{
                        width: `${topic.accuracy}%`,
                        backgroundColor: topic.accuracy < 50 ? "#E36A6A" : "#D4960B",
                      }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-text-muted tabular-nums w-10 text-right">
                    {topic.accuracy}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Practice */}
        <div className="p-6 rounded-xl bg-bg-primary border border-border-light">
          <div className="flex items-center gap-2.5 mb-5">
            <Lightbulb className="w-5 h-5 text-accent" />
            <h4 className="text-base font-semibold text-text-heading">Suggested Practice</h4>
          </div>
          <div className="space-y-2">
            {suggestedPractice.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-bg-hover transition-colors cursor-pointer group"
              >
                <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                <span className="text-sm text-text-secondary group-hover:text-text-heading transition-colors leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Questions */}
        <div className="p-6 rounded-xl bg-bg-primary border border-border-light">
          <div className="flex items-center gap-2.5 mb-5">
            <HelpCircle className="w-5 h-5 text-info" />
            <h4 className="text-base font-semibold text-text-heading">Recommended Questions</h4>
          </div>
          <div className="space-y-3">
            {recommendedQuestions.map((q, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-hover transition-colors cursor-pointer"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-heading truncate">{q.title}</p>
                  <p className="text-xs text-text-muted mt-1">{q.topic}</p>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-lg ${q.difficulty === "Hard"
                      ? "bg-accent-soft text-accent"
                      : q.difficulty === "Medium"
                        ? "bg-warning-soft text-warning"
                        : "bg-success-soft text-success"
                    }`}
                >
                  {q.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Plan */}
        <div className="p-6 rounded-xl bg-bg-primary border border-border-light">
          <div className="flex items-center gap-2.5 mb-5">
            <CalendarCheck className="w-5 h-5 text-success" />
            <h4 className="text-base font-semibold text-text-heading">Daily Learning Plan</h4>
          </div>
          <div className="space-y-2.5">
            {dailyPlan.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-hover transition-colors"
              >
                {item.done ? (
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-text-placeholder flex-shrink-0" />
                )}
                <p className={`text-sm flex-1 ${item.done ? "text-text-muted line-through" : "text-text-secondary"}`}>
                  {item.task}
                </p>
                <span className="text-xs text-text-muted tabular-nums">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
