import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const underlineRef = useRef(null);

  const sections = [
    "hero",
    "education",
    "skills",
    "projects",
    "coding",
    "contact",
  ];

  // Scroll detection (active section + shrink navbar)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      // Shrink effect
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          if (
            scrollPos >= element.offsetTop &&
            scrollPos < element.offsetTop + element.offsetHeight
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Move underline smoothly
  useEffect(() => {
    const activeLink = document.querySelector(
      `a[data-section="${active}"]`
    );

    if (activeLink && underlineRef.current) {
      underlineRef.current.style.width = `${activeLink.offsetWidth}px`;
      underlineRef.current.style.left = `${activeLink.offsetLeft}px`;
    }
  }, [active]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 border-b transition-all duration-300 ${
        scrolled ? "py-3 shadow-sm" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center relative">

        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          DIVYESH RAM
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-sm font-medium relative">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              data-section={section}
              className={`transition-colors duration-300 ${
                active === section
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          {/* Smooth Active Underline */}
          <span
            ref={underlineRef}
            className="absolute -bottom-1 h-[2px] bg-black transition-all duration-300"
          />
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4 bg-white border-t text-sm">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block text-gray-600 hover:text-black transition"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
