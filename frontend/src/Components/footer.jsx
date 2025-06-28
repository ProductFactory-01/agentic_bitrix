import LOGO from "../assets/sns-DxCft4QP 1.png";
import Facebook from "../assets/Link [w-10].png";
import Twitter from "../assets/Link [w-10] (1).png";
import LinkedIn from "../assets/Link [w-10] (2).png";
import YouTube from "../assets/Link [w-10] (3).png";
import Call from "../assets/call.png";
import CallTele from "../assets/call-tele.png";
import Email from "../assets/email.png";
import Instagram from "../assets/insta.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 px-5">
      <div className="max-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
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
                href="https://m.facebook.com/snsinstitutions/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="https://x.com/snsinstitutions"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={Twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/school/snsinstitutions/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={LinkedIn} alt="Linkedin" />
              </a>
              <a
                href="https://youtube.com/@snsinstitutions?si=FAw6gAgnwy3qtnHd"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={YouTube} alt="Youtube" />
              </a>
              <a
                href="https://www.instagram.com/snsinstitutions/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <img src={Instagram} alt="Instagram" />
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
            <h4 className="text-red-600 font-semibold mb-4">DIFFERENTIATORS</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a
                  href="https://main.snsgroups.com/##"
                  className="hover:text-white transition-colors"
                >
                  Design Thinking Based Curriculum
                </a>
              </li>
              <li>
                <a
                  href="https://main.snsgroups.com/##"
                  className="hover:text-white transition-colors"
                >
                  Center for Learning and Teaching
                </a>
              </li>
              <li>
                <a
                  href="https://main.snsgroups.com/##"
                  className="hover:text-white transition-colors"
                >
                  Skill and Career Development
                </a>
              </li>
              <li>
                <a
                  href="https://main.snsgroups.com/##"
                  className="hover:text-white transition-colors"
                >
                  Industry Institute Partnership Cell
                </a>
              </li>
              <li>
                <a
                  href="https://main.snsgroups.com/##"
                  className="hover:text-white transition-colors"
                >
                  Centre for Creativity
                </a>
              </li>
              <li>
                <a
                  href="https://main.snsgroups.com/##"
                  className="hover:text-white transition-colors"
                >
                  Social Responsibility Initiative
                </a>
              </li>
              <li>
                <a
                  href="https://snsspine.in/"
                  className="hover:text-white transition-colors"
                >
                  SNS SPINE
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-red-600 font-semibold mb-4">CONTACT</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start ">
                <img src={Call} alt="Call Icon" className="w-4 h-full mr-2" />
                <span>
                  SNS Kalvi Nagar, Sathy Main Road (NH-209), Vazhiyampalayam,
                  Saravanampatti Post, 
                  <br />
                  Coimbatore - 641 035, Tamil Nadu.
                </span>
              </div>
              <div className="flex items-center">
                <img
                  src={CallTele}
                  alt="Calltele Icon"
                  className="w-4 h-full mr-2"
                />
                <span>+91 75503 16701</span>
              </div>
              <div className="flex items-center">
                <img src={Email} alt="email Icon" className="w-4 h-full mr-2" />
                <span>snsct@snsgroups.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SNS College of Technology. All rights reserved. | Redesigning
            Common Minds Through Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
