import { BarChart3 } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import GlassCard from "../ui/GlassCard";
import {
  weeklyConsistencyData,
  topicMasteryData,
  interviewTrendsData,
} from "../../data/mockData";

const Tip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-white rounded-xl px-4 py-3 text-sm border border-gray-200 shadow-lg">
      <p className="font-semibold text-gray-900 mb-1">
        {label}
      </p>

      {payload.map((entry, i) => (
        <p
          key={i}
          style={{ color: entry.color }}
          className="font-medium"
        >
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  );
};

const axisStyle = {
  fill: "#6B7280",
  fontSize: 12,
};

export default function PerformanceAnalytics() {
  return (
    <GlassCard
      className="p-8 bg-white border border-gray-200 shadow-sm"
      hover={false}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-black" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Performance Analytics
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Your weekly performance overview
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Consistency */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-6">
            Weekly Consistency
          </h4>

          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={weeklyConsistencyData}>
              <defs>
                <linearGradient
                  id="consistencyGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#111111"
                    stopOpacity={0.35}
                  />
                  <stop
                    offset="100%"
                    stopColor="#111111"
                    stopOpacity={0.02}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="day"
                tick={axisStyle}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={axisStyle}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip content={<Tip />} />

              <Area
                type="monotone"
                dataKey="problems"
                stroke="#111111"
                fill="url(#consistencyGradient)"
                strokeWidth={2.5}
                name="Problems"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Topic Mastery */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-6">
            Topic Mastery
          </h4>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={topicMasteryData} barSize={26}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="topic"
                tick={axisStyle}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={axisStyle}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />

              <Tooltip content={<Tip />} />

              <Bar
                dataKey="mastery"
                fill="#111111"
                radius={[6, 6, 0, 0]}
                name="Mastery %"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Interview Trends */}
        <div className="p-6 rounded-2xl bg-white border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-6">
            Interview Trends
          </h4>

          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={interviewTrendsData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="month"
                tick={axisStyle}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                tick={axisStyle}
                axisLine={false}
                tickLine={false}
                domain={[50, 100]}
              />

              <Tooltip content={<Tip />} />

              <Line
                type="monotone"
                dataKey="score"
                stroke="#111111"
                strokeWidth={3}
                dot={{
                  fill: "#111111",
                  r: 5,
                  strokeWidth: 2,
                  stroke: "#ffffff",
                }}
                activeDot={{
                  r: 7,
                  fill: "#111111",
                }}
                name="Score"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GlassCard>
  );
}