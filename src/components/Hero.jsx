import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import ProfileCard from "./ProfileCard";

const slogans = [
  "Building the Future with Code",
  "Empowering Ideas through Innovation",
  "Code. Create. Conquer.",
  "Designing the Digital Tomorrow",
  "Innovate. Build. Inspire.",
];

const AnimatedSlogan = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = slogans[index];
    let typingSpeed = deleting ? 50 : 100;

    const typingEffect = setTimeout(() => {
      if (!deleting && displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else if (deleting && displayText.length > 0) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
      } else if (!deleting && displayText.length === currentText.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && displayText.length === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % slogans.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [displayText, deleting, index]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white text-center md:text-left">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 border-r-4 border-cyan-500 pr-3 animate-blink animate-gradient">
        {displayText}
      </span>
    </h1>
  );
};

const floatingTechs = [
  { icon: <FaReact className="text-cyan-400" size={28} />, style: { top: "10%", left: "80%" } },
  { icon: <FaNodeJs className="text-green-500" size={28} />, style: { top: "60%", left: "10%" } },
  { icon: <SiExpress className="text-gray-300" size={24} />, style: { top: "30%", left: "50%" } },
  { icon: <SiMongodb className="text-green-400" size={24} />, style: { top: "80%", left: "70%" } },
  { icon: <SiPostgresql className="text-blue-400" size={24} />, style: { top: "50%", left: "30%" } },
  { icon: <SiSocketdotio className="text-gray-300" size={24} />, style: { top: "20%", left: "20%" } },
  { icon: <FaDatabase className="text-purple-400" size={24} />, style: { top: "70%", left: "50%" } },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-16 py-16 md:py-20 bg-[#0d0d10] text-white overflow-hidden"
    >
      {/* 🌌 Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* 🌟 Floating Tech Icons */}
      {floatingTechs.map((tech, index) => (
        <div
          key={index}
          className="absolute animate-floatTech hidden sm:block"
          style={{ ...tech.style, animationDelay: `${index * 0.5}s` }}
        >
          {tech.icon}
        </div>
      ))}

      {/* LEFT SIDE */}
      <div className="relative z-10 max-w-2xl text-center md:text-left mb-10 md:mb-0 flex-1">
        {/* 🟢 Active Internship Badge */}
        <div className="relative flex items-center gap-2 mx-auto md:mx-0 px-5 py-2 mb-4 border border-cyan-500 rounded-full text-cyan-400 bg-[#0f0f14] shadow-[0_0_10px_rgba(0,255,255,0.3)]">
          {/* Glowing Active Circle */}
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span>Open to Internship Opportunities</span>
        </div>

        {/* 🔥 Animated Slogan */}
        <AnimatedSlogan />

        <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 px-2 sm:px-0">
          Computer Science student passionate about building{" "}
          <span className="text-cyan-400">scalable web applications</span>. Experienced in React, Node.js, and modern development tools.{" "}
          <span className="text-cyan-400">Ready to make an impact.</span>
        </p>

        {/* 🎯 Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8"> 
          {/* GitHub Button with Icon */}
          <a
            href="https://github.com/Jayinfo77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition-transform duration-300 font-semibold"
          >
            <FaGithub className="text-xl" />
            View My Work
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/jay-pratap-mahatto-246808384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto border border-gray-600 rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300 font-semibold"
          >
            <FaLinkedin className="text-xl text-blue-500" />
            Let’s Connect
          </a>
        </div>

        {/* 💻 Tech Stack Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
          {[
            { icon: <FaReact className="text-cyan-400" size={22} />, name: "React + Vite" },
            { icon: <FaNodeJs className="text-green-500" size={22} />, name: "Node.js" },
            { icon: <SiExpress className="text-gray-300" size={20} />, name: "Express.js" },
            { icon: <SiMongodb className="text-green-400" size={20} />, name: "MongoDB" },
            { icon: <SiPostgresql className="text-blue-400" size={20} />, name: "PostgreSQL" },
            { icon: <SiSocketdotio className="text-gray-300" size={20} />, name: "Socket.IO" },
            { icon: <SiTailwindcss className="text-sky-400" size={20} />, name: "Tailwind CSS" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-xl hover:bg-gray-700 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE (Profile Card) */}
      <div className="relative z-10 flex-1 w-full max-w-sm md:max-w-md">
        <ProfileCard />
      </div>
    </section>
  );
};

export default Hero;
