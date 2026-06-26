import React from "react";
import Marquee from "react-fast-marquee";

import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaDatabase,
  FaHtml5,
  FaGithub,
  FaLaravel,
  FaFigma,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiArduino,
  SiPostman,
  SiFirebase,
  SiReactrouter,
  SiExpress,
} from "react-icons/si";

import {
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandVercel,
  TbBrandVscode,
} from "react-icons/tb";

import { IoLogoJavascript } from "react-icons/io";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-yellow-400" />,
    },
    {
      name: "React Bits",
      icon: <TbBrandReactNative className="text-blue-400" />,
    },
    {
      name: "TypeScript",
      icon: <TbBrandTypescript className="text-blue-600" />,
    },
  ],

  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    {
      name: "Next.js",
      icon: <TbBrandNextjs className="text-black dark:text-white" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  ],

  "Tools & Others": [
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
    },
    { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    {
      name: "Vercel",
      icon: <TbBrandVercel className="text-black dark:text-white" />,
    },
    { name: "Arduino", icon: <SiArduino className="text-cyan-500" /> },
    { name: "MS Office", icon: <FaDatabase className="text-yellow-500" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
  ],
};

const SkillCard = ({ skill }) => {
  return (
    <div className="mx-3 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-3 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,.35)] transition-all duration-300">
      <div className="text-3xl">{skill.icon}</div>

      <span className="font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
        {skill.name}
      </span>
    </div>
  );
};

const SkillRow = ({ title, color, lineColor, items }) => {
  return (
    <div className="mb-14">
      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <h3
          className={`text-xl md:text-2xl font-bold whitespace-nowrap ${color}`}
        >
          {title}
        </h3>

        {/* Gradient Line */}
        <div
          className={`flex-1 h-[1px] rounded-full bg-gradient-to-r ${lineColor}`}
        ></div>
      </div>

      {/* Marquee */}
      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <Marquee
          speed={55}
          direction="left"
          pauseOnHover
          autoFill
          gradient={false}
        >
          {items.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <section id="skills" className="py-24 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center text-5xl text-white font-extrabold mb-16"
          data-aos="fade-up"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div data-aos="fade-left" data-aos-delay="100">
          <SkillRow
            title="Frontend"
            color="text-cyan-400"
            lineColor="from-cyan-500 via-cyan-300/40 to-transparent"
            items={skills.Frontend}
          />

          <SkillRow
            title="Backend"
            color="text-green-400"
            lineColor="from-green-500 via-green-300/40 to-transparent"
            items={skills.Backend}
          />

          <SkillRow
            title="Tools & Others"
            color="text-orange-400"
            lineColor="from-orange-500 via-orange-300/40 to-transparent"
            items={skills["Tools & Others"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
