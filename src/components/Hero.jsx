import { useEffect, useState } from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const roles = [
    "Machine Learning Enthusiast",
    "Full Stack Developer",
    "NLP Explorer",
    "Problem Solver",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
      style={{ paddingTop: "80px" }}
    >
      {/* Flow Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_40%)] animate-gradientMove"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center w-full">

        {/* TEXT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold text-slate-800 mb-6">
            Divyesh Ram
          </h1>

          <h2
            className={`text-xl md:text-2xl text-slate-600 mb-4 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {roles[index]}
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
            Computer Science student focused on building intelligent systems
            and scalable applications with clean, modern engineering practices.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-slate-800 text-white text-sm font-medium hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full border border-slate-400 text-slate-700 text-sm font-medium hover:bg-slate-800 hover:text-white transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 rounded-full p-[4px] bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 shadow-xl">
              <img
                src={profile}
                alt="Divyesh Ram"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-slate-500 text-sm mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-slate-500 rounded-full mt-2 animate-scrollIndicator"></div>
        </div>
      </div>
    </section>
  );
}
