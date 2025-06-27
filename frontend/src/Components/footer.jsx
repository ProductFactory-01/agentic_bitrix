import LOGO from "../assets/sns-DxCft4QP 1.png";
import Facebook from "../assets/Link [w-10].png";
import Twitter from "../assets/Link [w-10] (1).png";
import LinkedIn from "../assets/Link [w-10] (2).png";
import YouTube from "../assets/Link [w-10] (3).png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-5">
      <div className="max-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-8">
          {/* Logo and Contact */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2">
                <img src={LOGO} alt="" />
              </div>
              <div>
                <h3 className="text-red-600 font-bold text-lg">SNSCT</h3>
                <p className="text-gray-400 text-xs">
                  Design Thinking Excellence
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Redesigning Common Minds Since 2002. Building Future Innovators
              Through Design Thinking Framework.
            </p>
            <div className="bg-gradient-to-r from-[#FEF3C7] via-[#FEF3C7] to-[#F59E0B] px-4 py-2 rounded-full shadow-md w-fit mr-8">
              <span className="text-amber-900 font-semibold text-sm flex items-start whitespace-nowrap">
                <span className="mr-2 text-amber-800">⚙</span>
                TNEA Code: 2726
              </span>
            </div>
            <div className="flex space-x-3 py-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={Facebook} alt="" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={Twitter} alt="" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={LinkedIn} alt="" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={YouTube} alt="" />
              </a>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-red-600 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
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
            <h4 className="text-red-600 font-semibold mb-4">COLLEGES</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS ACADEMY - A Fingerprint International CBSE School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  DR. SNS RAJALAKSHMI COLLEGE OF ARTS AND SCIENCE
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS COLLEGE OF TECHNOLOGY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS COLLEGE OF ENGINEERING
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS COLLEGE OF PHARMACY AND HEALTH SCIENCES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS COLLEGE OF ALLIED HEALTH SCIENCES
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS COLLEGE OF PHYSIOTHERAPY
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS COLLEGE OF NURSING
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SNS B-SPINE - AN EXPERIENTIAL B SCHOOL
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
            © 2025 SNS College of Technology. All rights reserved. | Redesigning
            Common Minds Through Knowledge
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
