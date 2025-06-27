const AcademicPrograms = () => {
  const ugPrograms = [
    {
      title: "Computer Science & Engineering",
      description: "Core Computer Science, Software Engineering, Data Structures & Algorithms",
      duration: "4 Years",
      seats: "180 Seats Available",
    },
    {
      title: "Artificial Intelligence & Data Science",
      description: "Machine Learning, Deep Learning, Big Data Analytics",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Information Technology",
      description: "Software Development, Web Technologies, Database Management",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Electrical & Electronics Engineering",
      description: "Power Systems, Control Systems, Electronics Design",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Electronics & Communication",
      description: "VLSI Design, Embedded Systems, Signal Processing",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Mechanical Engineering",
      description: "Thermal Engineering, Manufacturing, CAD/CAM Design",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Civil Engineering",
      description: "Structural Engineering, Environmental Engineering",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Automobile Engineering",
      description: "Vehicle Design, Automotive Systems Design",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Biotechnology",
      description: "Genetic Engineering, Bioprocessing, Biomedical Applications",
      duration: "4 Years",
      seats: "60 Seats Available",
    },
  ]

  const pgPrograms = [
    {
      title: "Master of Computer Applications",
      description: "Advanced Programming, Software Engineering, Web Technologies",
      duration: "2 Years",
      seats: "60 Seats Available",
    },
    {
      title: "Master of Business Administration",
      description: "Strategic Management, Finance, Marketing, Operations",
      duration: "2 Years",
      seats: "Management",
    },
    {
      title: "M.E Computer Science",
      description: "Advanced Algorithms, Machine Learning, Research Methodology",
      duration: "2 Years",
      seats: "Research Focus",
    },
    {
      title: "M.E Applied Electronics",
      description: "VLSI Design, Embedded Systems, Signal Processing",
      duration: "2 Years",
      seats: "18 Seats Available",
    },
    {
      title: "M.E Manufacturing Engineering",
      description: "Advanced Manufacturing, Automation, Quality Engineering",
      duration: "2 Years",
      seats: "18 Seats Available",
    },
    {
      title: "M.E Structural Engineering",
      description: "Advanced Structural Design, Earthquake Engineering",
      duration: "2 Years",
      seats: "18 Seats Available",
    },
  ]

  const phdPrograms = [
    {
      title: "PhD in Computer Science",
      description: "AI/ML Research, Advanced Algorithms, Quantum Computing",
      duration: "3-5 Years",
      seats: "Research",
    },
    {
      title: "PhD in Electronics",
      description: "VLSI Design, Nanotechnology, Communication Systems",
      duration: "3-5 Years",
      seats: "Research",
    },
    {
      title: "PhD in Mechanical",
      description: "Advanced Materials, Robotics, Energy Systems",
      duration: "3-5 Years",
      seats: "Research",
    },
    {
      title: "PhD in Civil Engineering",
      description: "Structural Engineering, Smart Cities, Environmental Engineering",
      duration: "3-5 Years",
      seats: "Research",
    },
    {
      title: "PhD in Electrical",
      description: "Renewable Energy, Smart Grids, Power Electronics",
      duration: "3-5 Years",
      seats: "Research",
    },
  ]

  const ProgramCard = ({ program, type }) => (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="bg-red-500 rounded-full p-2">
          <span className="text-white text-sm">🎓</span>
        </div>
        <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">{type}</span>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{program.title}</h3>
      <p className="text-gray-300 text-sm mb-4">{program.description}</p>
      <div className="flex justify-between items-center text-xs">
        <span className="text-gray-400">{program.duration}</span>
        <span className="text-gray-400">{program.seats}</span>
      </div>
    </div>
  )

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">Academic Programs</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose from <span className="text-red-400">18 comprehensive programs</span> designed to shape future
            innovators and leaders in various fields.
          </p>
        </div>

        {/* Program Type Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold">UG Programs</button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-500 transition-colors">
            PG Programs
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-500 transition-colors">
            PhD Programs
          </button>
        </div>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-red-400 text-2xl mr-3">🎓</span>
            <h3 className="text-white text-2xl font-bold">
              Undergraduate Programs <span className="text-red-400">(18 Programs)</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ugPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} type="UG" />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="border border-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
              📋 View All UG Programs
            </button>
          </div>
        </div>

        {/* Postgraduate Programs */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-red-400 text-2xl mr-3">🎯</span>
            <h3 className="text-white text-2xl font-bold">
              Postgraduate Programs <span className="text-red-400">(10 Programs)</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} type="PG" />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="border border-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
              📋 View All PG Programs
            </button>
          </div>
        </div>

        {/* PhD Programs */}
        <div>
          <div className="flex items-center mb-8">
            <span className="text-red-400 text-2xl mr-3">🔬</span>
            <h3 className="text-white text-2xl font-bold">
              Research Programs <span className="text-red-400">(5 PhD Programs)</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdPrograms.map((program, index) => (
              <ProgramCard key={index} program={program} type="PhD" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcademicPrograms
