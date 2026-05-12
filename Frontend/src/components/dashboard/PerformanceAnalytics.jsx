import { BarChart3 } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import GlassCard from "../ui/GlassCard";
import { weeklyConsistencyData, topicMasteryData, interviewTrendsData } from "../../data/mockData";

const Tip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-lg px-4 py-3 text-sm border border-border-light shadow-lg">
      <p className="font-semibold text-text-heading mb-1">{label}</p>
      {payload.map((e, i) => <p key={i} style={{ color: e.color }} className="font-medium">{e.name}: {e.value}</p>)}
    </div>
  );
};

const axisStyle = { fill: "#9A8A78", fontSize: 12 };

export default function PerformanceAnalytics() {
  return (
    <GlassCard className="p-9" hover={false}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-xl bg-success-soft flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-success" />
        </div>
        <div>
          <h3 className="text-xl font-display font-bold text-text-heading">Performance Analytics</h3>
          <p className="text-sm text-text-muted mt-0.5">Your weekly performance overview</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-bg-primary border border-border-light">
          <h4 className="text-sm font-semibold text-text-secondary mb-6">Weekly Consistency</h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={weeklyConsistencyData}>
              <defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFB2B2" stopOpacity={0.4}/><stop offset="100%" stopColor="#FFB2B2" stopOpacity={0.02}/></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#FFEFD6"/>
              <XAxis dataKey="day" tick={axisStyle} axisLine={false} tickLine={false}/>
              <YAxis tick={axisStyle} axisLine={false} tickLine={false}/>
              <Tooltip content={<Tip/>}/><Area type="monotone" dataKey="problems" stroke="#E36A6A" fill="url(#ag)" strokeWidth={2.5} name="Problems"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6 rounded-xl bg-bg-primary border border-border-light">
          <h4 className="text-sm font-semibold text-text-secondary mb-6">Topic Mastery</h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={topicMasteryData} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" stroke="#FFEFD6"/>
              <XAxis dataKey="topic" tick={axisStyle} axisLine={false} tickLine={false}/>
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[0,100]}/>
              <Tooltip content={<Tip/>}/><Bar dataKey="mastery" fill="#FFB2B2" radius={[4,4,0,0]} name="Mastery %"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-6 rounded-xl bg-bg-primary border border-border-light">
          <h4 className="text-sm font-semibold text-text-secondary mb-6">Interview Trends</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={interviewTrendsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#FFEFD6"/>
              <XAxis dataKey="month" tick={axisStyle} axisLine={false} tickLine={false}/>
              <YAxis tick={axisStyle} axisLine={false} tickLine={false} domain={[50,100]}/>
              <Tooltip content={<Tip/>}/><Line type="monotone" dataKey="score" stroke="#E36A6A" strokeWidth={2.5} dot={{fill:"#E36A6A",r:5,strokeWidth:2,stroke:"#fff"}} activeDot={{r:7,fill:"#E36A6A"}} name="Score"/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GlassCard>
  );
}
