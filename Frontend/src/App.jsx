import "./index.css";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import HeroSection from "./components/dashboard/HeroSection";
import StatsCards from "./components/dashboard/StatsCards";
import AIRecommendations from "./components/dashboard/AIRecommendations";
import DSAProgress from "./components/dashboard/DSAProgress";
import MockInterview from "./components/dashboard/MockInterview";
import ResumeAnalyzer from "./components/dashboard/ResumeAnalyzer";
import PerformanceAnalytics from "./components/dashboard/PerformanceAnalytics";
import DailyChallenge from "./components/dashboard/DailyChallenge";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-[300px] pt-[95px] min-h-screen">
        <div className="px-8 py-6 space-y-8">

          <HeroSection />

          <StatsCards />

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DSAProgress />
            <MockInterview />
          </section>

          <AIRecommendations />

          <ResumeAnalyzer />

          <PerformanceAnalytics />

          <DailyChallenge />

          <footer className="pt-8 pb-6 border-t border-gray-300">
            <p className="text-center text-sm text-gray-500">
              © 2026 Smart Interview Prep
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}

export default App;