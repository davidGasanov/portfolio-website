import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
