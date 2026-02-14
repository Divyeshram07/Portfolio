export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-all duration-300">
      <div className="bg-white w-[90%] md:w-[70%] h-[80%] rounded-xl shadow-2xl relative p-6">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          ✕
        </button>

        <iframe
          src="/resume.pdf"
          title="Resume Preview"
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
