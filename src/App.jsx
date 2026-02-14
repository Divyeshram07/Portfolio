import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import CodingPlatforms from "./components/CodingPlatforms";
import DeveloperInsights from "./components/DeveloperInsights";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-slate-800 min-h-screen overflow-x-hidden">

      {/* Toast Notifications */}
      <Toaster position="top-right" />

      {/* Loader */}
      {loading && <Loader />}

      {/* Main Content */}
      {!loading && (
        <>
          <Navbar />

          <main className="transition-opacity duration-700 opacity-100">
            <Hero />
            <Stats />
            <Education />
            <Skills />
            <Projects />
            <Blogs />
            <CodingPlatforms />
            <DeveloperInsights />
            <Social />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
}
