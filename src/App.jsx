import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CodingPlatforms from "./components/CodingPlatforms";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Social from "./components/Social";


export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={`bg-white text-black min-h-screen transition-opacity duration-1000 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Navbar />
      <Hero />
      <Stats />
      <Education />
      <Skills />
      <Projects />
      <CodingPlatforms />
      <Blogs />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}
