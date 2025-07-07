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
import Recruiters from "./Components/TopRecruiters";

const App = () => {
  return (
    <div className="min-h-screen">
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

      <section id="top-recruiters">
        <Recruiters />
      </section>

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
