import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full px-4 pt-4">
      <nav className="w-full bg-[#111111] rounded-full shadow-2xl px-6 py-3 flex items-center justify-between">
        
        {/* Left Section */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-black font-bold text-lg">
              SI
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#"
              className="text-white/90 hover:text-white transition font-medium"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-white/90 hover:text-white transition font-medium"
            >
              DSA
            </a>

            <a
              href="#"
              className="text-white/90 hover:text-white transition font-medium"
            >
              Mock Interview
            </a>

            <a
              href="#"
              className="text-white/90 hover:text-white transition font-medium"
            >
              Resume
            </a>

            <a
              href="#"
              className="text-white/90 hover:text-white transition font-medium"
            >
              Analytics
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Notification */}
          <button className="relative p-2 text-white hover:scale-105 transition">
            <Bell size={20} />

            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile Pill */}
          <button className="bg-white rounded-full px-5 py-2 flex items-center gap-3 hover:shadow-lg transition">
            
            <div className="w-8 h-8 bg-[#0f1f45] rounded-full flex items-center justify-center text-white text-sm font-bold">
              S
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-black">
                Sowmiya
              </p>

              <p className="text-[11px] text-gray-500">
                Pro Plan
              </p>
            </div>
          </button>
        </div>

      </nav>
    </div>
  );
}

