import Header from "./Components/header"
import HeroSection from "./Components/hero"
import AcademicPrograms from "./Components/academic-programs"
import InnovationEcosystem from "./Components/innovation"
import StartupSection from "./Components/startup"
import PlacementSection from "./Components/placement"
import SpineExperience from "./Components/spine"
import AdmissionSection from "./Components/admission-section"
import Footer from "./Components/footer"

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AcademicPrograms />
      <InnovationEcosystem />
      <StartupSection />
      <PlacementSection />
      <SpineExperience />
      <AdmissionSection />
      <Footer />
    </div>
  )
}

export default App
