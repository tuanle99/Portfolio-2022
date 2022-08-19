import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
