export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

        <p>
          © {new Date().getFullYear()} Divyesh Ram
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/Divyeshram07" className="hover:text-black transition">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/divyeshram28/" className="hover:text-black transition">
            LinkedIn
          </a>
          <a href="mailto:bdivyeshram@gmail.com">
          Mail
          </a>


        </div>

      </div>
    </footer>
  );
}
