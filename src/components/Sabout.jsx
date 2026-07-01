import React from "react";
import {
  FaCheckCircle,
  FaGraduationCap,
  FaCertificate,
  FaLightbulb,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import CoderProfileCard from "./portfolioCard/CoderProfileCard";
import CertificationSection from "../components/certificate/CertificationSection";

const Sabout = () => {
  const highlights = [
    "Full Stack Web Development",
    "Responsive UI Design",
    "REST API Integration",
    "Firebase Authentication",
    "MongoDB Database",
    "Clean & Maintainable Code",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-5 lg:px-10 text-white"
    >
      {/* Blur */}
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}

        <div className="text-center mb-20" data-aos="fade-up">
          <span className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            About Me
          </span>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Who{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              I Am
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 leading-8">
            Passionate MERN Stack Developer focused on creating scalable, modern
            and responsive web applications with clean architecture, optimized
            performance and elegant UI.
          </p>
        </div>

        {/* About */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold mb-6">A Little About Myself</h3>

            <p className="leading-8 text-gray-600 dark:text-gray-300">
              I enjoy transforming ideas into modern digital experiences. My
              passion lies in building responsive, scalable and user-friendly
              web applications while continuously learning new technologies and
              improving my problem-solving skills.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-4 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,.2)] transition-all duration-500"
                >
                  <FaCheckCircle className="text-cyan-400 group-hover:scale-110 duration-300" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center" data-aos="fade-left">
            <CoderProfileCard />
          </div>
        </div>
        {/* ================= Education & Profession ================= */}

        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          {/* Education */}

          <div
            data-aos="fade-right"
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border border-cyan-500/20
            bg-white/60 dark:bg-white/5
            backdrop-blur-xl
            p-8
            hover:-translate-y-2
            hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(6,182,212,.25)]
            transition-all
            duration-500
            "
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                <FaGraduationCap className="text-3xl text-cyan-400 group-hover:rotate-12 duration-300" />
              </div>

              <div>
                <p className="uppercase tracking-[3px] text-cyan-400 text-sm">
                  Education
                </p>

                <h3 className="text-2xl font-bold">Diploma in Engineering</h3>
              </div>
            </div>

            <p className="text-cyan-400 font-semibold">
              Computer Science & Technology
            </p>

            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Khulna Polytechnic Institute
            </p>

            <div className="flex justify-between mt-8">
              <div>
                <p className="text-sm text-gray-500">Session</p>

                <h4 className="font-semibold">2021 - 2025</h4>
              </div>

              <div>
                <p className="text-sm text-gray-500">CGPA</p>

                <h4 className="font-semibold text-cyan-400">3.52 / 4.00</h4>
              </div>
            </div>
          </div>

          {/* Profession */}

          <div
            data-aos="fade-left"
            className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border border-purple-500/20
            bg-white/60 dark:bg-white/5
            backdrop-blur-xl
            p-8
            hover:-translate-y-2
            hover:border-purple-400
            hover:shadow-[0_0_40px_rgba(168,85,247,.25)]
            transition-all
            duration-500
            "
          >
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <FaBriefcase className="text-3xl text-purple-400 group-hover:rotate-12 duration-300" />
              </div>

              <div>
                <p className="uppercase tracking-[3px] text-purple-400 text-sm">
                  Current Profession
                </p>

                <h3 className="text-2xl font-bold">MERN Stack Developer</h3>
              </div>
            </div>

            <p className="text-purple-400 font-semibold">
              Open to Internship & Full-Time Opportunities
            </p>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
              Passionate about developing scalable full-stack web applications
              using React, Node.js, Express.js and MongoDB while continuously
              improving software architecture, backend development and UI/UX
              experiences.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-purple-500/10
                  text-purple-300
                  text-sm
                  border
                  border-purple-500/20
                  hover:bg-purple-500
                  hover:text-white
                  transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* ================= CURRENT FOCUS ================= */}

        <div className="mt-24" data-aos="fade-up">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
              What I'm Doing
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Current{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Focus
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaCode />,
                title: "Full Stack Apps",
                desc: "Building scalable MERN applications with modern architecture.",
              },
              {
                icon: <FaLightbulb />,
                title: "Advanced React",
                desc: "Learning advanced React patterns and performance optimization.",
              },
              {
                icon: <FaBriefcase />,
                title: "Backend Skills",
                desc: "Improving API security, JWT authentication and database design.",
              },
              {
                icon: <FaCertificate />,
                title: "Continuous Learning",
                desc: "Exploring new technologies and best development practices.",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="
                  group
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-white/60
                  dark:bg-white/5
                  backdrop-blur-xl
                  p-7
                  hover:-translate-y-2
                  hover:border-cyan-400
                  hover:shadow-[0_0_35px_rgba(6,182,212,.25)]
                  transition-all
                  duration-500
                "
              >
                <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl group-hover:rotate-12 duration-300">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}

        <CertificationSection />

        {/* ================= CTA ================= */}
      </div>
    </section>
  );
};

export default Sabout;
