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
      <div className="fixed sm:bottom-6 bottom-2 right-4 flex flex-col-reverse sm:flex-col items-end z-50">
        {/* Browser Bubble */}
        <div className="flex flex-row-reverse items-center mb-1 sm:mb-2">
          <div
            className="rounded-full cursor-pointer animate-wave bg-white mr-2"
            onClick={() => window.open("https://snsct.bitrix24.site/", "_blank")}
          >
            <img src={browserSvg} alt="Browser Icon" className="w-7 h-7" />
          </div>
          <button
            onClick={() => window.open("https://snsct.bitrix24.site/", "_blank")}
            className="relative w-[150px] h-[42px] sm:w-[160px] sm:h-[60px] group overflow-hidden cursor-pointer animate-wave mr-1"
          >
            <img
              src={chatBubbleSvg}
              alt="Chat Bubble"
              className="absolute top-0 left-0 w-full h-full"
            />
            <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden font-bold text-xs sm:text-sm">
              <span >
                Old Site
              </span>
            </div>
          </button>
        </div>

        {/* WhatsApp Bubble */}
        <div className="flex flex-row-reverse items-center mb-1 sm:mb-2">
          <a
            href="https://wa.me/919566423456"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 rounded-full cursor-pointer animate-wave"
          >
            <img src={whatsapp} alt="WhatsApp Icon" className="w-7 h-7" />
          </a>
          <a
            href="https://wa.me/919566423456"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[150px] h-[42px] sm:w-[160px] sm:h-[60px] items-center justify-center animate-wave mr-1 hidden sm:flex"
          >
            <img
              src={chatBubbleSvg}
              alt="Chat Bubble"
              className="absolute top-0 left-0 w-full h-full"
            />
            <span className="relative z-10 text-black font-bold text-xs sm:text-sm">
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
