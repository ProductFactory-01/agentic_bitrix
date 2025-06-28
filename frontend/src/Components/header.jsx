"use client";
import { useState } from "react";
import Logo from "../../src/assets/sns-DxCft4QP 1.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const handleApplyNow = () => {
    window.open("https://main.snsgroups.com/EnquiryNow/", "_blank");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-4 sm:px-6 py-4 fixed top-0 w-full shadow-lg z-50 backdrop-blur-md bg-transparent">
      <div className="flex items-center justify-between max-w-full mx-4 sm:mx-8 lg:mx-28">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="">
            <div className="flex items-center justify-center ">
              <img
                src={Logo || "/placeholder.svg"}
                alt=""
                className="w-10 h-10 sm:w-full sm:h-full"
              />
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold text-sm sm:text-lg">
              <span className="hidden sm:inline">
                SNS College of Technology
              </span>
              <span className="sm:hidden">
                SNS College of Technology <br />
              </span>
            </h1>
            <p className="text-white text-xs opacity-90  sm:block">
              Autonomous | NAAC A++ | NBA Accreditation
            </p>
          </div>
        </div>

        {/* TNEA Code with Animation - Hidden on mobile */}
        <div className="hidden lg:block bg-gradient-to-r from-[#FEF3C7] via-yellow-10 to-[#F59E0B] px-4 py-2 rounded-full animate-pulse-zoom shadow-md">
          <span className="text-amber-900 font-semibold text-sm flex items-center">
            <span className="mr-2 text-amber-800">⚙</span>
            TNEA Code: 2726
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
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

        {/* Desktop Apply Now Button */}
        <button
          onClick={handleApplyNow}
          className="hidden sm:block bg-gradient-to-l from-yellow-400 to-orange-400 text-black font-semibold px-4 lg:px-6 py-2 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all cursor-pointer text-sm lg:text-base"
        >
          <span className="hidden lg:inline">Apply Now 2025</span>
          <span className="lg:hidden">Apply</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-0.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* TNEA Code in Mobile Menu */}
          <div className="bg-gradient-to-r from-[#FEF3C7] via-yellow-10 to-[#F59E0B] px-4 py-2 rounded-full shadow-md mb-4">
            <span className="text-amber-900 font-semibold text-sm flex items-center justify-center">
              <span className="mr-2 text-amber-800">⚙</span>
              TNEA Code: 2726
            </span>
          </div>

          {/* Mobile Navigation Links */}
          <button
            onClick={() => handleSmoothScroll("home")}
            className="block w-full text-left text-white hover:text-yellow-200 transition-colors py-3 px-4 rounded-md hover:bg-white/10 bg-transparent border-none"
          >
            Home
          </button>
          <button
            onClick={() => handleSmoothScroll("programs")}
            className="block w-full text-left text-white hover:text-yellow-200 transition-colors py-3 px-4 rounded-md hover:bg-white/10 bg-transparent border-none"
          >
            Programs
          </button>
          <button
            onClick={() => handleSmoothScroll("innovation")}
            className="block w-full text-left text-white hover:text-yellow-200 transition-colors py-3 px-4 rounded-md hover:bg-white/10 bg-transparent border-none"
          >
            Innovation
          </button>
          <button
            onClick={() => handleSmoothScroll("placements")}
            className="block w-full text-left text-white hover:text-yellow-200 transition-colors py-3 px-4 rounded-md hover:bg-white/10 bg-transparent border-none"
          >
            Placements
          </button>
          <button
            onClick={() => handleSmoothScroll("campus-life")}
            className="block w-full text-left text-white hover:text-yellow-200 transition-colors py-3 px-4 rounded-md hover:bg-white/10 bg-transparent border-none"
          >
            Campus Life
          </button>

          {/* Mobile Apply Now Button */}
          <button
            onClick={handleApplyNow}
            className="w-full bg-gradient-to-l from-yellow-400 to-orange-400 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all cursor-pointer mt-4"
          >
            Apply Now 2025
          </button>
        </div>
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

        nav button,
        .mobile-nav button {
          font-size: inherit;
          font-family: inherit;
          outline: none;
        }

        nav button:focus,
        .mobile-nav button:focus {
          outline: 2px solid rgba(255, 255, 255, 0.3);
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </header>
  );
};

export default Header;
