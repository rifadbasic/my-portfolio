import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    name: "Hisab",
    description: "Ledger management system with authentication, expense tracking, and data visualization.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Stripe",
      "Firebase",
      "JWT",
      "Tailwind CSS",
      "React Router",
    ],
    link: "https://hisab-app-zeta.vercel.app/",
    image: "https://i.ibb.co.com/YFnqvjFJ/Screenshot-2026-06-26-190144.png",
  },
  {
    name: "Gallery",
    description: "Image gallery platform with user authentication and image upload functionality.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Stripe",
      "Firebase",
      "JWT",
      "Tailwind CSS",
      "React Router",
    ],
    link: "https://gallery-client-app.vercel.app/",
    image: "https://i.ibb.co.com/93ygckjh/Screenshot-2026-06-26-185749.png",
  },
  {
    name: "News Nation",
    description:
      "News Portal with premium subscription, payment gateway and admin dashboard.",
    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Stripe",
      "Firebase",
      "JWT",
      "Tailwind CSS",
      "React Router",
    ],
    link: "https://newspaper-client-be1ba.web.app/",
    image: "https://i.ibb.co.com/84ctfphS/Screenshot-2026-06-26-172724.png",
  },
  {
    name: "Beauty & Care",
    description:
      "Complete beauty and wellness platform with user profiles, and admin management.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Node",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    link: "https://beauty-care-client.vercel.app/",
    image: "https://i.ibb.co.com/qLJHjLcX/Screenshot-2026-06-26-192441.png",
  },
];

export default function Project() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-white font-bold text-center mb-16" data-aos="fade-up" >
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10" data-aos="fade-right" data-aos-delay="100">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[430px] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                className="absolute w-full h-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 duration-500"></div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <h2 className="text-3xl font-bold text-blue-400">
                  {project.name}
                </h2>

                <p className="text-gray-200 mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400 text-sm text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="mt-6 w-fit px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="200">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold hover:scale-105 duration-300 shadow-xl"
          >
            See More Projects
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
