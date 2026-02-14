export default function Skills() {
  const skills = [
    "Python",
    "Java",
    "Machine Learning",
    "NLP",
    "MERN Stack",
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-gray-700 transition-all duration-300 hover:text-black"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
