import {
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import { resumeData } from "../../data/mockData";

export default function ResumeAnalyzer() {
  const { atsScore, suggestions } = resumeData;

  const circumference = 2 * Math.PI * 42;
  const dashOffset =
    circumference - (atsScore / 100) * circumference;

  return (
    <GlassCard
      className="p-8 bg-white border border-gray-200 shadow-sm"
      hover={false}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
            <FileText className="w-5 h-5 text-black" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Resume Analyzer
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              ATS compatibility check
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-900 transition">
          <Upload className="w-4 h-4" />
          Upload Resume
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* ATS Score */}
        <div className="flex flex-col items-center">
          <div className="relative w-44 h-44">
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
                strokeWidth="6"
              />

              {/* Progress Ring */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke={
                  atsScore >= 80
                    ? "#22C55E"
                    : atsScore >= 60
                    ? "#F59E0B"
                    : "#EF4444"
                }
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                className="transition-all duration-1000"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-gray-900">
                {atsScore}
              </span>

              <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                ATS Score
              </span>
            </div>
          </div>

          <p
            className={
              atsScore >= 80
                ? "mt-4 text-sm font-medium text-green-600"
                : atsScore >= 60
                ? "mt-4 text-sm font-medium text-amber-600"
                : "mt-4 text-sm font-medium text-red-600"
            }
          >
            {atsScore >= 80
              ? "Excellent"
              : atsScore >= 60
              ? "Good"
              : "Needs Improvement"}
          </p>
        </div>

        {/* Suggestions */}
        <div className="flex-1 w-full">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-5">
            Improvement Suggestions
          </h4>

          <div className="space-y-4">
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:bg-gray-50 transition"
              >
                {s.priority === "high" ? (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                ) : s.priority === "medium" ? (
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                )}

                <div className="flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {s.text}
                  </p>

                  <span
                    className={
                      s.priority === "high"
                        ? "text-xs font-semibold uppercase tracking-wider mt-2 inline-block text-red-500"
                        : s.priority === "medium"
                        ? "text-xs font-semibold uppercase tracking-wider mt-2 inline-block text-blue-500"
                        : "text-xs font-semibold uppercase tracking-wider mt-2 inline-block text-green-500"
                    }
                  >
                    {s.priority} priority
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}