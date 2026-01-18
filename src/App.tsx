import MainLayout from "./layout";
import "./main.css";
import LandingSection from "./sections/landing";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";

function App() {
  return (
    <>
      <MainLayout>
        <LandingSection />
        <SkillsSection />
        <ProjectsSection/>
      </MainLayout>
    </>
  );
}

export default App;
