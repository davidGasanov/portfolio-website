import MainLayout from "./layout";
import "./main.css";
import ExperienceSection from "./sections/experience";
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
        <ExperienceSection/>
      </MainLayout>
    </>
  );
}

export default App;
