// src/components/Contact.jsx
import React from "react";
import { FaEnvelope, FaLinkedin, FaCodeBranch } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-4 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* ✨ Animated background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto text-center">
        {/* 🌟 Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse leading-tight">
          Let’s Build Something Amazing
        </h2>

        {/* 🪶 Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
          I’m passionate about creating{" "}
          <span className="text-cyan-400 font-semibold">scalable, impactful</span>{" "}
          web applications. Currently seeking{" "}
          <span className="text-purple-400 font-semibold">
            internship opportunities
          </span>{" "}
          where I can learn, contribute, and grow as a developer.
        </p>

        {/* 📧 Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16">
          {/* ✅ Opens Gmail directly */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jayinfo55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:scale-105 text-sm sm:text-base md:text-lg font-semibold"
          >
            <FaEnvelope className="text-base sm:text-lg md:text-xl" />
            Send Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jay-pratap-mahatto-246808384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:scale-105 text-sm sm:text-base md:text-lg font-semibold"
          >
            <FaLinkedin className="text-base sm:text-lg md:text-xl" />
            Connect on LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Jayinfo77"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-7 md:px-9 py-2.5 sm:py-3 rounded-full border border-gray-600 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg font-semibold"
          >
            <FaCodeBranch className="text-base sm:text-lg md:text-xl" />
            View GitHub
          </a>
        </div>

        {/* 🧊 Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 text-center px-2">
          {[
            {
              label: "Available",
              value: "For Opportunities",
              color: "from-cyan-500 to-blue-500",
            },
            {
              label: "Remote",
              value: "Work Ready",
              color: "from-green-400 to-teal-500",
            },
            {
              label: "Fast",
              value: "Learner",
              color: "from-purple-500 to-pink-500",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`p-6 sm:p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300`}
            >
              <h3
                className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.label}
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* 🌍 Closing Line */}
        <p className="mt-16 text-gray-500 text-xs sm:text-sm md:text-base">
          Let’s collaborate and create something extraordinary together 🌍
        </p>
      </div>
    </section>
  );
}
