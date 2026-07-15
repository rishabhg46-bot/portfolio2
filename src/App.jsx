import { useEffect } from "react";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  
  return (
    <>
      <MyNavbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Education />
      <Contact/>
    </>
  );
}

export default App;