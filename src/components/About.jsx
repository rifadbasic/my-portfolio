import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";
import CoderProfileCard from "./portfolioCard/CoderProfileCard";

const About = () => {
  const stats = [
    {
      title: "Projects",
      value: "20+",
      icon: <FaLaptopCode />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Technologies",
      value: "15+",
      icon: <FaCode />,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Learning",
      value: "Daily",
      icon: <FaRocket />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Education",
      value: "Diploma",
      icon: <FaUserGraduate />,
      color: "from-emerald-500 to-green-500",
    },
  ];

  const highlights = [
    "Clean & Maintainable Code",
    "Responsive Web Design",
    "REST API Integration",
    "Authentication System",
    "MongoDB Database",
    "Performance Optimization",
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-5 md:px-10 overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto text-white" data-aos="fade-up">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="uppercase tracking-[6px] text-cyan-500 font-semibold">
            Know Me Better
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 leading-8">
            Passionate MERN Stack Developer focused on building modern, scalable
            and responsive web applications with clean UI, optimized performance
            and great user experience.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}

          <div>
            {/* About Card */}

            {/* Skills Highlight */}

            <div className="mt-10" data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-5">What I Love</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-white/60 dark:bg-white/5 backdrop-blur-md px-5 py-4 hover:border-cyan-500 hover:translate-x-2 transition-all duration-300"
                  >
                    <FaCheckCircle className="text-cyan-500" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5 mt-10" data-aos="fade-right">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-lg"
                >
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${stat.color} text-white text-xl`}
                  >
                    {stat.icon}
                  </div>

                  <h2 className="text-3xl font-black mt-5">{stat.value}</h2>

                  <p className="text-gray-500 dark:text-gray-400">
                    {stat.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div
            className="flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            <CoderProfileCard />
          </div>
        </div>

        {/* ================= EDUCATION & JOURNEY ================= */}

        <div className="mt-24">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="uppercase tracking-[5px] text-cyan-500 font-semibold">
              Academic Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Education{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              My academic journey has provided a solid foundation in computer
              technology while continuously improving my programming and
              problem-solving skills.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}

            <div
              className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500"
              data-aos="fade-up"
            ></div>

            {/* ================= Diploma ================= */}

            <div className="relative mb-14 flex flex-col md:flex-row md:justify-start">
              {/* Dot */}

              <div
                className="absolute left-5 md:left-1/2 md:-translate-x-1/2 h-6 w-6 rounded-full bg-cyan-500 border-[5px] border-white dark:border-slate-900 shadow-[0_0_25px_rgba(6,182,212,.6)]"
                data-aos="fade-up"
              ></div>

              <div className="ml-14 md:ml-0 md:w-[45%]" data-aos="fade-right">
                <div className="rounded-3xl border border-cyan-500/20 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-7 shadow-xl hover:-translate-y-2 hover:border-cyan-400 transition-all duration-500">
                  <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold">
                    2021 - 2025
                  </span>

                  <h3 className="text-2xl font-bold mt-5">
                    Diploma in Engineering
                  </h3>

                  <p className="text-cyan-500 font-medium mt-2">
                    Computer Science & Technology
                  </p>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                    Khulna Polytechnic Institute (BTEB)
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 font-semibold">
                      CGPA : 3.52 / 4.00
                    </span>

                    <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-semibold">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= SSC ================= */}

            <div className="relative flex flex-col md:flex-row md:justify-end">
              {/* Dot */}

              <div
                className="absolute left-5 md:left-1/2 md:-translate-x-1/2 h-6 w-6 rounded-full bg-blue-500 border-[5px] border-white dark:border-slate-900 shadow-[0_0_25px_rgba(59,130,246,.6)]"
                data-aos="fade-up"
              ></div>

              <div className="ml-14 md:ml-0 md:w-[45%]" data-aos="fade-left">
                <div className="rounded-3xl border border-blue-500/20 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-7 shadow-xl hover:-translate-y-2 hover:border-blue-400 transition-all duration-500">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold">
                    2021
                  </span>

                  <h3 className="text-2xl font-bold mt-5">SSC (Madrasah)</h3>

                  <p className="text-blue-500 font-medium mt-2">
                    Darul Quran Siddikia Kamil Madrasah
                  </p>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                    Khulna, Bangladesh
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-semibold">
                      GPA : 5.00 / 5.00
                    </span>

                    <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 font-semibold">
                      Outstanding Result
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PROFESSIONAL EXPERIENCE ================= */}
        <div className="mt-24">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="uppercase tracking-[5px] text-purple-500 font-semibold">
              Career Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Professional{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              My professional journey where I worked on real-world applications,
              collaborated with teams and improved my development skills.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto" data-aos="fade-up">
            {/* Center Line */}

            <div
              className="
      absolute
      left-5
      md:left-1/2
      md:-translate-x-1/2
      top-0
      h-full
      w-[3px]
      bg-gradient-to-b
      from-purple-500
      via-pink-500
      to-indigo-500
      "
            />

            {/* Experience 1 */}

            <div className="relative mb-16 flex md:justify-start">
              {/* Dot */}

              <div
                className="
        absolute
        left-5
        md:left-1/2
        md:-translate-x-1/2
        top-6
        w-6
        h-6
        rounded-full
        bg-purple-500
        border-4
        border-white
        dark:border-slate-900
        shadow-[0_0_25px_rgba(168,85,247,.8)]
        z-10
        "
                data-aos="fade-up"
              />

              <div
                className="
        ml-14
        md:ml-0
        md:w-[45%]
        "
                data-aos="fade-right"
              >
                <div
                  className="
          rounded-3xl
          border
          border-purple-500/20
          bg-white/70
          dark:bg-white/5
          backdrop-blur-xl
          p-7
          shadow-xl
          hover:-translate-y-2
          transition-all
          duration-500
          "
                >
                  <span
                    className="
          inline-block
          px-4
          py-1
          rounded-full
          bg-purple-500/10
          text-purple-500
          text-sm
          font-semibold
          "
                  >
                    2025 - Present
                  </span>

                  <h3 className="text-2xl font-bold mt-5">
                    Junior MERN Stack Developer
                  </h3>

                  <p className="text-purple-500 font-semibold mt-2">
                    TechNova Solutions Ltd.
                  </p>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                    Worked on full-stack web applications using React, Node.js,
                    Express and MongoDB. Developed reusable components, REST
                    APIs and authentication systems.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["React.js", "Node.js", "MongoDB"].map((item, i) => (
                      <span
                        key={i}
                        className="
                px-4
                py-2
                rounded-full
                bg-purple-500/10
                text-purple-500
                text-sm
                "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}

            <div className="relative flex md:justify-end">
              {/* Dot */}

              <div
                className="
        absolute
        left-5
        md:left-1/2
        md:-translate-x-1/2
        top-6
        w-6
        h-6
        rounded-full
        bg-pink-500
        border-4
        border-white
        dark:border-slate-900
        shadow-[0_0_25px_rgba(236,72,153,.8)]
        z-10
        "
                data-aos="fade-up"
              />

              <div
                className="
        ml-14
        md:ml-0
        md:w-[45%]
        "
                data-aos="fade-left"
              >
                <div
                  className="
          rounded-3xl
          border
          border-pink-500/20
          bg-white/70
          dark:bg-white/5
          backdrop-blur-xl
          p-7
          shadow-xl
          hover:-translate-y-2
          transition-all
          duration-500
          "
                >
                  <span
                    className="
          inline-block
          px-4
          py-1
          rounded-full
          bg-pink-500/10
          text-pink-500
          text-sm
          font-semibold
          "
                  >
                    2024 - 2025
                  </span>

                  <h3 className="text-2xl font-bold mt-5">
                    Frontend Developer (Remote)
                  </h3>

                  <p className="text-pink-500 font-semibold mt-2">
                    Creative Web Studio
                  </p>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                    Built responsive websites and interactive UI experiences.
                    Collaborated with designers and optimized frontend
                    performance.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {["React", "Tailwind CSS", "JavaScript"].map((item, i) => (
                      <span
                        key={i}
                        className="
                px-4
                py-2
                rounded-full
                bg-pink-500/10
                text-pink-500
                text-sm
                "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CURRENT FOCUS & CTA ================= */}

        <div className="mt-24 grid lg:grid-cols-2 gap-10">
          {/* Current Focus */}

          <div
            className="
    rounded-3xl
    border border-white/10
    bg-white/60 dark:bg-white/5
    backdrop-blur-xl
    p-8
    shadow-xl
    hover:-translate-y-2
    transition-all
    duration-500
    "
    data-aos="fade-right"
          >
            <span className="text-cyan-500 font-semibold uppercase tracking-[4px]">
              Currently
            </span>

            <h3 className="text-3xl font-black mt-4">What I'm Focused On</h3>

            <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
              Currently I am improving my full-stack development skills and
              building modern web applications using MERN stack technologies. My
              focus is writing clean code, creating scalable solutions and
              learning advanced technologies.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Building Full Stack Applications",
                "Improving Backend Architecture",
                "Learning Advanced React Patterns",
                "Exploring Modern UI/UX Design",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
          flex
          items-center
          gap-3
          p-4
          rounded-xl
          bg-cyan-500/10
          border
          border-cyan-500/20
          "
                >
                  <div className="h-3 w-3 rounded-full bg-cyan-500"></div>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career CTA */}

          <div
            className="
    relative
    overflow-hidden
    rounded-3xl
    p-8
    bg-gradient-to-br
    from-cyan-500
    via-blue-600
    to-indigo-700
    text-white
    shadow-2xl
    "
            data-aos="fade-left"
          >
            {/* Glow */}

            <div
              className="
      absolute
      -top-20
      -right-20
      h-60
      w-60
      rounded-full
      bg-white/20
      blur-3xl
    "
            ></div>

            <h3 className="relative text-3xl font-black">
              Let's Build Something Amazing
            </h3>

            <p className="relative mt-5 text-white/90 leading-8">
              I am always interested in working on exciting projects,
              collaborating with developers and creating impactful digital
              experiences.
            </p>

            {/* Buttons */}

            <div className="relative mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="
        px-7
        py-3
        rounded-full
        bg-white
        text-blue-600
        font-bold
        hover:scale-105
        transition
        "
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="
        px-7
        py-3
        rounded-full
        border
        border-white/50
        font-bold
        hover:bg-white
        hover:text-blue-600
        transition
        "
              >
                Hire Me
              </a>
            </div>

            {/* Mini Stats */}

            <div className="relative mt-10 grid grid-cols-3 gap-4">
              <div
                className="
        rounded-xl
        bg-white/10
        backdrop-blur-md
        p-4
        text-center
        "
              >
                <h4 className="text-2xl font-black">2+</h4>

                <p className="text-sm">Years Coding</p>
              </div>

              <div
                className="
        rounded-xl
        bg-white/10
        backdrop-blur-md
        p-4
        text-center
        "
              >
                <h4 className="text-2xl font-black">20+</h4>

                <p className="text-sm">Projects</p>
              </div>

              <div
                className="
        rounded-xl
        bg-white/10
        backdrop-blur-md
        p-4
        text-center
        "
              >
                <h4 className="text-2xl font-black">∞</h4>

                <p className="text-sm">Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
