const Header = () => {
  return (
    <header className=" px-6 py-4 fixed top-0 w-full shadow-lg z-50 backdrop-blur-md bg-transparent">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="bg-white rounded-full p-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">⚙</span>
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">SNSCT</h1>
            <p className="text-white text-xs opacity-90">Design Thinking Excellence</p>
          </div>
        </div>

        {/* TNEA Code */}
        <div className="bg-yellow-100 px-4 py-2 rounded-full">
          <span className="text-brown-800 font-semibold text-sm">⚙ TNEA Code: 2726</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">
            Home
          </a>
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">
            Programs
          </a>
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">
            Innovation
          </a>
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">
            Placements
          </a>
          <a href="#" className="text-white hover:text-yellow-200 transition-colors">
            Campus Life
          </a>
        </nav>

        {/* Apply Now Button */}
        <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold px-6 py-2 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all">
          Apply Now 2025
        </button>
      </div>
    </header>
  )
}

export default Header
