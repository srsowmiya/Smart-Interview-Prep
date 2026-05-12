import './index.css';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import HeroSection from './components/dashboard/HeroSection';
import StatsCards from './components/dashboard/StatsCards';
import AIRecommendations from './components/dashboard/AIRecommendations';
import DSAProgress from './components/dashboard/DSAProgress';
import MockInterview from './components/dashboard/MockInterview';
import ResumeAnalyzer from './components/dashboard/ResumeAnalyzer';
import PerformanceAnalytics from './components/dashboard/PerformanceAnalytics';
import DailyChallenge from './components/dashboard/DailyChallenge';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Top Navbar */}
      <Navbar />

      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content — fills all space after sidebar */}
      <main className="pt-[90px] pl-[260px] min-h-screen">
        <div className="px-12 py-10 space-y-10">
          {/* Hero */}
          <section>
            <HeroSection />
          </section>

          {/* Stats */}
          <section>
            <StatsCards />
          </section>

          {/* DSA + Mock Interviews side by side */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DSAProgress />
            <MockInterview />
          </section>

          {/* AI Recommendations — full width block */}
          <section>
            <AIRecommendations />
          </section>

          {/* Resume Analyzer */}
          <section>
            <ResumeAnalyzer />
          </section>

          {/* Performance Analytics */}
          <section>
            <PerformanceAnalytics />
          </section>

          {/* Daily Challenges */}
          <section>
            <DailyChallenge />
          </section>

          {/* Footer */}
          <footer className="pt-6 pb-10 text-center border-t border-border-light mt-4">
            <p className="text-sm text-text-muted">
              © 2026 Smart Interview Prep — Built with ❤️ for placement success
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
