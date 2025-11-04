import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaPython } from "react-icons/fa";
import { SiVite, SiTailwindcss, SiExpress, SiMongodb, SiTensorflow } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import damageImg from "../assets/images/damage.png";
import libraryImg from "../assets/images/library.png";

// Tech icons mapping
const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  Vite: <SiVite className="text-purple-400" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Python: <FaPython className="text-yellow-400" />,
  DeepLearning: <SiTensorflow className="text-orange-500" />,
};

// Projects data
const projects = [
  {
    title: "Powered Vehicle Damage Estimator",
    description:
      "Deep learning model using CNNs and regression to automatically estimate vehicle damage costs with high accuracy.",
    tech: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB", "Python", "DeepLearning"],
    image: damageImg,
    github: "https://github.com/Jayinfo77/powered-vehicle-damage-estimator-website.git",
    live: "https://github.com/Jayinfo77/Powered-Vehicles-Damaged-Estimator",
  },
  {
    title: "Library Management System",
    description:
      "A full MERN stack system for managing books, users, and library transactions with a clean and responsive interface.",
    tech: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    image: libraryImg,
    github: "https://github.com/Jayinfo77/Library-Management-System.git",
    live: "https://github.com/Jayinfo77/Library-Management-System",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="px-5 sm:px-8 md:px-16 py-14 md:py-20 bg-[#0d0d10] text-white"
    >
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Real-world applications showcasing my technical expertise and problem-solving abilities.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-900/70 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/70 overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-blue-400/10 opacity-0 hover:opacity-100 blur-2xl transition duration-700 pointer-events-none" />

            {/* Image */}
            <motion.div
              className="overflow-hidden rounded-xl mb-5 relative z-10"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-56 sm:h-64 object-cover hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-white tracking-wide relative z-10">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed relative z-10">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-5 relative z-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 bg-gray-800/60 px-3 py-1 rounded-lg text-xs sm:text-sm text-gray-200 hover:bg-gray-700/70 transition transform hover:scale-110"
                >
                  {techIcons[tech]}
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center gap-3 flex-wrap relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm sm:text-base text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition w-full sm:w-auto"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 px-4 py-2 rounded-lg transition w-full sm:w-auto"
              >
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
