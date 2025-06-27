
import { Routes, Route } from "react-router-dom"
import Header from "./Components/header"
import HeroSection from "./Components/hero"
import AcademicPrograms from "./Components/academic-programs"
import InnovationEcosystem from "./Components/innovation"
import PlacementSection from "./Components/placement"
import SpineExperience from "./Components/spine"
import AdmissionSection from "./Components/admission-section"

// Page Components
const HomePage = () => (
  <div>
    <Header />
    <HeroSection />
    <AcademicPrograms />
    <InnovationEcosystem />
    <PlacementSection />
    <SpineExperience />
    <AdmissionSection />
  </div>
)

const ProgramsPage = () => (
  <div>
    <Header />
    <div className="pt-20">
      <AcademicPrograms />
    </div>
  </div>
)

const InnovationPage = () => (
  <div>
    <Header />
    <div className="pt-20">
      <InnovationEcosystem />
    </div>
  </div>
)

const PlacementsPage = () => (
  <div>
    <Header />
    <div className="pt-20">
      <PlacementSection />
    </div>
  </div>
)

const CampusLifePage = () => (
  <div>
    <Header />
    <div className="pt-20">
      <SpineExperience />
    </div>
  </div>
)

const ApplyPage = () => (
  <div>
    <Header />
    <div className="pt-20">
      <AdmissionSection />
    </div>
  </div>
)

const App = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/innovation" element={<InnovationPage />} />
        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/campus-life" element={<CampusLifePage />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </div>
  )
}

export default App
