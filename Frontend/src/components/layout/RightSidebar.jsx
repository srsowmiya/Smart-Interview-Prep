import { useState, useEffect, useRef } from "react";
import { Timer, Trophy, Medal, Star, Clock, Play, Pause, RotateCcw } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import { achievements, leaderboard } from "../../data/mockData";

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 0) {
            if (minutes === 0) {
              clearInterval(intervalRef.current);
              setIsRunning(false);
              return 0;
            }
            setMinutes((m) => m - 1);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, minutes]);

  const reset = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  const progress = ((25 * 60 - (minutes * 60 + seconds)) / (25 * 60)) * 100;

  return (
    <GlassCard className="p-5 mb-5">
      <div className="flex items-center gap-2 mb-4">
        <Timer className="w-4 h-4 text-accent" />
        <h3 className="text-sm font-semibold text-text-heading">Pomodoro Timer</h3>
      </div>

      <div className="flex justify-center mb-4">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#E8F0F1" strokeWidth="6" />
            <circle
              cx="50" cy="50" r="42" fill="none"
              stroke="#FF0000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.64} ${264 - progress * 2.64}`}
              className="transition-all duration-1000"
              opacity="0.8"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-display font-bold text-text-heading tabular-nums">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-text-muted mt-0.5 uppercase tracking-wider">Focus</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent-hover transition-all shadow-sm"
        >
          {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={reset}
          className="p-2 rounded-lg bg-bg-primary border border-border-light text-text-muted hover:text-text-heading hover:border-border-focus transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </GlassCard>
  );
}

function PlacementCountdown() {
  const targetDate = new Date("2026-08-01");
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));

  return (
    <GlassCard className="p-5 mb-5">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-teal-dark" />
        <h3 className="text-sm font-semibold text-text-heading">Placement Countdown</h3>
      </div>
      <div className="text-center">
        <div className="text-4xl font-display font-bold text-accent mb-1">{days}</div>
        <p className="text-xs text-text-muted">days until placement season</p>
      </div>
      <div className="mt-4 w-full h-1.5 rounded-full bg-border-light overflow-hidden">
        <div
          className="h-full rounded-full bg-teal-dark animate-progress-fill"
          style={{ width: `${Math.min(100, 100 - (days / 365) * 100)}%` }}
        />
      </div>
    </GlassCard>
  );
}

function RecentAchievements() {
  return (
    <GlassCard className="p-5 mb-5">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-4 h-4 text-warning" />
        <h3 className="text-sm font-semibold text-text-heading">Recent Achievements</h3>
      </div>
      <div className="space-y-2">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-bg-hover transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-warning-soft flex items-center justify-center">
              <Star className="w-4 h-4 text-warning" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-text-heading truncate">{a.title}</p>
              <p className="text-[10px] text-text-muted">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function LeaderboardPreview() {
  return (
    <GlassCard className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Medal className="w-4 h-4 text-teal-dark" />
        <h3 className="text-sm font-semibold text-text-heading">Leaderboard</h3>
      </div>
      <div className="space-y-1.5">
        {leaderboard.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-2.5 p-2.5 rounded-lg transition-colors ${
              entry.rank === 3
                ? "bg-bg-secondary border border-border-default"
                : "hover:bg-bg-hover"
            }`}
          >
            <span
              className={`w-5 text-xs font-bold text-center ${
                entry.rank === 1
                  ? "text-warning"
                  : entry.rank === 2
                  ? "text-text-muted"
                  : entry.rank === 3
                  ? "text-accent"
                  : "text-text-placeholder"
              }`}
            >
              {entry.rank}
            </span>
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                entry.rank === 3
                  ? "bg-accent text-white"
                  : "bg-bg-muted text-text-secondary"
              }`}
            >
              {entry.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-text-heading truncate">{entry.name}</p>
            </div>
            <span className="text-[11px] font-semibold text-text-muted tabular-nums">
              {entry.score.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function RightSidebar() {
  return (
    <aside className="hidden xl:block fixed right-0 top-[61px] bottom-0 w-[300px] bg-white/50 backdrop-blur-sm border-l border-border-light overflow-y-auto p-5 z-40">
      <PomodoroTimer />
      <PlacementCountdown />
      <RecentAchievements />
      <LeaderboardPreview />
    </aside>
  );
}
