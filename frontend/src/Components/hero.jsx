"use client";

import { useState, useEffect, useRef } from "react";
import Rocket from "../assets/Vector (1).png";
import herobg from "../assets/herobg.svg";
import Playbtn from "../assets/play.png"

const HeroSection = () => {
  // State for parallax background effect
  const [scrollY, setScrollY] = useState(0);
  // State to track cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // Ref to access the hero section element
  const heroRef = useRef(null);

  // Handle scroll for hero background parallax with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Calculate cursor position relative to the hero section
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursorPosition({ x, y });
      }
    };

    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Custom hook for animated counter
  const useAnimatedCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 }
      );

      if (countRef.current) {
        observer.observe(countRef.current);
      }

      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible) return;

      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - start) + start);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration, start]);

    return [count, countRef];
  };

  // Animated counters for each statistic
  const [lpaCount, lpaRef] = useAnimatedCounter(21, 2000);
  const [studentsCount, studentsRef] = useAnimatedCounter(1645, 2500);
  const [companiesCount, companiesRef] = useAnimatedCounter(454, 2200);
  const [gradeVisible, setGradeVisible] = useState(false);
  const gradeRef = useRef(null);

  // Handle A++ animation separately
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setGradeVisible(true), 500); // Delay for A++ appearance
        }
      },
      { threshold: 0.3 }
    );

    if (gradeRef.current) {
      observer.observe(gradeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero-sticky bg-red-600 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center">
      {/* Background Decorative Bubble Following Cursor */}
      <div
        className="absolute w-48 h-48 bg-white rounded-full opacity-15 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          transform: `translate(${cursorPosition.x - 100}px, ${cursorPosition.y - 400}px)`,
        }}
      ></div>
      
      {/* Background image with parallax */}
      <img
        src={herobg || "/placeholder.svg"}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl  font-bold mb-4 sm:mb-6 xl:mb-8 mt-8 sm:mt-12 md:mt-16 leading-tight">
          <span
            style={{
              background: "white",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Redesigning
          </span>
          <br />
          Common Minds
        </h1>

        {/* Description */}
        <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 xl:mb-10 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center px-2 sm:px-4">
          <p className="mb-2 sm:mb-3 md:mb-4">
            <span className="text-white opacity-90">
              India's first institute to implement{" "}
            </span>
            <span className="font-bold text-white">
              Design Thinking Framework
            </span>
            <span className="text-white opacity-90"> in education.</span>
          </p>
          <p>
            <span className="text-white opacity-90">Building </span>
            <span className="font-bold text-white">1000 AI Startups</span>
            <span className="text-white opacity-90">
              {" "}
              through revolutionary SPINE + iHub ecosystem.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-12 xl:mb-20 px-4 sm:px-0">
          <button className="text-black bg-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center cursor-pointer text-sm sm:text-base md:text-lg">
            <span className="mr-2 flex-shrink-0">
              <img
                src={Rocket || "/placeholder.svg"}
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </span>
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-300 hover:text-red-500 transition-colors flex items-center justify-center cursor-pointer text-sm sm:text-base md:text-lg">
            {/* <span className="mr-2">▶</span> */}
            <img src={Playbtn} alt="play-btn" className="w-4 h-5 mr-2" />
            Watch Innovation Story
          </button>
        </div>

        {/* Statistics with Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white px-2 sm:px-4">
          <div ref={lpaRef} className="text-center">
            <div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 transition-all duration-300"
              style={{
                background: "white",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {lpaCount}+
            </div>
            <div className="text-xs sm:text-sm md:text-base opacity-90 leading-tight">
              LPA Highest Package
            </div>
          </div>

          <div ref={studentsRef} className="text-center">
            <div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 transition-all duration-300"
              style={{
                background: "white",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {studentsCount}+
            </div>
            <div className="text-xs sm:text-sm md:text-base opacity-90 leading-tight">
              Students Placed
            </div>
          </div>

          <div ref={companiesRef} className="text-center">
            <div
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 transition-all duration-300"
              style={{
                background: "white",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {companiesCount}+
            </div>
            <div className="text-xs sm:text-sm md:text-base opacity-90 leading-tight">
              Company Partners
            </div>
          </div>

          <div ref={gradeRef} className="text-center">
            <div
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 transition-all duration-1000 ${gradeVisible
                  ? "opacity-100 transform scale-100"
                  : "opacity-0 transform scale-75"
                }`}
              style={{
                background: "white",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A++
            </div>
            <div className="text-xs sm:text-sm md:text-base opacity-90 leading-tight">
              NAAC Grade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
