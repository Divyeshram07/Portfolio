export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300">

      <div className="bg-white w-[90%] md:w-[60%] rounded-xl p-8 relative shadow-xl">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          {project.title}
        </h2>

        <p className="text-gray-600 mb-6">
          {project.desc}
        </p>

        <div className="flex gap-6">
          <a
            href={project.github}
            target="_blank"
            className="underline"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="underline"
          >
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
}
