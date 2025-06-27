import amazon from "../assets/amazon.jpg";
import google from "../assets/google.svg";
import ibm from "../assets/IBM.png";
import microsoft from "../assets/microsoft.png";
import Infosys from "../assets/Infosys.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import High from "../assets/high.svg?react";
import Rate from "../assets/rate.svg?react";
import Comp from "../assets/comp.svg?react";
import viyash from "../assets/students/viyash.png";
import syed from "../assets/students/syed.png";
import jithesh from "../assets/students/jithesh.png";
import harine from "../assets/students/harine.png";
import gokul from "../assets/students/gokul.png";
import barath from "../assets/students/barath.png";
import abi from "../assets/students/abi.png";

const PlacementSection = () => {
  const topRecruiters = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Wipro",
  ];

  const studentTestimonials = [
    {
      name: "Sakilan R",
      course: "Computer Science",
      company: "Paypal Technologies",
      package: "18 LPA",
      testimonial:
        "SNSCT's design thinking approach and AI labs equipped me perfectly for my role in a leading fintech company.",
      initials: "SR",
    },
    {
      name: "Vimal S N",
      course: "Information Technology",
      company: "Deloitte",
      package: "15 LPA",
      testimonial:
        "The industry exposure and practical learning at SNSCT made my transition to the corporate world seamless.",
      initials: "VS",
    },
    {
      name: "Dhanushkan S",
      course: "Electronics & Communication",
      company: "Accenture",
      package: "12 LPA",
      testimonial:
        "SPINE facilities and project-based learning gave me the confidence to excel in technical interviews.",
      initials: "DS",
    },
  ];

  const studentPlacements = [
    {
      name: "VIYASH B",
      company: "SOBHA CONSTRUCTION - CORE",
      package: "13.5 LPA",
      image: viyash,
    },
    {
      name: "SYED ANWAR S",
      company: "SOBHA CONSTRUCTION LLC, DUBAI - CORE",
      package: "13.5 LPA",
      image: syed,
    },
    {
      name: "GOKULNATH V",
      company: "SOBHA CONSTRUCTION - CORE",
      package: "13.5 LPA",
      image: gokul,
    },
    {
      name: "JITHESH R JARO",
      company: "EDUCATION - MGMT",
      package: "10 LPA",
      image: jithesh,
    },
    {
      name: "BARATH M",
      company: "LAUNCHED GLOBAL - IT",
      package: "7 LPA",
      image: barath,
    },
    {
      name: "ABISHECK N",
      company: "LAUNCHED - IT",
      package: "8 LPA",
      image: abi,
    },
    {
      name: "HARINIE B  ",
      company: "INTELLIPAAT - ITES",
      package: "9 LPA",
      image: harine,
    },
  ];

  return (
    <>
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-20">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
              Placement <span className="text-red-400">Excellence</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              Our students are recruited by top global companies with
              industry-leading packages
            </p>
          </div>

          {/* Student Placements */}
          <div className="py-10">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="!pb-16"
            >
              {studentPlacements.map((student, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-800 relative flex justify-center border border-gray-700 rounded-[1.5rem] text-center p-2 pt-8 pb-3 z-10 shadow-lg h-full">
                    <div className="bg-red-500 w-full h-16 rounded-[1.5rem] absolute bottom-0 z-0" />
                    <div className="bg-gray-800 w-[98%] min-h-[25rem] rounded-[1.5rem] text-center p-6 pt-5 relative z-10">
                      <div className="flex justify-center mb-10">
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-white"
                        />
                      </div>
                      <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4">
                        {student.name}
                      </h3>
                      <p className="text-3xl sm:text-5xl font-bold mb-4">
                        <span className="text-red-500">
                          {student.package.split(" ")[0]}
                        </span>
                        <span className="text-white"> LPA</span>
                      </p>
                      <p className="text-gray-300 text-base sm:text-lg">
                        {student.company}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <High className="h-8 w-8 text-yellow-500" />,
                title: "21 LPA",
                subtitle: "Highest Package",
                desc: "Achieved by our Computer Science students in top tech companies",
              },
              {
                icon: <Rate className="h-8 w-8 text-yellow-500" />,
                title: "96.5%",
                subtitle: "Placement Rate",
                desc: "Industry-leading placement rate across all branches",
              },
              {
                icon: <Comp className="h-8 w-8 text-yellow-500" />,
                title: "454",
                subtitle: "Company Partners",
                desc: "Global tech giants and startups visit our college",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl border border-gray-700 p-6 sm:p-14 text-center"
              >
                <div className="bg-red-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl">
                    {stat.icon}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.title}
                </div>
                <div className="text-gray-300 font-semibold mb-2">
                  {stat.subtitle}
                </div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="bg-white text-center py-20 px-4 sm:px-6 lg:px-20">
        <h3 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-black">Top</span>{" "}
          <span className="text-red-600">Recruiters</span>
        </h3>

        <p className="text-gray-600 mb-12 text-base sm:text-lg max-w-3xl mx-auto">
          Our students are recruited by top global companies with
          industry-leading packages
        </p>

        <div className="relative overflow-x-hidden">
          {/* Left gradient */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Right gradient */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Logos */}
          <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8 sm:gap-x-20 sm:gap-y-12 relative z-0">
            {[amazon, google, ibm, microsoft, Infosys].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Company Logo"
                className={`object-contain
            ${
              i === 0
                ? "h-[70px] sm:h-[80px] md:h-[90px]" // Amazon
                : i === 1
                ? "h-[60px] sm:h-[70px] md:h-[80px]" // Google
                : i === 2
                ? "h-[70px] sm:h-[80px]" // IBM
                : i === 3
                ? "h-[80px] sm:h-[90px]" // Microsoft
                : i === 4
                ? "h-[60px] sm:h-[70px]" // Infosys
                : "h-[70px] sm:h-[80px]"
            }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
            Student <span className="text-red-400">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            5-level activity center with world-class facilities for sports,
            arts, entertainment, and personal growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentTestimonials.map((student, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 sm:p-8 w-full min-h-[18rem] flex flex-col justify-between border border-gray-700"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {student.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{student.name}</h4>
                    <p className="text-gray-400 text-md">{student.course}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-4 mt-10 italic">
                  "{student.testimonial}"
                </p>
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className="text-red-400 font-semibold">
                  {student.package}
                </span>
                <span className="text-gray-400 text-md">{student.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PlacementSection;
