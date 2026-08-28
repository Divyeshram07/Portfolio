import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import DeveloperPresence from "../components/DeveloperPresence";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";

function Home() {
    return (
        <div className="min-h-screen bg-[#050507] text-white overflow-hidden">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <DeveloperPresence />
                <Credentials />
                <Contact />
            </main>
        </div>
    );
}

export default Home;