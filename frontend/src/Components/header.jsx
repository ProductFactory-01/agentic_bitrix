"use client";
import { useState } from "react";
import Logo from "../../src/assets/snslogo.png";

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
      <div className="flex items-center justify-between max-w-full mx-4 sm:mx-8 lg:mx-12 xl:mx-28 header-container">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 lg:space-x-2 xl:space-x-3 logo-section">
          <div className="">
            <div className="flex items-center justify-center">
              <img
                src={Logo || "/placeholder.svg"}
                alt=""
                className=" object-cover w-full h-full sm:w-full sm:h-full lg:w-full lg:h-full xl:w-full xl:h-full"
              />
            </div>
          </div>
          <div className="logo-text-section">
            <h1 className="text-white font-bold text-sm sm:text-lg lg:text-sm xl:text-lg">
              <span className="hidden sm:inline">
                SNS College of Technology
              </span>
              <span className="sm:hidden">
                SNS College of Technology <br />
              </span>
            </h1>
            <p className="text-white text-xs lg:text-[10px] xl:text-sm opacity-90 sm:block">
              Autonomous | NAAC A++ | NBA Accreditation
            </p>
            <div className="lg:hidden bg-gradient-to-r from-[#FEF3C7] via-yellow-100 to-[#F59E0B] px-2 py-1 rounded-full shadow-md mb-0 w-fit">
              <span className="text-amber-900 font-semibold text-[10px] flex items-center justify-center">
                <span className="mr-1 text-amber-800">⚙</span>
                TNEA Code: 2726
              </span>
            </div>
            {/* TNEA Code for laptop view - positioned under logo */}
            <div className="hidden bg-gradient-to-r from-[#FEF3C7] via-yellow-100 to-[#F59E0B] px-2 py-1 rounded-full animate-pulse-zoom shadow-md mt-1 w-fit tnea-badge-under-logo">
              <span className="text-amber-900 font-semibold text-[10px] flex items-center">
                <span className="mr-1 text-amber-800">⚙</span>
                TNEA Code: 2726
              </span>
            </div>
          </div>
        </div>

        {/* TNEA Code with Animation - Hidden on mobile, optimized for laptop */}
        <div className="hidden lg:block bg-gradient-to-r from-[#FEF3C7] via-yellow-100 to-[#F59E0B] px-2 lg:px-2 xl:px-4 py-1 lg:py-1 xl:py-2 rounded-full animate-pulse-zoom shadow-md tnea-badge">
          <span className="text-amber-900 font-semibold text-sm lg:text-[10px] xl:text-sm flex items-center">
            <span className="mr-2 lg:mr-1 xl:mr-2 text-amber-800">⚙</span>
            TNEA Code: 2726
          </span>
        </div>

        {/* Right Section - Navigation and Apply Button */}
        <div className="flex items-center space-x-6 lg:space-x-4 xl:space-x-6 right-section">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 lg:space-x-2 xl:space-x-8 desktop-nav">
          <button
            onClick={() => handleSmoothScroll("home")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none lg:text-xs xl:text-base font-medium whitespace-nowrap"
          >
            Home
          </button>
          <button
            onClick={() => handleSmoothScroll("programs")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none lg:text-xs xl:text-base font-medium whitespace-nowrap"
          >
            Programs
          </button>
          <button
            onClick={() => handleSmoothScroll("innovation")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none lg:text-xs xl:text-base font-medium whitespace-nowrap"
          >
            Innovation
          </button>
          <button
            onClick={() => handleSmoothScroll("placements")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none lg:text-xs xl:text-base font-medium whitespace-nowrap"
          >
            Placements
          </button>
          <button
            onClick={() => handleSmoothScroll("campus-life")}
            className="text-white hover:text-yellow-200 transition-colors cursor-pointer bg-transparent border-none lg:text-xs xl:text-base font-medium whitespace-nowrap"
          >
            Campus Life
          </button>          </nav>

          {/* Desktop Apply Now Button */}
          <button
            onClick={handleApplyNow}
            className="hidden sm:block bg-gradient-to-l from-yellow-400 to-orange-400 text-black font-semibold px-4 lg:px-3 xl:px-6 py-2 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all cursor-pointer text-sm lg:text-xs xl:text-base apply-button"
          >
            <span className="apply-full-text">Apply Now 2025</span>
            <span className="apply-short-text hidden">Apply Now 2025</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen
                ? "rotate-45 translate-y-1"
                : "-translate-y-0.5"
                }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen
                ? "-rotate-45 -translate-y-1"
                : "translate-y-0.5"
                }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* TNEA Code in Mobile Menu */}


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

        /* Laptop View Only Styles (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1540px) {
          /* Main container adjustments */
          .header-container {
            margin-left: 3rem !important; /* lg:mx-12 */
            margin-right: 3rem !important;
            gap: 1rem;
          }

          /* Logo section */
          .logo-section {
            max-width: 350px;
            flex-shrink: 0;
          }

          .logo-section img {
            width: 4.5rem !important; /* 44px */
            height: 2.75rem !important;
          }

          .logo-section h1 {
            font-size: 0.875rem !important; /* 14px */
            line-height: 1.25rem !important;
          }

          .logo-section p {
            font-size: 0.625rem !important; /* 10px */
          }

          /* Hide original TNEA badge for laptop view */
          .tnea-badge {
            display: none !important;
          }

          /* Show TNEA badge under logo for laptop view */
          .tnea-badge-under-logo {
            display: block !important;
            padding-left: 0.5rem !important; /* 8px */
            padding-right: 1.5rem !important;
            padding-top: 0.25rem !important; /* 4px */
            padding-bottom: 0.25rem !important;
            border-radius: 16px !important;
            margin-top: 0.25rem !important; /* 4px */
          }

          .tnea-badge-under-logo span {
            font-size: 0.625rem !important; /* 10px */
          }

          /* Navigation */
          .desktop-nav {
            gap: 0.75rem !important; /* 12px between items */
          }

          .desktop-nav button {
            font-size: 0.875rem !important; /* 14px */
            font-weight: 500 !important;
          }

          /* Apply Now Button */
          .apply-button {
            padding-left: 1rem !important; /* 16px */
            padding-right: 1rem !important;
            font-size: 0.875rem !important; /* 14px */
          }

          /* Hide "Apply Now 2025" and show "Apply" for laptop view */
          .apply-button .apply-full-text {
            display: none !important;
          }

          .apply-button .apply-short-text {
            display: inline !important;
          }

          /* Right section container */
          .right-section {
            gap: 1rem !important; /* 16px */
            flex-shrink: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;