import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll progress animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 120;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollY &&
          section.offsetTop + section.offsetHeight > scrollY
        ) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-gray-900/90 backdrop-blur-md px-4 sm:px-6 md:px-10 py-3 md:py-4 flex justify-between items-center shadow-md sticky top-0 z-50 transition-all duration-300">
      {/* 🔵 Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 to-indigo-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* 🚀 Logo */}
      <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300 select-none">
        JPM
      </h1>

      {/* 💻 Desktop / Tablet Navigation */}
      <nav className="hidden lg:flex space-x-4 xl:space-x-6 2xl:space-x-8 text-gray-300 font-medium relative">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`relative pb-1 transition-colors text-sm sm:text-base md:text-lg xl:text-xl ${
              active === link.id
                ? "text-indigo-400 font-semibold"
                : "hover:text-indigo-300"
            }`}
            onClick={() => setActive(link.id)}
          >
            {link.label}
            {active === link.id && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-400 rounded-full"
              />
            )}
          </a>
        ))}
      </nav>

      {/* 🧭 Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
        {/* 📩 Gmail Button (Direct Gmail Compose Link) */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jayinfo55@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full border border-gray-600 text-xs sm:text-sm md:text-base text-gray-300 hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300"
        >
          <FaEnvelope className="text-sm sm:text-base md:text-lg" />
          Email Me
        </a>

        {/* 🧠 View Work with GitHub icon */}
        <a
          href="https://github.com/Jayinfo77"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
        >
          <FaGithub className="text-sm sm:text-base md:text-lg" />
          View Work
        </a>
      </div>

      {/* 📱 Mobile Menu Toggle */}
      <button
        aria-label="Toggle navigation"
        className="lg:hidden text-gray-300 hover:text-indigo-400 transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md flex flex-col items-center space-y-4 sm:space-y-5 py-5 sm:py-6 border-t border-gray-700 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                  setMenuOpen(false);
                }}
                className={`text-base sm:text-lg ${
                  active === link.id
                    ? "text-indigo-400 font-semibold"
                    : "text-gray-300 hover:text-indigo-300"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* 📩 Mobile Gmail + GitHub Buttons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jayinfo55@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 border border-gray-600 rounded-full text-sm sm:text-base text-gray-300 hover:border-indigo-400 hover:text-indigo-400 transition-all"
              >
                <FaEnvelope className="text-base sm:text-lg" />
                Email Me
              </a>

              <a
                href="https://github.com/Jayinfo77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm sm:text-base font-semibold shadow-md hover:scale-105 transition-transform"
              >
                <FaGithub className="text-base sm:text-lg" />
                View Work
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
