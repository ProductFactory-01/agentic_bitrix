"use client";

import { useState, useEffect, useRef } from "react";
import Rocket from "../assets/Vector.png";

const HeroSection = () => {
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
    <section className="bg-red-500 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-black text-4xl font-bold md:text-7xl mb-3 mt-16 leading-tight">
          <span
            style={{
              background:
                "var(--Golden, linear-gradient(135deg, #FEF3C7 0%, #F59E0B 84.62%))",
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
        <div className="text-white text-lg mb-8 max-w-3xl mx-auto">
          <p>
            India's first institute to implement{" "}
            <span className="font-semibold">Design Thinking Framework</span> in
            education.
          </p>
          <p>
            Building <span className="font-semibold">1000 AI Startups</span>{" "}
            through revolutionary SPINE + iHub ecosystem.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="text-[#78350F] bg-gradient-to-l from-orange-400 to-yellow-400 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center cursor-pointer">
            <span className="mr-2">
              <img src={Rocket || "/placeholder.svg"} alt="" />
            </span>
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors flex items-center justify-center cursor-pointer">
            <span className="mr-2">▶</span>
            Watch Innovation Story
          </button>
        </div>

        {/* Statistics with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div ref={lpaRef}>
            <div
              className="text-5xl font-bold mb-2 transition-all duration-300"
              style={{
                background:
                  "var(--Golden, linear-gradient(135deg, #FEF3C7 0%, #F59E0B 84.62%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {lpaCount}+
            </div>
            <div className="text-sm opacity-90">LPA Highest Package</div>
          </div>

          <div ref={studentsRef}>
            <div
              className="text-5xl font-bold mb-2 transition-all duration-300"
              style={{
                background:
                  "var(--Golden, linear-gradient(135deg, #FEF3C7 0%, #F59E0B 84.62%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {studentsCount}+
            </div>
            <div className="text-sm opacity-90">Students Placed</div>
          </div>

          <div ref={companiesRef}>
            <div
              className="text-5xl font-bold mb-2 transition-all duration-300"
              style={{
                background:
                  "var(--Golden, linear-gradient(135deg, #FEF3C7 0%, #F59E0B 84.62%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {companiesCount}+
            </div>
            <div className="text-sm opacity-90">Company Partners</div>
          </div>

          <div ref={gradeRef}>
            <div
              className={`text-5xl font-bold mb-2 transition-all duration-1000 ${
                gradeVisible
                  ? "opacity-100 transform scale-100"
                  : "opacity-0 transform scale-75"
              }`}
              style={{
                background:
                  "var(--Golden, linear-gradient(135deg, #FEF3C7 0%, #F59E0B 84.62%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A++
            </div>
            <div className="text-sm opacity-90">NAAC Grade</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
