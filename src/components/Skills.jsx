import {
  SiPython,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiScikitlearn,
} from "react-icons/si";

import { FaJava, FaBrain } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython size={28} className="text-yellow-500" /> },
    { name: "Java", icon: <FaJava size={28} className="text-red-600" /> },
    { name: "Machine Learning", icon: <SiScikitlearn size={28} className="text-orange-500" /> },
    { name: "NLP", icon: <FaBrain size={28} className="text-purple-500" /> },
    { name: "React", icon: <SiReact size={28} className="text-cyan-500" /> },
    { name: "Node.js", icon: <SiNodedotjs size={28} className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb size={28} className="text-green-500" /> },
    { name: "Express", icon: <SiExpress size={28} className="text-gray-700" /> },
  ];

  return (
    <section id="skills" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-20 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              <p className="text-gray-700 font-medium">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
