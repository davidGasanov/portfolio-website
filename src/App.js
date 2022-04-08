import styles from "./App.module.css";

import { useState, useEffect } from "react";

import Navigation from "./components/Navigation/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [phoneMenu, togglePhoneMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrolled(window.pageYOffset > 200);
      });
    }

    Aos.init({duration: 1500, once: true});

  }, []);

  return (
    <div className="App">
      <Navigation
        phoneMenu={phoneMenu}
        togglePhoneMenu={togglePhoneMenu}
        scrolled={scrolled}
      />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
