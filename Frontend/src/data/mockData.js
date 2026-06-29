// ─── Mock Data for Smart Interview Prep Dashboard ───

export const userProfile = {
  name: "Sowmiya",
  avatar: null,
  email: "sowmiya@example.com",
  plan: "Pro",
  joinedDate: "2026-01-15",
};

export const statsData = [
  {
    id: "problems",
    label: "Problems Solved",
    value: 347,
    total: 500,
    change: "+12 this week",
    trend: "up",
    icon: "Code2",
  },
  {
    id: "interviews",
    label: "Mock Interviews",
    value: 23,
    total: 50,
    change: "+3 this week",
    trend: "up",
    icon: "Video",
  },
  {
    id: "streak",
    label: "Current Streak",
    value: 14,
    total: null,
    change: "Best: 21 days",
    trend: "up",
    icon: "Flame",
  },
  {
    id: "readiness",
    label: "Interview Readiness",
    value: 78,
    total: 100,
    change: "+5% this month",
    trend: "up",
    icon: "Target",
  },
];

export const dsaTopics = [
  { name: "Arrays & Hashing", solved: 45, total: 60, color: "#E36A6A" },
  { name: "Graphs & BFS/DFS", solved: 28, total: 50, color: "#F09090" },
  { name: "Dynamic Programming", solved: 22, total: 55, color: "#FFB2B2" },
  { name: "Trees & BST", solved: 35, total: 45, color: "#E36A6A" },
  { name: "SQL & Databases", solved: 30, total: 40, color: "#F09090" },
  { name: "Operating Systems", solved: 18, total: 30, color: "#FFB2B2" },
  { name: "Computer Networks", solved: 15, total: 25, color: "#E36A6A" },
];

export const aiRecommendations = {
  weakTopics: [
    { topic: "Dynamic Programming", accuracy: 42, priority: "high" },
    { topic: "Graph Algorithms", accuracy: 55, priority: "medium" },
    { topic: "System Design", accuracy: 48, priority: "high" },
  ],
  suggestedPractice: [
    "Solve 3 DP problems: Knapsack, LCS, Coin Change",
    "Review BFS/DFS traversal patterns",
    "Practice 2 SQL join queries",
    "Complete 1 system design mock",
  ],
  recommendedQuestions: [
    { title: "Longest Increasing Subsequence", difficulty: "Medium", topic: "DP" },
    { title: "Course Schedule II", difficulty: "Medium", topic: "Graphs" },
    { title: "Median of Two Sorted Arrays", difficulty: "Hard", topic: "Arrays" },
  ],
  dailyPlan: [
    { time: "9:00 AM", task: "2 DP problems (Memoization)", done: true },
    { time: "11:00 AM", task: "Graph theory revision", done: true },
    { time: "2:00 PM", task: "Mock Interview practice", done: false },
    { time: "4:00 PM", task: "Resume review & update", done: false },
    { time: "6:00 PM", task: "Aptitude practice set", done: false },
  ],
};

export const mockInterviews = {
  upcoming: [
    {
      id: 1,
      title: "Frontend Developer — React",
      date: "May 14, 2026",
      time: "10:00 AM",
      type: "Technical",
      difficulty: "Medium",
    },
    {
      id: 2,
      title: "System Design — URL Shortener",
      date: "May 16, 2026",
      time: "2:00 PM",
      type: "System Design",
      difficulty: "Hard",
    },
  ],
  previousScores: [
    { title: "DSA Round — Arrays", score: 85, date: "May 8" },
    { title: "Behavioral Interview", score: 92, date: "May 5" },
    { title: "System Design — Chat App", score: 72, date: "May 2" },
  ],
};

export const resumeData = {
  atsScore: 74,
  suggestions: [
    { text: "Add quantifiable achievements to experience", priority: "high" },
    { text: "Include more action verbs", priority: "medium" },
    { text: "Optimize keyword density for target role", priority: "high" },
    { text: "Add relevant certifications section", priority: "low" },
  ],
};

export const weeklyConsistencyData = [
  { day: "Mon", problems: 8, accuracy: 75 },
  { day: "Tue", problems: 12, accuracy: 82 },
  { day: "Wed", problems: 6, accuracy: 68 },
  { day: "Thu", problems: 15, accuracy: 88 },
  { day: "Fri", problems: 10, accuracy: 79 },
  { day: "Sat", problems: 18, accuracy: 91 },
  { day: "Sun", problems: 14, accuracy: 85 },
];

export const topicMasteryData = [
  { topic: "Arrays", mastery: 85 },
  { topic: "Trees", mastery: 72 },
  { topic: "Graphs", mastery: 55 },
  { topic: "DP", mastery: 42 },
  { topic: "SQL", mastery: 78 },
  { topic: "OS", mastery: 65 },
];

export const interviewTrendsData = [
  { month: "Jan", score: 62 },
  { month: "Feb", score: 68 },
  { month: "Mar", score: 71 },
  { month: "Apr", score: 75 },
  { month: "May", score: 78 },
];

export const dailyChallenges = [
  {
    type: "DSA",
    title: "Two Sum — Optimal Approach",
    difficulty: "Easy",
    topic: "Arrays & Hashing",
    description: "Given an array of integers, find two numbers that add up to a specific target.",
  },
  {
    type: "Aptitude",
    title: "Probability & Combinations",
    difficulty: "Medium",
    topic: "Quantitative",
    description: "A bag contains 5 red and 3 blue balls. Find probability of drawing 2 red balls.",
  },
  {
    type: "HR",
    title: "Tell me about yourself",
    difficulty: "Easy",
    topic: "Behavioral",
    description: "Craft a compelling 2-minute introduction highlighting your strengths and career goals.",
  },
];

export const sidebarNav = [
  {
    label: "Dashboard",
    icon: "LayoutDashboard",
    path: "/",
  },
  {
    label: "DSA Tracker",
    icon: "Code2",
    path: "/dsa-tracker",
  },
  {
    label: "Mock Interviews",
    icon: "Video",
    path: "/mock-interview",
  },
  {
    label: "Resume Analyzer",
    icon: "FileText",
    path: "/resumeanalyzer",
  },
  {
    label: "Aptitude Practice",
    icon: "Brain",
    path: "/aptitude-practice",
  },
  {
    label: "Progress Analytics",
    icon: "BarChart3",
    path: "/progress-analytics",
  },
  {
    label: "Study Planner",
    icon: "CalendarDays",
    path: "/study-planner",
  },
];

export const interviewPrepItems = [
  { label: "Company-wise Prep", icon: "Building2" },
  { label: "Role-wise Prep", icon: "Briefcase" },
  // { label: "Custom Roadmaps", icon: "Map" },
  // { label: "Rounds Tracker", icon: "ListChecks" },
];

export const achievements = [
  { title: "7-Day Streak 🔥", time: "2 hours ago" },
  { title: "100 Problems Club 🎯", time: "Yesterday" },
  { title: "Mock Interview Ace ⭐", time: "3 days ago" },
];

export const leaderboard = [
  { rank: 1, name: "Arjun K.", score: 2450, avatar: "A" },
  { rank: 2, name: "Priya S.", score: 2380, avatar: "P" },
  { rank: 3, name: "Sowmiya R.", score: 2290, avatar: "S" },
  { rank: 4, name: "Rahul M.", score: 2150, avatar: "R" },
  { rank: 5, name: "Neha D.", score: 2080, avatar: "N" },
];
