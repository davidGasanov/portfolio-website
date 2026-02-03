import Reveal, { Fade } from "react-awesome-reveal";
import MainLayout from "./layout";
import "./main.css";
import Contact from "./sections/contact";
import ExperienceSection from "./sections/experience";
import LandingSection from "./sections/landing";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";

function App() {
  return (
    <>
      <MainLayout>
        <Fade cascade triggerOnce>
          <LandingSection />
        </Fade>
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <Contact />
      </MainLayout>
    </>
  );
}

export default App;
