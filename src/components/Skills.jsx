// src/components/Skills.jsx
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiSocketdotio,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiApollographql,
  SiPostman,
  SiPython,
} from "react-icons/si";
import { VscDebugConsole } from "react-icons/vsc";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" />, desc: "Modern UI library" },
        { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" />, desc: "State management" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, desc: "Core scripting language" },
        { name: "CSS3", icon: <SiCss3 className="text-blue-400" />, desc: "Styling web pages" },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" />, desc: "Utility-first CSS" },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, desc: "Markup language" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "JavaScript runtime" },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" />, desc: "Web framework" },
        { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-400" />, desc: "Real-time communication" },
        { name: "JWT Auth", icon: <SiJsonwebtokens className="text-yellow-400" />, desc: "Authentication tokens" },
        { name: "GraphQL", icon: <SiApollographql className="text-pink-400" />, desc: "API query language" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, desc: "NoSQL database" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, desc: "SQL database" },
        { name: "SQL", icon: <FaDatabase className="text-sky-500" />, desc: "Query language" },
        { name: "Database Design", icon: <FaDatabase className="text-gray-400" />, desc: "Schema & relationships" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" />, desc: "Version control" },
        { name: "GitHub", icon: <FaGithub className="text-gray-200" />, desc: "Repository hosting" },
        { name: "Docker", icon: <FaDocker className="text-blue-400" />, desc: "Containerization" },
        { name: "VS Code", icon: <VscDebugConsole className="text-blue-500" />, desc: "Code editor" },
        { name: "API Testing", icon: <SiPostman className="text-orange-400" />, desc: "Test APIs effectively" },
        { name: "Python", icon: <SiPython className="text-yellow-400" />, desc: "Programming language" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative px-4 sm:px-8 md:px-16 py-16 md:py-24 bg-gradient-to-b from-[#09090e] via-[#0c0c12] to-[#0a0a0d] text-white"
    >
      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-3">
          A comprehensive toolkit for building scalable, secure, and visually stunning applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-[#121217]/90 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-cyan-400 border-b border-cyan-500/20 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 sm:gap-3 bg-gray-800/60 border border-gray-700 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:border-cyan-500/70 hover:bg-gray-700/70 hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
                  title={skill.desc}
                >
                  <span className="text-base sm:text-lg">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
