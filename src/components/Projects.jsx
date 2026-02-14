import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "AI Email Automation",
      desc: "Context-aware email auto-response system using NLP.",
      github: "#",
      live: "#"
    },
    {
      title: "Online Ticket Platform",
      desc: "Full-stack MERN application with authentication.",
      github: "https://github.com/Divyeshram07/MERN-PROJECT",
      live: "https://online-ticket-booking-snowy.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(project)}
              className="border-b pb-6 cursor-pointer hover:opacity-70 transition-all duration-300"
            >
              <h3 className="text-xl font-medium">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {project.desc}
              </p>
            </div>
          ))}

        </div>

        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />

      </div>
    </section>
  );
}
