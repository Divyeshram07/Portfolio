import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="hero" className="min-h-screen pt-32 bg-white flex items-center">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Building intelligent systems
          <br />
          with clean engineering.
        </h1>

        <p className="mt-8 text-gray-600 max-w-2xl text-lg">
          AI & Full Stack Developer specializing in Machine Learning,
          NLP, and scalable web applications.
        </p>

        <div className="mt-10 flex gap-6">
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            View Resume
          </button>

          <a
            href="/DivyeshRamResume.pdf"
            download
            className="px-6 py-3 text-gray-600 hover:text-black transition"
          >
            Download PDF
          </a>
        </div>

        <ResumeModal isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  );
}
