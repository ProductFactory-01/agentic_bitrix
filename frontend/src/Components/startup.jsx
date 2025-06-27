import startups from "../assets/startups.webp";

const StartupSection = () => {
  return (
    <section className="bg-red-500 py-16 px-6">
      <div className="max-w-full mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-white text-5xl font-bold mb-6 leading-tight">
              Building <span className="text-yellow-300">1000</span>
              <br />
              AI Startups
            </h2>
            <p className="text-white text-lg mb-8 leading-relaxed">
              SNS iHub is India's most advanced startup incubator, fostering entrepreneurship through design thinking,
              mentorship, and funding. Join the next generation of tech entrepreneurs.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                  <span className="text-black text-sm">✓</span>
                </div>
                <span className="text-white">₹10L+ Seed Funding Available</span>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                  <span className="text-black text-sm">✓</span>
                </div>
                <span className="text-white">Industry Mentor Network</span>
              </div>
              <div className="flex items-center">
                <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center mr-4">
                  <span className="text-black text-sm">✓</span>
                </div>
                <span className="text-white">Global Market Access</span>
              </div>
            </div>

            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors">
              Launch Your Startup
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={startups}
                alt="Students working on AI startup projects"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartupSection
