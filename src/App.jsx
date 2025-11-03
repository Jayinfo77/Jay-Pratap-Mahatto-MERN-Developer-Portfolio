import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { FaArrowUp, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Function to open links inside the same app (like embedded web view)
  const openLink = (url) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-[#0d0d10] text-white scroll-smooth font-sans relative">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 md:py-16 space-y-32">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Project /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer & Back-to-top button */}
      <footer className="bg-[#121217] border-t border-gray-800 py-8 md:py-12 text-gray-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-center md:text-left text-sm sm:text-base">
            © {new Date().getFullYear()} Jay Pratap Mahatto — All Rights Reserved.
          </p>

          <div className="flex justify-center md:justify-end gap-6 flex-wrap">
            <button
              onClick={() => openLink("https://github.com/Jayinfo77")}
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 animate-glow-icon"
              title="GitHub"
            >
              <FaGithub size={22} />
            </button>

            <button
              onClick={() =>
                openLink("https://www.linkedin.com/in/jay-pratap-mahatto-246808384")
              }
              className="text-gray-400 hover:text-[#0A66C2] transition-all duration-300 hover:scale-110 active:scale-95 animate-glow-icon"
              title="LinkedIn"
            >
              <FaLinkedin size={22} />
            </button>

            <button
              onClick={() => openLink("https://x.com/MrJay3049")}
              className="text-gray-400 hover:text-[#1DA1F2] transition-all duration-300 hover:scale-110 active:scale-95 animate-glow-icon"
              title="Twitter / X"
            >
              <FaTwitter size={22} />
            </button>

            <button
              onClick={() => openLink("https://www.facebook.com/jay.mahato.759731")}
              className="text-gray-400 hover:text-[#1877F2] transition-all duration-300 hover:scale-110 active:scale-95 animate-glow-icon"
              title="Facebook"
            >
              <FaFacebook size={22} />
            </button>
          </div>
        </div>

        <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mt-6 animate-gradient"></div>
      </footer>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg shadow-cyan-500/50 transition-transform duration-300 hover:scale-110 animate-float-glow"
          title="Back to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
