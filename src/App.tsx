import MainLayout from "./layout";
import "./main.css";
import LandingSection from "./sections/landing";
import SkillsSection from "./sections/skills";

function App() {
  return (
    <>
      <MainLayout>
        <LandingSection />
        <SkillsSection />
      </MainLayout>
    </>
  );
}

export default App;
