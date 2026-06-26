import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Hisab",
    image: "https://i.ibb.co.com/YFnqvjFJ/Screenshot-2026-06-26-190144.png",
    description: "Ledger management system.",
    live: "https://hisab-app-zeta.vercel.app/",
    client: "#",
    server: "#",
    tech: ["React", "Express"],
  },
  {
    name: "Gallery",
    image: "https://i.ibb.co.com/93ygckjh/Screenshot-2026-06-26-185749.png",
    description: "Image gallery platform.",
    live: "https://gallery-client-app.vercel.app/",
    client: "#",
    server: "#",
    tech: ["React", "MongoDB"],
  },

  {
    name: "Beauty & Care",
    image: "https://i.ibb.co.com/qLJHjLcX/Screenshot-2026-06-26-192441.png",
    description: "Shopping website.",
    live: "https://beauty-care-client.vercel.app/",
    client: "#",
    server: "#",
    tech: ["React", "Node"],
  },
  {
    name: "Library Management",
    image: "https://i.ibb.co.com/1jHJtYS/Screenshot-2026-06-26-172507.png",
    description: "Modern library management system.",
    live: "https://library-client-322cb.web.app/",
    client: "#",
    server: "#",
    tech: ["React", "Node", "MongoDB"],
  },

  {
    name: "News Nation",
    image: "https://i.ibb.co.com/84ctfphS/Screenshot-2026-06-26-172724.png",
    description: "Premium newspaper website.",
    live: "https://newspaper-client-be1ba.web.app/",
    client: "#",
    server: "#",
    tech: ["React", "Stripe", "Firebase"],
  },

  {
    name: "Hotel Booking",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
    description: "Hotel reservation platform.",
    live: "#",
    client: "#",
    server: "#",
    tech: ["React"],
  },

  {
    name: "Task Manager",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description: "Task management app.",
    live: "#",
    client: "#",
    server: "#",
    tech: ["React"],
  },

  {
    name: "Fitness Tracker",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
    description: "Workout tracking app.",
    live: "#",
    client: "#",
    server: "#",
    tech: ["React"],
  },

  {
    name: "Chat App",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    description: "Realtime chat application.",
    live: "#",
    client: "#",
    server: "#",
    tech: ["Socket.io"],
  },
];

export default function AllProjects() {
  return (
    <section className="min-h-screen py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-16">
          All Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 duration-500"
            >
              <img src={project.image} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  {project.name}
                </h2>

                <p className="text-slate-300 mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 my-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    target="_blank"
                    href={project.live}
                    className="bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.client}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-white"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href={project.server}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-white"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link
            to="/"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
