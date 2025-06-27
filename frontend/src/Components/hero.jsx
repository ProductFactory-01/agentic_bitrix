const HeroSection = () => {
  return (
    <section className="bg-red-500 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-7xl mb-3 mt-16 leading-tight">
          <span 
            className="font-bold"
            style={{
              background: 'var(--Golden, linear-gradient(135deg, #FEF3C7 0%, #F59E0B 84.62%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
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
            India's first institute to implement <span className="font-semibold">Design Thinking Framework</span> in
            education.
          </p>
          <p>
            Building <span className="font-semibold">1000 AI Startups</span> through revolutionary SPINE + iHub
            ecosystem.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
            <span className="mr-2">🚀</span>
            Start Your Journey
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors flex items-center justify-center">
            <span className="mr-2">▶</span>
            Watch Innovation Story
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div>
            <div className="text-5xl font-bold mb-2">22</div>
            <div className="text-sm opacity-90">LPA Highest Package</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">2200+</div>
            <div className="text-sm opacity-90">Students Placed</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">300+</div>
            <div className="text-sm opacity-90">Company Partners</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">A++</div>
            <div className="text-sm opacity-90">NAAC Grade</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection