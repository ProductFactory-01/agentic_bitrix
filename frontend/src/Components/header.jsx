"use client";
import Logo from "../../src/assets/sns-DxCft4QP 1.png";

const Header = () => {
  const handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className=" px-6 py-4 fixed top-0 w-full shadow-lg z-50 backdrop-blur-md bg-transparent">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="">
            <div className="flex items-center justify-center">
              <img src={Logo || "/placeholder.svg"} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">SNSCT</h1>
            <p className="text-white text-xs opacity-90">
              Design Thinking Excellence
            </p>
          </div>
        </div>

        {/* TNEA Code with Animation */}
        <div className="bg-gradient-to-l from-amber-50 via-yellow-50 to-amber-100 px-4 py-2 rounded-full animate-pulse-zoom shadow-md">
          <span className="text-amber-900 font-semibold text-sm flex items-center">
            <span className="mr-2 text-amber-800">⚙</span>
            TNEA Code: 2726
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => handleSmoothScroll("home")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none"
          >
            Home
          </button>
          <button
            onClick={() => handleSmoothScroll("programs")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none"
          >
            Programs
          </button>
          <button
            onClick={() => handleSmoothScroll("innovation")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none"
          >
            Innovation
          </button>
          <button
            onClick={() => handleSmoothScroll("placements")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none"
          >
            Placements
          </button>
          <button
            onClick={() => handleSmoothScroll("campus-life")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none"
          >
            Campus Life
          </button>
        </nav>

        {/* Apply Now Button */}
        <button
          onClick={() => handleSmoothScroll("apply")}
          className="bg-gradient-to-l from-yellow-400 to-orange-400 text-black font-semibold px-6 py-2 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all"
        >
          Apply Now 2025
        </button>
      </div>

      {/* Custom CSS for smooth zoom animation */}
      <style jsx>{`
        @keyframes pulse-zoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse-zoom {
          animation: pulse-zoom 2s ease-in-out infinite;
        }

        nav button {
          font-size: inherit;
          font-family: inherit;
          outline: none;
        }

        nav button:focus {
          outline: 2px solid rgba(255, 255, 255, 0.3);
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </header>
  );
};

export default Header;
