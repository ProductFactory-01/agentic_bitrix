"use client"

import { useState } from "react"

import Grauvate from "../assets/graduvate.png";
import Aerospace from "../assets/aerospace.png";
import Artificial from "../assets/artificial.png";
import Computer from "../assets/computer.png";
import IOT from "../assets/iot.png";
import Additive from "../assets/Additive manu.png";
import Agricultural from "../assets/Agri.png";
import Food from "../assets/food.png";
import Biomedical from "../assets/Biomedical.png";
import ComputerIcon from "../assets/comp.png";
import AIML from "../assets/aiml.png";
import Automobile from "../assets/auto.png";
import Compen from "../assets/compengineering.png";
import Empeded from "../assets/embededTech.png";
import Civil from "../assets/civil.png";
import ECE from "../assets/ECE.png";
import Structre from "../assets/strcture.png";
import Power from "../assets/power.png";
import Manufacturing from "../assets/manu.png";
import VLSI from "../assets/vlsi.png";
import MCT from "../assets/mct.png";
import IT from "../assets/IT.png";
import PG from "../assets/pg.png";
import PHD from "../assets/phd.png";
import MBA from "../assets/mba.png";
import MCA from "../assets/mca.png";
import MECS from "../assets/mecs.png";
import EEE from "../assets/eee.png";

const AcademicPrograms = () => {
  const [programType, setProgramType] = useState(null)

const ugPrograms = [
  {
    title: "Artificial Intelligence & Data Science",
    degree: "B.Tech. AIDS",
    description: "Focus on Machine Learning, Deep Learning, and Big Data Analytics.",
    duration: "4 Years",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    degree: "B.Tech. AIML",
    description: "Covers AI fundamentals, Deep Learning, and Natural Language Processing.",
    duration: "4 Years",
  },
  {
    title: "Computer Science and Engineering IoT with Cyber Security & Blockchain",
    degree: "B.E. CSE IoT/CS/Blockchain",
    description: "Combines core computer science with IoT, cyber security, and blockchain technologies.",
    duration: "4 Years",
  },
  {
    title: "Computer Science and Design",
    degree: "B.E. CSD",
    description: "UI/UX design, human-computer interaction, and creative computing.",
    duration: "4 Years",
  },
  {
    title: "AeroSpace Engineering",
    degree: "B.E. AERO",
    description: "Study of aerodynamics, propulsion, aircraft structures, and avionics.",
    duration: "4 Years",
  },
  {
    title: "Bio-Medical Engineering",
    degree: "B.E. BME",
    description: "Focus on medical devices, biomedical signal processing, and imaging technologies.",
    duration: "4 Years",
  },
  {
    title: "Food Technology",
    degree: "B.Tech. FT",
    description: "Emphasis on food processing, quality control, and food safety management.",
    duration: "4 Years",
  },
  {
    title: "Agricultural Engineering",
    degree: "B.E. AGRI",
    description: "Specialization in farm machinery, soil & water conservation, and food processing.",
    duration: "4 Years",
  },
  {
    title: "Mechanical and Mechatronics ( Additive Manufacturing)",
    degree: "B.E. MECH/MCT/AM",
    description: "Combines thermal engineering, robotics, automation, and additive manufacturing.",
    duration: "4 Years",
  },
];

const pgPrograms = [
  {
    title: "Computer Science and Engineering",
    degree: "B.E. CSE",
    description: "Advanced computer science topics, software engineering, and data structures & algorithms.",
    duration: "2 Years",
  },
  {
    title: "Information Technology",
    degree: "B.E. IT",
    description: "Software development, web technologies, and database management.",
    duration: "2 Years",
  },
  {
    title: "Computer Science and Technology",
    degree: "B.E. CST",
    description: "Core computer science, advanced software engineering, and data analytics.",
    duration: "2 Years",
  },
];

  const phdPrograms = [
    {
      title: "Automobile Engineering",
      degree: "B.E. AUTO",
      description: "Vehicle Design, Automotive Systems Design",
      duration: "4 Years",
    },
    {
      title: "Civil Engineering",
      degree: "B.E. CIVIL",
      description: "Structural Engineering, Environmental Engineering",
      duration: "4 Years",
    },
    {
      title: "Electronics and Communication Engineering",
      degree: "B.E. ECE",
      description: "VLSI Design, Embedded Systems, Signal Processing",
      duration: "4 Years",
    },
    {
      title: "Electrical and Electronics Engineering",
      degree: "B.E. EEE",
      description: "Power Systems, Control Systems, Electronics Design",
      duration: "4 Years",
    },
    {
      title: "Mechatronics Engineering",
      degree: "B.E. MCT",
      description: "Robotics, Automation, Intelligent Systems",
      duration: "4 Years",
    },
    {
      title: "Mechanical Engineering",
      degree: "B.E. MECH",
      description: "Thermal Engineering, Manufacturing, CAD/CAM Design",
      duration: "4 Years",
    },
  ]

  const PgflPrograms = [
    {
      title: "Master of Computer Applications",
      degree: "MCA",
      description: "Advanced Programming, Software Engineering, AI/ML Applications",
      duration: " 2 Years",
    },
    {
      title: "Master of Business Administration",
      degree: "MBA",
      description: "Leadership, Strategy, Digital Business, Entrepreneurship",
      duration: " 2 Years",
    },
    {
      title: "M.E. Computer Science",
      degree: "M.E. CSE",
      description: "Advanced Algorithms, Research, Machine Learning",
      duration: " 2 Years",
    },
    {
      title: "Power System and Engineering",
      degree: "M.E. PSE",
      description: "Power Systems, Smart Grids, Renewable Energy",
      duration: "2 Years",
    },
    {
      title: "Structural Engineering",
      degree: "M.E. SE",
      description: "Advanced Structural Design, Earthquake Engineering",
      duration: "2 Years",
    },
    {
      title: "Thermal Engineering",
      degree: "M.E. THERMAL",
      description: "Heat Transfer, Thermodynamics, Energy Systems",
      duration: "2 Years",
    },
    {
      title: "VLSI Design",
      degree: "M.E. VLSI",
      description: "VLSI Design, Embedded Systems, Signal Processing",
      duration: "2 Years",
    },
    {
      title: "Embedded System Technologies",
      degree: "M.E. EST",
      description: "Embedded Systems, IoT, Real-Time Systems",
      duration: "2 Years",
    },
    {
      title: "Manufacturing Engineering",
      degree: "M.E. MFG",
      description: "Advanced Manufacturing, Automation, Quality Engineering",
      duration: "2 Years",
    },
  ]

  const PhdflPrograms = [
    {
      title: "PhD in Computer Science",
      degree: "Ph.D. CSE",
      description: "AI/ML Research, Advanced Algorithms, Quantum Computing",
      duration: "3-5 Years",
    },
    {
      title: "PhD in Civil Engineering",
      degree: "Ph.D. CIVIL",
      description: "Structural Engineering, Smart Cities, Environmental Engineering",
      duration: "3-5 Years",
    },
    {
      title: "PhD in Electronics",
      degree: "Ph.D. ECE",
      description: "VLSI Design, Nanotechnology, Communication Systems",
      duration: "3-5 Years",
    },
    {
      title: "PhD in Electrical",
      degree: "Ph.D. EEE",
      description: "Renewable Energy, Smart Grids, Power Electronics",
      duration: "3-5 Years",
    },
    {
      title: "PhD in Mechanical",
      degree: "Ph.D. MECH",
      description: "Advanced Materials, Robotics, Energy Systems",
      duration: "3-5 Years",
    },
  ]

  const programIcons = {
    "AeroSpace Engineering": (
      <img src={Aerospace || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />
    ),
    "Artificial Intelligence & Data Science": (
      <img src={Artificial || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />
    ),
    "Computer Science and Technology": (
      <img src={Computer || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />
    ),
    "IoT with Cyber Security & Blockchain": (
      <img src={IOT || "/placeholder.svg"} alt="Iot Icon" className="w-10 h-10 mr-0" />
    ),
    "Additive Manufacturing": (
      <img src={Additive || "/placeholder.svg"} alt="Additive Icon" className="w-10 h-10 mr-0" />
    ),
    "Agricultural Engineering": (
      <img src={Agricultural || "/placeholder.svg"} alt="Agricultural Icon" className="w-10 h-10 mr-0" />
    ),
    "Food Technology": <img src={Food || "/placeholder.svg"} alt="food Icon" className="w-10 h-10 mr-0" />,
    "Bio-Medical Engineering": (
      <img src={Biomedical || "/placeholder.svg"} alt="Biomedical Icon" className="w-10 h-10 mr-0" />
    ),
    "Computer Science and Design": (
      <img src={ComputerIcon || "/placeholder.svg"} alt="computer Icon" className="w-10 h-10 mr-0" />
    ),
    "Artificial Intelligence & Machine Learning": (
      <img src={AIML || "/placeholder.svg"} alt="AIML Icon" className="w-10 h-10 mr-0" />
    ),
    "Automobile Engineering": (
      <img src={Automobile || "/placeholder.svg"} alt="automobile Icon" className="w-10 h-10 mr-0" />
    ),
    "Computer Science and Engineering IoT with Cyber Security & Blockchain": (
      <img src={Compen || "/placeholder.svg"} alt="computer science Icon" className="w-10 h-10 mr-0" />
    ),
    "Civil Engineering": <img src={Civil || "/placeholder.svg"} alt="civil Icon" className="w-10 h-10 mr-0" />,
    "Electronics and Communication Engineering": (
      <img src={ECE || "/placeholder.svg"} alt="ece Icon" className="w-10 h-10 mr-0" />
    ),
    "Electrical and Electronics Engineering": (
      <img src={ECE || "/placeholder.svg"} alt="ece Icon" className="w-10 h-10 mr-0" />
    ),
    "Information Technology": <img src={IT || "/placeholder.svg"} alt="it Icon" className="w-10 h-10 mr-0" />,
    "Mechanical and Mechatronics ( Additive Manufacturing)": (
      <img src={Manufacturing || "/placeholder.svg"} alt="Manu Icon" className="w-10 h-10 mr-0" />
    ),
    "Mechatronics Engineering": <img src={MCT || "/placeholder.svg"} alt="MCT Icon" className="w-10 h-10 mr-0" />,
    "Embedded System Technologies": (
      <img src={Empeded || "/placeholder.svg"} alt="embeded Icon" className="w-10 h-10 mr-0" />
    ),
    "Manufacturing Engineering": (
      <img src={Manufacturing || "/placeholder.svg"} alt="Manu Icon" className="w-10 h-10 mr-0" />
    ),
    "Power System and Engineering": (
      <img src={Power || "/placeholder.svg"} alt="power Icon" className="w-10 h-10 mr-0" />
    ),
    "Structural Engineering": (
      <img src={Structre || "/placeholder.svg"} alt="structural Icon" className="w-10 h-10 mr-0" />
    ),
    "Computer Science and Engineering": <img src={MCA || "/placeholder.svg"} alt="mca Icon" className="w-10 h-10 mr-0" />,
    "Thermal Engineering": <img src={VLSI || "/placeholder.svg"} alt="vlsi Icon" className="w-10 h-10 mr-0" />,
    "VLSI Design": <img src={ComputerIcon || "/placeholder.svg"} alt="computer Icon" className="w-10 h-10 mr-0" />,
    "Master of Business Administration": <img src={MBA || "/placeholder.svg"} alt="computer Icon" className="w-10 h-10 mr-0" />,
    "Master of Computer Applications": <img src={MCA || "/placeholder.svg"} alt="computer Icon" className="w-10 h-10 mr-0" />,
    "M.E. Computer Science": <img src={MECS || "/placeholder.svg"} alt="computer Icon" className="w-10 h-10 mr-0" />,
    "PhD in Computer Science": <img src={ComputerIcon || "/placeholder.svg"} alt="computer Icon" className="w-10 h-10 mr-0" />,
    "PhD in Civil Engineering": <img src={Civil || "/placeholder.svg"} alt="civil Icon" className="w-10 h-10 mr-0" />,
    "PhD in Electronics": <img src={ECE || "/placeholder.svg"} alt="ece Icon" className="w-10 h-10 mr-0" />,
    "PhD in Electrical": <img src={EEE || "/placeholder.svg"} alt="ece Icon" className="w-10 h-10 mr-0" />,
    "PhD in Mechanical": <img src={Manufacturing || "/placeholder.svg"} alt="Manu Icon" className="w-10 h-10 mr-0" />,
    "Mechanical Engineering": <img src={Manufacturing || "/placeholder.svg"} alt="computer Icon" className="w-10 h-10 mr-0" />,
  }

  const ProgramCard = ({ program }) => {
    // Determine if title is likely to fit on one line (rough estimation based on character count)
    const titleFitsOnOneLine = program.title.length <= 25;

    return (
      <div className="bg-gray-800 rounded-3xl p-6 hover:bg-gray-700 transition-colors">
        <div className="flex items-start mb-4">
          <div className="rounded-full p-2 mr-3 flex-shrink-0">
            <span className="text-white text-sm object-cover">{programIcons[program.title] || "🎓"}</span>
          </div>
          <div className="flex-1 min-w-0">
            {titleFitsOnOneLine ? (
              // Title fits on one line - degree goes below
              <div>
                <h3 className="text-white font-semibold text-lg leading-tight mb-1">{program.title}</h3>
                <span className="text-red-400 font-medium text-sm">{program.degree}</span>
              </div>
            ) : (
              // Title wraps - degree goes next to title
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-white font-semibold text-lg leading-tight">{program.title}</h3>
                <span className="text-red-400 font-medium text-sm whitespace-nowrap">{program.degree}</span>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-300 text-sm mb-4">{program.description}</p>
        <div className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-xs font-medium rounded-lg">
          <span>{program.duration}</span>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-gray-900 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="text-red-600">Programs</span>
          </h2>
          <p className="text-white opacity-80 max-w-3xl mx-auto">
            Choose from <span className="text-white font-bold">18 comprehensive programs</span> designed to shape future
            innovators and leaders in various fields.
          </p>
        </div>

        {/* UG Programs */}
        {(programType === "UG" || programType === null) && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <img src={Grauvate || "/placeholder.svg"} alt="UG Icon" className="w-8 h-8 mr-3" />
              <h3 className="text-white text-2xl font-bold ">
               9 Undergraduate Programs <span className="text-red-400">(Trending/Unique)</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ugPrograms.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </div>
        )}

        {/* PG Programs */}
        {(programType === "PG" || programType === null) && (
          <div className="mb-16">
      {/* Mobile View - Stacked Layout */}
      <div className="flex flex-col items-center justify-center mb-8 md:hidden">
        <div className="flex items-center mb-2">
          <img src={Grauvate || "/placeholder.svg"} alt="UG Icon" className="w-8 h-8 mr-3" />
          <h3 className="text-white text-2xl font-bold">3 Undergraduate Programs</h3>
        </div>
        <span className="text-red-400 text-2xl font-bold">(Hot & Fast Moving)</span>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden md:flex items-center justify-center mb-8">
        <img src={Grauvate || "/placeholder.svg"} alt="UG Icon" className="w-8 h-8 mr-3" />
        <h3 className="text-white text-2xl font-bold">
          3 Undergraduate Programs <span className="text-red-400">(Hot & Fast Moving)</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pgPrograms.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
        )}

        {/* PhD Programs */}
        {(programType === "PhD" || programType === null) && (
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <img src={Grauvate || "/placeholder.svg"} alt="UG Icon" className="w-8 h-8 mr-3" />
              <h3 className="text-white text-2xl font-bold">
               6 Undergraduate Programs <span className="text-red-400">(Evergreen)</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdPrograms.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </div>
        )}

        {/* Postgraduate Programs */}
        {(programType === "Pgfl" || programType === null) && (
          <div className="mb-16">
      {/* Mobile View - Stacked Layout */}
      <div className="flex flex-col items-center justify-center mb-8 md:hidden">
        <div className="flex items-center mb-2">
          <img src={PG || "/placeholder.svg"} alt="PG Icon" className="w-8 h-8 mr-3" />
          <h3 className="text-white text-2xl font-bold">Postgraduate Programs</h3>
        </div>
        <span className="text-red-400 text-2xl font-bold">(9 Programs)</span>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden md:flex items-center justify-center mb-8">
        <img src={PG || "/placeholder.svg"} alt="PG Icon" className="w-8 h-8 mr-3" />
        <h3 className="text-white text-2xl font-bold">
          Postgraduate Programs <span className="text-red-400">(9 Programs)</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PgflPrograms.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
        )}

        {/* Research Programs */}
        {(programType === "Phdfl" || programType === null) && (
             <div>
      {/* Mobile View - Stacked Layout */}
      <div className="flex flex-col items-center justify-center mb-8 md:hidden">
        <div className="flex items-center mb-2">
          <img src={PHD || "/placeholder.svg"} alt="PHD Icon" className="w-8 h-8 mr-3" />
          <h3 className="text-white text-2xl font-bold">Research Programs</h3>
        </div>
        <span className="text-red-400 text-2xl font-bold">(5 Programs)</span>
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden md:flex items-center justify-center mb-8">
        <img src={PHD || "/placeholder.svg"} alt="PHD Icon" className="w-8 h-8 mr-3" />
        <h3 className="text-white text-2xl font-bold">
          Research Programs <span className="text-red-400">(5 Programs)</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PhdflPrograms.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
        )}
      </div>
    </section>
  )
}

export default AcademicPrograms