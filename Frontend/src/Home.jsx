import "./index.css";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import HeroSection from "./components/dashboard/HeroSection";
import StatsCards from "./components/dashboard/StatsCards";
import DSAProgress from "./components/dashboard/DSAProgress";
import MockInterview from "./components/dashboard/MockInterview";
import ResumeAnalyzer from "./components/dashboard/ResumeAnalyzer";
import PerformanceAnalytics from "./components/dashboard/PerformanceAnalytics";
import DailyChallenge from "./components/dashboard/DailyChallenge";

function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />

      <Sidebar />

      <main className="pt-[90px] pl-[320px] min-h-screen">
        <div className="px-12 py-10 space-y-10">
          <HeroSection />

          <StatsCards />

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DSAProgress />
            <MockInterview />
          </section>

         

          <ResumeAnalyzer />

          <PerformanceAnalytics />

          <DailyChallenge />

          <footer className="pt-6 pb-10 text-center border-t border-border-light mt-4">
            <p className="text-sm text-text-muted">
              © 2026 Smart Interview Prep
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Home;