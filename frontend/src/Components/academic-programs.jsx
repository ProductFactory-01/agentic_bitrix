import React, { useState } from "react";
import Grauvate from "../assets/graduvate.png";
import Aerospace from "../assets/aerospace.png";
import Artificial from "../assets/artificial.png";
import Computer from "../assets/computer.png";
import IOT from "../assets/iot.png";
import Additive from "../assets/Additive manu.png";
import Agricultural from "../assets/Agri.png";
const AcademicPrograms = () => {
  // Add state for UG program visibility
  const [showAllUG, setShowAllUG] = useState(false);
  // Change filter: no default selection
  const [programType, setProgramType] = useState(null);

  const ugPrograms = [
    {
      title: "AeroSpace Engineering",
      description: "Aerodynamics, Propulsion, Aircraft Structures, Avionics",
      duration: "4 Years",
    },
    {
      title: "Artificial Intelligence & Data Science",
      description: "Machine Learning, Deep Learning, Big Data Analytics",
      duration: "4 Years",
    },
    {
      title: "Computer Science and Technology",
      description: "Core Computer Science, Software Engineering, Data Structures & Algorithms",
      duration: "4 Years",
    },
    {
      title: "IoT with Cyber Security & Blockchain",
      description: "Internet of Things, Cyber Security, Blockchain Technologies",
      duration: "4 Years",
    },
    {
      title: "Additive Manufacturing",
      description: "3D Printing, Advanced Manufacturing, CAD/CAM Design",
      duration: "4 Years",
    },
    {
      title: "Agricultural Engineering",
      description: "Farm Machinery, Soil & Water Conservation, Food Processing",
      duration: "4 Years",
    },
    {
      title: "Food Technology",
      description: "Food Processing, Quality Control, Food Safety",
      duration: "4 Years",
    },
    {
      title: "Bio-Medical Engineering",
      description: "Medical Devices, Biomedical Signal Processing, Imaging",
      duration: "4 Years",
    },
    {
      title: "Computer Science and Design",
      description: "UI/UX Design, Human-Computer Interaction, Creative Computing",
      duration: "4 Years",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "AI Fundamentals, Deep Learning, Natural Language Processing",
      duration: "4 Years",
    },
    {
      title: "Automobile Engineering",
      description: "Vehicle Design, Automotive Systems Design",
      duration: "4 Years",
    },
    {
      title: "Computer Science and Engineering",
      description: "Core Computer Science, Software Engineering, Data Structures & Algorithms",
      duration: "4 Years",
    },
    {
      title: "Civil Engineering",
      description: "Structural Engineering, Environmental Engineering",
      duration: "4 Years",
    },
    {
      title: "Electronics and Communication Engineering",
      description: "VLSI Design, Embedded Systems, Signal Processing",
      duration: "4 Years",
    },
    {
      title: "Electrical and Electronics Engineering",
      description: "Power Systems, Control Systems, Electronics Design",
      duration: "4 Years",
    },
    {
      title: "Information Technology",
      description: "Software Development, Web Technologies, Database Management",
      duration: "4 Years",
    },
    {
      title: "Mechanical Engineering",
      description: "Thermal Engineering, Manufacturing, CAD/CAM Design",
      duration: "4 Years",
    },
    {
      title: "Mechatronics Engineering",
      description: "Robotics, Automation, Intelligent Systems",
      duration: "4 Years",
    },
  ]

  const pgPrograms = [
    {
      title: "Computer Science and Engineering",
      description: "Advanced Algorithms, Machine Learning, Research Methodology",
      duration: "2 Years",
    },
    {
      title: "Embedded System Technologies",
      description: "Embedded Systems, IoT, Real-Time Systems",
      duration: "2 Years",
    },
    {
      title: "Manufacturing Engineering",
      description: "Advanced Manufacturing, Automation, Quality Engineering",
      duration: "2 Years",
    },
    {
      title: "Power System and Engineering",
      description: "Power Systems, Smart Grids, Renewable Energy",
      duration: "2 Years",
    },
    {
      title: "Structural Engineering",
      description: "Advanced Structural Design, Earthquake Engineering",
      duration: "2 Years",
    },
    {
      title: "Thermal Engineering",
      description: "Heat Transfer, Thermodynamics, Energy Systems",
      duration: "2 Years",
    },
    {
      title: "VLSI Design",
      description: "VLSI Design, Embedded Systems, Signal Processing",
      duration: "2 Years",
    },
  ]

  const phdPrograms = [
    {
      title: "Computer Science and Engineering",
      description: "AI/ML Research, Advanced Algorithms, Quantum Computing",
      duration: "3-5 Years",
    },
    {
      title: "Civil Engineering",
      description: "Structural Engineering, Smart Cities, Environmental Engineering",
      duration: "3-5 Years",
    },
    {
      title: "Electronics and Communication Engineering",
      description: "VLSI Design, Nanotechnology, Communication Systems",
      duration: "3-5 Years",
    },
    {
      title: "Electrical and Electronics Engineering",
      description: "Renewable Energy, Smart Grids, Power Electronics",
      duration: "3-5 Years",
    },
    {
      title: "Mechanical Engineering",
      description: "Advanced Materials, Robotics, Energy Systems",
      duration: "3-5 Years",
    },
  ]

const programIcons = {
  'AeroSpace Engineering': <img src={Aerospace || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />,
  'Artificial Intelligence & Data Science': <img src={Artificial || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />,
  'Computer Science and Technology': <img src={Computer || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />,
  'IoT with Cyber Security & Blockchain': <img src={IOT || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />,
  'Additive Manufacturing': <img src={Additive || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />,
  'Agricultural Engineering': <img src={Agricultural || "/placeholder.svg"} alt="Aerospace Icon" className="w-10 h-10 mr-0" />,
  'Food Technology': '🍎',
  'Bio-Medical Engineering': '🧬',
  'Computer Science and Design': '🎨',
  'Artificial Intelligence & Machine Learning': '🧠',
  'Automobile Engineering': '🚗',
  'Computer Science and Engineering': '🖥️',
  'Civil Engineering': '🏗️',
  'Electronics and Communication Engineering': '📡',
  'Electrical and Electronics Engineering': '⚡',
  'Information Technology': '🌐',
  'Mechanical Engineering': '⚙️',
  'Mechatronics Engineering': '🤖',
  'Embedded System Technologies': '🔌',
  'Manufacturing Engineering': '🏭',
  'Power System and Engineering': '🔋',
  'Structural Engineering': '🏢',
  'Thermal Engineering': '🔥',
  'VLSI Design': '💾',
};

  const ProgramCard = ({ program }) => (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <div className="flex items-center mb-4">
        <div className=" rounded-full p-2 mr-1">
          <span className="text-white text-sm">{programIcons[program.title] || '🎓'}</span>
        </div>
        <h3 className="text-white font-semibold text-lg mb-0">{program.title}</h3>
      </div>
      <p className="text-gray-300 text-sm mb-4">{program.description}</p>
      <div className="flex justify-between items-center text-xs">
        <span className="text-gray-400">{program.duration}</span>
      </div>
    </div>
  )

  // Split UG programs for initial/extra display
  const initialUGPrograms = ugPrograms.slice(0, 9);
  const extraUGPrograms = ugPrograms.slice(9);

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5">
          <h2 className="text-white text-4xl font-bold mb-4">Academic Programs</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose from <span className="text-red-400">18 comprehensive programs</span> designed to shape future
            innovators and leaders in various fields.
          </p>
        </div>

        {/* Program Type Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full cursor-pointer font-semibold ${programType === 'UG' ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-red-500 transition-colors'}`}
            onClick={() => setProgramType(programType === 'UG' ? null : 'UG')}
          >
            UG Programs
          </button>
          <button
            className={`px-6 py-2 rounded-full cursor-pointer font-semibold ${programType === 'PG' ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-red-500 transition-colors'}`}
            onClick={() => setProgramType(programType === 'PG' ? null : 'PG')}
          >
            PG Programs
          </button>
          <button
            className={`px-6 py-2 rounded-full cursor-pointer font-semibold ${programType === 'PhD' ? 'bg-red-500 text-white' : 'bg-gray-700 text-white hover:bg-red-500 transition-colors'}`}
            onClick={() => setProgramType(programType === 'PhD' ? null : 'PhD')}
          >
            PhD Programs
          </button>
        </div>

        {/* UG Programs: show if filter is UG or no filter */}
        {(programType === 'UG' || programType === null) && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <img src={Grauvate} alt="UG Icon" className="w-8 h-8 mr-3" />
              <h3 className="text-white text-2xl font-bold ">
                Undergraduate Programs <span className="text-red-400">(18 Programs)</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAllUG ? ugPrograms : initialUGPrograms).map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
            {/* +9 More Specialized Engineering Programs */}
            {!showAllUG && (
              <div className="text-center mt-6 mb-2">
                <span className="text-gray-400 font-semibold text-lg">+ 9 More Specialized Engineering Programs</span>
              </div>
            )}
            {/* View All UG Programs Button */}
            {!showAllUG && (
              <div className="text-center mt-2">
                <button className="border border-gray-600 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors"
                  onClick={() => setShowAllUG(true)}>
                  View All UG Programs
                </button>
              </div>
            )}
          </div>
        )}

        {/* PG Programs: show if filter is PG or no filter */}
        {(programType === 'PG' || programType === null) && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <span className="text-red-400 text-2xl mr-3">🎯</span>
              <h3 className="text-white text-2xl font-bold">
                Postgraduate Programs <span className="text-red-400">(7 Programs)</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pgPrograms.map((program, index) => (
                <ProgramCard key={index} program={program} />
              ))}
            </div>
          </div>
        )}

        {/* PhD Programs: show if filter is PhD or no filter */}
        {(programType === 'PhD' || programType === null) && (
          <div>
            <div className="flex items-center mb-8">
              <span className="text-red-400 text-2xl mr-3">🔬</span>
              <h3 className="text-white text-2xl font-bold">
                Research Programs <span className="text-red-400">(5 PhD Programs)</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phdPrograms.map((program, index) => (
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
