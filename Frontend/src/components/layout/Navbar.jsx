import { Bell, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar bar */}
      <nav className="relative bg-secondary">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base">SI</span>
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-text-heading">
              Smart Interview <span className="font-medium text-text-secondary">Prep</span>
            </h1>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Notification */}
            <button className="relative p-2.5 rounded-xl hover:bg-white/30 transition-colors group">
              <Bell className="w-5 h-5 text-text-heading group-hover:text-accent transition-colors" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-accent rounded-full border-2 border-secondary" />
            </button>

            {/* Profile */}
            <button className="flex items-center gap-2.5 pl-2.5 pr-3.5 py-2 rounded-xl hover:bg-white/30 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white text-sm font-bold shadow-sm">
                S
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-text-heading leading-tight">Sowmiya</p>
                <p className="text-[11px] text-text-secondary leading-tight">Pro Plan</p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-text-secondary group-hover:text-text-heading transition-colors" />
            </button>
          </div>
        </div>
      </nav>

      {/* Asymmetric wavy bottom — dips deeper on the right */}
      <svg
        className="w-full block -mt-px"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: "70px" }}
      >
        <path
          d="M0,0 L0,30 C200,10 350,70 500,50 C650,30 750,80 900,60 C1050,40 1150,100 1300,90 C1370,85 1420,110 1440,105 L1440,0 Z"
          fill="#FFB2B2"
        />
      </svg>
    </div>
  );
}
