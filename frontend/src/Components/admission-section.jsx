import { useState, useEffect, useRef } from "react";
import admission from "../assets/admission.jpg";
import Call from "../assets/svg.png";
import Write from "../assets/svg (1).png";
import Mark from "../assets/cvm.png";

const handleApplyNow = () => {
  window.open("https://main.snsgroups.com/EnquiryNow/", "_blank");
};

const AdmissionSection = () => {
  // State to track cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // Ref to access the section element
  const sectionRef = useRef(null);

  // Effect to handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate cursor position relative to the section
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

  return (
    <section ref={sectionRef} className="bg-red-600 py-14 px-6 relative overflow-hidden">
      {/* Background Image Overlay */}
      <img
        src={admission}
        alt="Admission"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* Background Decorative Bubble Following Cursor */}
      <div
        className="absolute w-46 h-46 bg-red-200 rounded-full opacity-20 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${cursorPosition.x - 92}px, ${cursorPosition.y - 92}px)`,
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-white text-5xl font-semibold mb-6">
          Admission <span className="text-yellow-300 text-6xl font-extralight">2025</span>
        </h2>

        <p className="text-white opacity-90 text-lg mb-8 leading-relaxed">
          Join India's most innovative engineering college. Limited seats
          available for <span className="font-semibold">18 UG Programs</span>,{" "}
          <span className="font-semibold">10 PG Programs</span>,
          <span className="text-white opacity-90"> and </span>
          <span className="font-semibold">5 PhD Programs</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+917550316701"
            className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold cursor-pointer transition-colors flex items-center justify-center"
          >
            <img src={Call} alt="Call Icon" className="w-4 h-4 mr-2" />
            Call : +91 75503 16701
          </a>
          <button
            onClick={handleApplyNow}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center cursor-pointer"
          >
            <img src={Write} alt="" className="w-4 h-4 mr-2" />
            Apply Online Now
          </button>
        </div>

        {/* Scholarship Banner */}
        <div className="bg-transparent rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4 border border-white/30 bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <img src={Mark} alt="" className="w-5 h-full mr-2" />
            <h3 className="text-white text-xl font-medium">
              ₹70+ Lakh Scholarships Available
            </h3>
          </div>
          <p className="text-white text-sm">
            Merit-based scholarships, work-while-learn programs, and financial
            aid for deserving students
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;