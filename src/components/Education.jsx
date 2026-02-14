import { useEffect, useRef, useState } from "react";
import klLogo from "../assets/kl-logo.png";
import accordLogo from "../assets/accord-logo.png";
import kcpLogo from "../assets/kcp-logo.png";

export default function Education() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institution: "KL University",
      duration: "2023 – 2027",
      branch: "Computer Science and Engineering",
      logo: klLogo,
      highlight: true,
    },
    {
      degree: "Class 12 (Senior Secondary)",
      institution: "Accord School",
      duration: "2021 – 2023",
      details: "Science Stream – MPC",
      logo: accordLogo,
    },
    {
      degree: "Class 10 (Secondary)",
      institution: "KCP Siddhartha Adarsh Residential Public School",
      duration: "2020 – 2021",
      details: "CBSE Board",
      logo: kcpLogo,
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-20 text-center">
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-700 transform ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              } ${
                edu.highlight
                  ? "bg-white/70 border border-white/40 shadow-2xl"
                  : "bg-white/50 border border-white/30 shadow-lg"
              }`}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = -(y - rect.height / 2) / 20;
                const rotateY = (x - rect.width / 2) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0) rotateY(0)";
              }}
            >
              <div className="relative z-10">

                {/* Logo */}
                <div className="mb-6">
                  <img
                    src={edu.logo}
                    alt="School Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {edu.degree}
                </h3>

                <p className="text-gray-700 mb-1">
                  {edu.institution}
                </p>

                <p className="text-sm text-gray-500 mb-3">
                  {edu.duration}
                </p>

                {edu.branch && (
                  <p className="text-gray-600 text-sm mb-2">
                    {edu.branch}
                  </p>
                )}

                {edu.details && (
                  <p className="text-gray-500 text-sm">
                    {edu.details}
                  </p>
                )}

              </div>

              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
