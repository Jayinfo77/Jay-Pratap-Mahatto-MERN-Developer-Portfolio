import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MapPin } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export default function ProfileCard() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto px-4">
      {/* Bold glowing card border */}
      <div
        className="absolute -inset-2 rounded-3xl opacity-90 blur-2xl"
        style={{
          background:
            "linear-gradient(270deg, #4f46e5, #8b5cf6, #ec4899, #f43f5e, #4f46e5)",
          backgroundSize: "1000% 1000%",
          animation: "glow 5s ease infinite",
          zIndex: 0,
        }}
      ></div>

      {/* Actual card */}
      <div className="bg-[#141417] p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 rounded-3xl text-center shadow-xl border border-gray-800 relative z-10 hover:border-transparent transition-all duration-300">
        {/* Profile Image */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 mx-auto mb-6 rounded-full overflow-hidden border-3 border-indigo-400">
          <img
            src={profileImg}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name & Details */}
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
          Jay Pratap Mahatto
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-2">
          BSc CSIT Student (Final Semester)
        </p>
        <p className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl mt-1">
          <MapPin size={16} /> Biratnagar, Nepal
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-5 space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-8 2xl:space-x-10 text-gray-400">
          <a
            href="mailto:jayinfo55@gmail.com"
            className="hover:text-indigo-400 transition-colors animate-social-icon"
            title="Email"
          >
            <MdEmail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />
          </a>

          <a
            href="https://www.linkedin.com/in/jay-pratap-mahatto-246808384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#0A66C2] transition-colors animate-social-icon"
            title="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />
          </a>

          <a
            href="https://github.com/Jayinfo77"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors animate-social-icon"
            title="GitHub"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />
          </a>

          <a
            href="https://x.com/MrJay3049?t=ejGFtK7-0QbwqXpoa_gP4Q&s=09"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#1DA1F2] transition-colors animate-social-icon"
            title="Twitter / X"
          >
            <FaXTwitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 2xl:w-10 2xl:h-10" />
          </a>
        </div>
      </div>

      {/* Glow & Social Animations */}
      <style>
        {`
          @keyframes glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes pulse-icon {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(255,255,255,0.3)); }
            50% { transform: scale(1.3); filter: drop-shadow(0 0 12px rgba(0,255,255,0.8)); }
          }

          .animate-social-icon {
            animation: pulse-icon 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
