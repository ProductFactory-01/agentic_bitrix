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

const App = () => {
  return (
    <div className="min-h-screen">
      <BitrixForm />
      <Header />

      {/* Home Section */}
      <section id="home">
        <HeroSection />
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

      {/* Placements Section */}
      <section id="placements">
        <PlacementSection />
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
