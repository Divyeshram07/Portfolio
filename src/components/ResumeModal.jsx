export default function ResumeModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[2000]">

      <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[70%] h-[85vh] relative overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-600 hover:text-slate-900"
        >
          ✕
        </button>

        {/* Resume Preview */}
        <iframe
          src="/DivyeshRamResume.pdf"
          title="Resume Preview"
          className="w-full h-full"
        />

        {/* Download Button */}
        <div className="absolute bottom-6 right-6">
          <a
            href="/DivyeshRamResume.pdf"
            download
            className="px-6 py-3 rounded-full bg-slate-800 text-white text-sm font-medium hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>

      </div>
    </div>
  );
}
