import Navbar from "../components/Navbar";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Certifications from "../components/Certifications";
import ResumeCTA from "../components/ResumeCTA";
import DeveloperPresence from "../components/DeveloperPresence";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[#050507]">

            {/* =========================================
                NAVBAR
            ========================================= */}
            <Navbar />

            {/* =========================================
                01 — HERO
                Main first impression
            ========================================= */}
            <Hero />

            {/* =========================================
                02 — ABOUT
                Who I am
            ========================================= */}
            <About />

            {/* =========================================
                03 — SKILLS
                Technologies & capabilities
            ========================================= */}
            <Skills />

            {/* =========================================
                04 — PROJECTS
                Featured work
            ========================================= */}
            <Projects />

            {/* =========================================
                05 — RESEARCH / EDUCATION
                Learning & exploration
            ========================================= */}
            <Credentials />

            {/* =========================================
                06 — CERTIFICATIONS
                Certifications & achievements
            ========================================= */}
            <Certifications />

            {/* =========================================
                07 — RESUME
            ========================================= */}
            <ResumeCTA />

            {/* =========================================
                08 — DEVELOPER PRESENCE
                GitHub & LinkedIn
            ========================================= */}
            <DeveloperPresence />

            {/* =========================================
                09 — CONTACT
            ========================================= */}
            <Contact />

            {/* =========================================
                FOOTER
            ========================================= */}
            <Footer />

        </main>
    );
}

export default Home;