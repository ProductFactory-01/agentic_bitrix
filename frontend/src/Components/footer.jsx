const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-500 rounded-full p-2">
                <span className="text-white text-lg">⚙</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">SNSCT</h3>
                <p className="text-gray-400 text-xs">Design Thinking Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Redesigning Common Minds Since 2002. Building Future Innovators Through Design Thinking Framework.
            </p>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              TNEA Code: 2726
            </div>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">💼</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📺</span>
              </a>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-white font-semibold mb-4">ACADEMICS</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Academics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Campus Life
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  AI/ML Labs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Robotics Lab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design Studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Startup Incubation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">CONTACT</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start">
                <span className="text-red-400 mr-2">🏢</span>
                <span>SNS College of Technology, Coimbatore, Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-400 mr-2">📞</span>
                <span>[email protected]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SNS College of Technology. All rights reserved. | Redesigning Common Minds Through Knowledge
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
