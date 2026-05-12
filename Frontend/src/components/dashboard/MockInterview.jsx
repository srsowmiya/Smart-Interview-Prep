import { Video, Play, Calendar, Award, Clock } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { mockInterviews } from "../../data/mockData";

export default function MockInterview() {
  return (
    <GlassCard className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-info-soft flex items-center justify-center">
            <Video className="w-5 h-5 text-info" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-text-heading">Mock Interviews</h3>
            <p className="text-sm text-text-muted mt-0.5">Practice makes perfect</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.98] transition-all duration-200">
          <Play className="w-4 h-4" />
          Start New Interview
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming */}
        <div>
          <h4 className="text-sm font-semibold text-text-muted uppercase tracking-[0.1em] mb-4">
            Upcoming
          </h4>
          <div className="space-y-4">
            {mockInterviews.upcoming.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl bg-bg-primary border border-border-light hover:border-border-focus hover:bg-bg-hover transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h5 className="text-base font-medium text-text-heading group-hover:text-teal-dark transition-colors">
                    {item.title}
                  </h5>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                      item.difficulty === "Hard"
                        ? "bg-accent-soft text-accent"
                        : "bg-warning-soft text-warning"
                    }`}
                  >
                    {item.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </span>
                </div>
                <span className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-lg bg-bg-secondary text-teal-dark border border-border-default">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Scores */}
        <div>
          <h4 className="text-sm font-semibold text-text-muted uppercase tracking-[0.1em] mb-4">
            Previous Scores
          </h4>
          <div className="space-y-4">
            {mockInterviews.previousScores.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl bg-bg-primary border border-border-light hover:bg-bg-hover transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    s.score >= 85
                      ? "bg-success-soft"
                      : s.score >= 70
                      ? "bg-warning-soft"
                      : "bg-accent-soft"
                  }`}
                >
                  <Award
                    className={`w-6 h-6 ${
                      s.score >= 85
                        ? "text-success"
                        : s.score >= 70
                        ? "text-warning"
                        : "text-accent"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-heading truncate">{s.title}</p>
                  <p className="text-xs text-text-muted mt-0.5">{s.date}</p>
                </div>
                <span
                  className={`text-2xl font-display font-bold tabular-nums ${
                    s.score >= 85
                      ? "text-success"
                      : s.score >= 70
                      ? "text-warning"
                      : "text-accent"
                  }`}
                >
                  {s.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
