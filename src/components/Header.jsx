import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { ArrowDownCircle } from "lucide-react";

import ProfileCard from "./portfolioCard/ProfileCard";
import TextType from "../utils/TextType";
import GlareHover from "../utils/GlareHover";
import CircleH from "../utils/circle/CircleH";
import HeaderBg from "../utils/HeaderBg";

const Header = () => {
  return (
    <header className="relative overflow-hidden w-full min-h-[90vh] lg:min-h-screen flex items-center px-6 md:px-10 py-16">
      {/* Animated Background */}
      <HeaderBg />

      {/* Top Left Circle */}
      <div
        className="
          absolute
          -top-36 -left-36
          sm:-top-48 sm:-left-48
          md:-top-60 md:-left-60
          lg:-top-[320px] lg:-left-[320px]
          scale-50
          sm:scale-75
          lg:scale-100
          origin-top-left
          opacity-50
          blur-[1px]
          pointer-events-none
          z-0
        "
      >
        <CircleH size={650} />
      </div>

      {/* Bottom Right Circle */}
      <div
        className="
          absolute
          -bottom-36 -right-36
          sm:-bottom-48 sm:-right-48
          md:-bottom-60 md:-right-60
          lg:-bottom-[320px] lg:-right-[320px]
          scale-50
          sm:scale-75
          lg:scale-100
          origin-bottom-right
          opacity-50
          rotate-180
          blur-[1px]
          pointer-events-none
          z-0
        "
      >
        <CircleH size={650} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left */}
        <div className="flex-1 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Khan Rifad Hossain
            </span>
          </h1>

          <p className="mt-5 text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-300">
            <TextType
              text={[
                "Front-End Developer",
                "Web Developer",
                "MERN Stack Developer",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
            />
          </p>

          <p className="mt-5 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-8">
            Passionate about crafting modern, responsive web applications with
            clean code, smooth animations, and beautiful UI/UX experiences.
          </p>

          {/* Social + Resume */}
          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-center justify-center lg:justify-start gap-8">
            <div className="flex flex-col items-center lg:items-start">
              <span className="uppercase text-sm font-semibold tracking-[0.3em] text-sky-500 mb-4">
                Follow Me
              </span>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/rifadbasic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:scale-110 hover:border-indigo-500 hover:text-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,.5)]"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/rifadbasic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:scale-110 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.5)]"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://www.facebook.com/khan.rifad.hossain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-500 hover:scale-110 hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,.5)]"
                >
                  <FaFacebook size={20} />
                </a>

                <a href="/khan_rifad_hossain.pdf" download className="ml-3">
                  <GlareHover
                    glareColor="#ffffff"
                    glareOpacity={0.3}
                    glareAngle={-30}
                    glareSize={300}
                    transitionDuration={800}
                    playOnce={false}
                  >
                    <div className="flex items-center gap-2 font-semibold text-white px-6 py-3">
                      Resume
                      <ArrowDownCircle size={20} />
                    </div>
                  </GlareHover>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <ProfileCard />
        </div>
      </div>
    </header>
  );
};

export default Header;
