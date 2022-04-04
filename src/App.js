import styles from "./App.module.css";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Welcome/>
      <About/>
    </div>
  );
}

export default App;
