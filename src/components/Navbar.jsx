import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b b-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
<div className="flex items-center space-x-4">
  <a href="#home">
    <img src="/my-beautiful-portfolio/images/fulllogo.jpg" alt="logo" className="h-12 w-auto" />
  </a>
  <a
    href="/my-beautiful-portfolio/Jesse_Davis_Resume_Final.pdf"
    className="text-sm sm:text-base bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
  </a>
  <button
    className="w-7 h-7 flex items-center justify-center relative cursor-pointer z-40 md:hidden text-white text-3xl focus:outline-none"
    onClick={() => setMenuOpen((prev) => !prev)}
    aria-label="Open menu"
    type="button"
  >
    &#9776;
  </button>
</div>
<div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
