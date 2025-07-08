import Header from "./Components/header";
import HeroSection from "./Components/hero";
import AcademicPrograms from "./Components/academic-programs";
import InnovationEcosystem from "./Components/innovation";
import Startup from "./Components/startup";
import PlacementSection from "./Components/placement";
import SpineExperience from "./Components/spine";
import AdmissionSection from "./Components/admission-section";
import Footer from "./Components/footer";
import BitrixForm from "./Components/BitrixForm";
import browserSvg from "./assets/browser.svg";
import whatsapp from "./assets/whatsapp.svg";
import chatBubbleSvg from "./assets/chatBubble.svg";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed bottom-6 right-4 flex flex-col items-end z-50">
        {/* Browser Bubble */}
        <div className="flex flex-row-reverse items-center">
          <div
            className=" rounded-full mb-2 cursor-pointer animate-wave bg-white mr-2"
            onClick={() => window.open("https://snsct.org/main", "_blank")}
          >
            <img src={browserSvg} alt="Browser Icon" className="w-7 h-7 " />
          </div>
          <button
            onClick={() => window.open("https://snsct.org/main", "_blank")}
            className="relative w-[200px] h-[50px] sm:w-[160px] sm:h-[60px] -mb-2 group overflow-hidden cursor-pointer hidden sm:block animate-wave mr-1"
          >
            <img
              src={chatBubbleSvg}
              alt="Chat Bubble"
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden font-bold">
              <span className="transition-all duration-500 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0 opacity-100">
                View More
              </span>
              <span className="absolute transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
                Old Site
              </span>
            </div>
          </button>
        </div>

        {/* WhatsApp Bubble */}
        <div className="flex flex-row-reverse items-center">
          <a
            href="https://wa.me/919566423456"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2 mr-2 rounded-full cursor-pointer animate-wave"
          >
            <img src={whatsapp} alt="WhatsApp Icon" className="w-7 h-7" />
          </a>
          <a
            href="https://wa.me/919566423456"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[200px] h-[50px] sm:w-[160px] sm:h-[60px] flex items-center justify-center hidden sm:flex animate-wave mr-1"
          >
            <img
              src={chatBubbleSvg}
              alt="Chat Bubble"
              className="absolute top-0 left-0 w-full h-full"
            />
            <span className="relative z-10 text-black font-bold text-sm sm:text-md">
              +91 9566423456
            </span>
          </a>
        </div>
      </div>

      <BitrixForm />
      <Header />

      {/* Parallax Container for Hero and Placement */}
      <div className="relative">
        {/* Sticky Hero Section */}
        <section id="home" className="sticky top-0 z-10">
          <HeroSection />
        </section>

        {/* Overlapping Placement Section */}
        <section id="placements" className="relative z-20">
          <PlacementSection />
        </section>
      </div>

      {/* Programs Section */}
      <section id="programs">
        <AcademicPrograms />
      </section>

      {/* Innovation Section */}
      <section id="innovation">
        <InnovationEcosystem />
      </section>

      {/* Startups Section */}
      <section id="startups">
        <Startup />
      </section>

      {/* Campus Life Section */}
      <section id="campus-life">
        <SpineExperience />
      </section>

      {/* Apply Section */}
      <section id="apply">
        <AdmissionSection />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
