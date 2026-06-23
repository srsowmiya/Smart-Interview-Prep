import {
  Video,
  Play,
  Calendar,
  Award,
  Clock,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import { mockInterviews } from "../../data/mockData";

export default function MockInterview() {
  return (
    <GlassCard
      className="p-8 bg-white border border-gray-200 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
            <Video className="w-5 h-5 text-black" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Mock Interviews
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Practice makes perfect
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-900 transition-all">
          <Play className="w-4 h-4" />
          Start New Interview
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Interviews */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Upcoming
          </h4>

          <div className="space-y-4">
            {mockInterviews.upcoming.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-black hover:bg-gray-50 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h5 className="text-base font-semibold text-gray-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h5>

                  <span
                    className={
                      item.difficulty === "Hard"
                        ? "text-xs font-semibold px-3 py-1 rounded-lg bg-red-100 text-red-600"
                        : "text-xs font-semibold px-3 py-1 rounded-lg bg-amber-100 text-amber-600"
                    }
                  >
                    {item.difficulty}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {item.time}
                  </span>
                </div>

                <span className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-lg bg-gray-100 text-black border border-gray-200">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Scores */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Previous Scores
          </h4>

          <div className="space-y-4">
            {mockInterviews.previousScores.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:bg-gray-50 transition-all"
              >
                <div
                  className={
                    s.score >= 85
                      ? "w-12 h-12 rounded-xl flex items-center justify-center bg-green-100"
                      : s.score >= 70
                      ? "w-12 h-12 rounded-xl flex items-center justify-center bg-amber-100"
                      : "w-12 h-12 rounded-xl flex items-center justify-center bg-red-100"
                  }
                >
                  <Award
                    className={
                      s.score >= 85
                        ? "w-6 h-6 text-green-600"
                        : s.score >= 70
                        ? "w-6 h-6 text-amber-600"
                        : "w-6 h-6 text-red-600"
                    }
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 truncate">
                    {s.title}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {s.date}
                  </p>
                </div>

                <span
                  className={
                    s.score >= 85
                      ? "text-2xl font-bold text-green-600"
                      : s.score >= 70
                      ? "text-2xl font-bold text-amber-600"
                      : "text-2xl font-bold text-red-600"
                  }
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
