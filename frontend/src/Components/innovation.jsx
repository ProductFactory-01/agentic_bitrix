const InnovationEcosystem = () => {
  return (
    <section className="bg-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
            Innovation <span className="text-red-400">Ecosystem</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technology labs where tomorrow's innovators build solutions for real-world
            challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI/ML Innovation Lab */}
          <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">AI/ML Innovation Lab</h3>
              <p className="text-gray-300 text-sm mb-4">
                State-of-the-art artificial intelligence and machine learning lab with GPU clusters, MLOps
                infrastructure, and cutting-edge research facilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">Deep Learning</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">Computer Vision</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">NLP</span>
              </div>
            </div>
            <div className="h-48 bg-gray-700">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DtDebi2FgxCP1jfqU58xJZ0yptN8zG.png"
                alt="AI/ML Innovation Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Advanced Robotics Lab */}
          <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-white text-xl">🦾</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Advanced Robotics Lab</h3>
              <p className="text-gray-300 text-sm mb-4">
                Build autonomous robots, drones, and IoT systems with industry-grade equipment and mentorship from
                robotics experts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">Autonomous Systems</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">IoT</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">Drones</span>
              </div>
            </div>
            <div className="h-48 bg-gray-700">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DtDebi2FgxCP1jfqU58xJZ0yptN8zG.png"
                alt="Advanced Robotics Lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Design Thinking Studio */}
          <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="p-6">
              <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Design Thinking Studio</h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary design thinking lab where students ideate, prototype, and iterate solutions using
                human-centered design principles.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">UI/UX Design</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">Prototyping</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">Innovation</span>
              </div>
            </div>
            <div className="h-48 bg-gray-700">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DtDebi2FgxCP1jfqU58xJZ0yptN8zG.png"
                alt="Design Thinking Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovationEcosystem
