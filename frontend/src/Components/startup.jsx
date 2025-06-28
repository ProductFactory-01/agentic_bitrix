"use client"

import startups from "../assets/startups.webp"

const StartupSection = () => {
  return (
    <section className="bg-red-500 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-full mx-4 sm:mx-8 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Building <span className="text-yellow-300">1000</span>
              <br />
              AI Startups
            </h2>
            <p className="text-white text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              SNS iHub is India's most advanced startup incubator, fostering entrepreneurship through design thinking,
              mentorship, and funding. Join the next generation of tech entrepreneurs.
            </p>

            {/* Features List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-yellow-400 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-black text-xs sm:text-sm font-bold">✓</span>
                </div>
                <span className="text-white text-sm sm:text-base lg:text-lg">₹10L+ Seed Funding Available</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-yellow-400 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-black text-xs sm:text-sm font-bold">✓</span>
                </div>
                <span className="text-white text-sm sm:text-base lg:text-lg">Industry Mentor Network</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-yellow-400 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-black text-xs sm:text-sm font-bold">✓</span>
                </div>
                <span className="text-white text-sm sm:text-base lg:text-lg">Global Market Access</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-all duration-300 text-sm sm:text-base lg:text-lg hover:scale-105 active:scale-95 cursor-pointer">
                Launch Your Startup
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-2xl mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              <img
                src={startups || "/placeholder.svg?height=400&width=600"}
                alt="Students working on AI startup projects"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements for larger screens */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Mobile CTA Section */}
        <div className="mt-8 sm:mt-12 lg:hidden text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mx-auto max-w-md">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">Ready to Start?</h3>
            <p className="text-white/90 text-sm sm:text-base mb-4">
              Join hundreds of successful entrepreneurs who started their journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-yellow-400 text-red-500 px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 text-sm sm:text-base">
                Apply Now
              </button>
              <button className="border border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-all duration-300 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartupSection
