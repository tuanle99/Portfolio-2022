import Navbar from "./components/Navbar";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
