import { FileText, Upload, CheckCircle, AlertCircle, Info } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { resumeData } from "../../data/mockData";

export default function ResumeAnalyzer() {
  const { atsScore, suggestions } = resumeData;
  const circumference = 2 * Math.PI * 42;
  const dashOffset = circumference - (atsScore / 100) * circumference;

  return (
    <GlassCard className="p-9" hover={false}>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-bg-secondary flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-text-heading">Resume Analyzer</h3>
            <p className="text-sm text-text-muted mt-0.5">ATS compatibility check</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-semibold shadow-sm hover:bg-accent-hover transition-all">
          <Upload className="w-4 h-4" />
          Upload Resume
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* ATS Score Circle */}
        <div className="flex flex-col items-center">
          <div className="relative w-44 h-44">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="#FFEFD6" strokeWidth="6" />
              <circle
                cx="50" cy="50" r="42" fill="none"
                stroke={atsScore >= 80 ? "#5BAA6E" : atsScore >= 60 ? "#D4960B" : "#E36A6A"}
                strokeWidth="6" strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-display font-bold text-text-heading">{atsScore}</span>
              <span className="text-xs text-text-muted uppercase tracking-wider mt-1">ATS Score</span>
            </div>
          </div>
          <p className="mt-4 text-sm font-medium text-warning">Needs Improvement</p>
        </div>

        {/* Suggestions */}
        <div className="flex-1 w-full">
          <h4 className="text-sm font-semibold text-text-muted uppercase tracking-[0.1em] mb-5">
            Improvement Suggestions
          </h4>
          <div className="space-y-3.5">
            {suggestions.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-bg-primary border border-border-light hover:bg-bg-hover transition-colors"
              >
                {s.priority === "high" ? (
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                ) : s.priority === "medium" ? (
                  <Info className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider mt-1.5 inline-block ${
                      s.priority === "high"
                        ? "text-accent"
                        : s.priority === "medium"
                        ? "text-info"
                        : "text-success"
                    }`}
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
