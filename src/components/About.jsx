// src/components/About.jsx
import React from "react";
import { FaTools, FaThumbsUp } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-400" /> },
    { name: "Python", icon: <SiPython className="text-yellow-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  return (
    <section
      id="about"
      className="relative w-full px-5 sm:px-8 md:px-16 py-14 sm:py-20 bg-gradient-to-b from-[#050505] via-[#0a0a10] to-[#08080a] text-white overflow-hidden"
    >
      {/* 🌌 Night Glow Aura */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent blur-3xl opacity-30"></div>

      {/* ✨ Floating Glow Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/40 blur-[1.5px] animate-floatParticle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
            }}
          ></div>
        ))}
      </div>

      {/* 💫 Content Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left: Info Section */}
        <div className="space-y-6 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Passionate developer with a strong foundation in computer science
            and hands-on experience building real-world applications.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            I'm a final-semester BSc CSIT student at AIMS College, Biratnagar,
            with a deep passion for full-stack development. I love solving
            complex problems and building applications that make a real
            difference.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            My journey started with curiosity about how websites work, which
            evolved into mastering frameworks like React and Node.js. I'm
            interested in building scalable systems and crafting seamless user
            experiences.
          </p>

          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Currently, I'm seeking internship opportunities to collaborate,
            learn from professionals, and grow as a developer.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 justify-center sm:justify-start">
            <button
              onClick={() => (window.location.href = "mailto:jayinfo55@gmail.com")}
              className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium shadow-lg text-center hover:scale-105 hover:shadow-cyan-400/70 transition-all duration-300"
            >
              Get in touch
            </button>

            <a
              href="https://github.com/Jayinfo77"
              className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium shadow-lg text-center hover:scale-105 hover:shadow-purple-400/70 transition-all duration-300"
            >
              See projects
            </a>
          </div>
        </div>

        {/* Right: Stats & Skills */}
        <div className="space-y-8">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start">
            <div className="flex-1 bg-[#121217]/80 border border-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full">
                  <FaTools className="text-black" size={20} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-300">6+</div>
              <div className="text-gray-400 mt-1 text-sm sm:text-base">
                Technologies Mastered
              </div>
            </div>

            <div className="flex-1 bg-[#121217]/80 border border-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full">
                  <FaThumbsUp className="text-black" size={20} />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-300">100%</div>
              <div className="text-gray-400 mt-1 text-sm sm:text-base">
                Commitment Level
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[#0f0f12]/80 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-5 text-cyan-400 text-center sm:text-left">
              Core Technologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 border border-gray-700 rounded-full text-sm sm:text-base text-gray-200 hover:bg-gray-700 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  title={s.name}
                >
                  <span className="text-lg">{s.icon}</span>
                  {s.name}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center sm:text-left text-sm sm:text-base text-gray-500">
            Open to internships & collaboration. Available for remote or on-site
            projects.
          </div>
        </div>
      </div>

      {/* 🌠 Animations */}
      <style jsx>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
        }
        .animate-floatParticle {
          animation: floatParticle ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
