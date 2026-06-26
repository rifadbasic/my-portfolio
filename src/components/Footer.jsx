import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
  const links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <footer
      data-aos="fade-up"
      className="
      relative
      mt-24
      overflow-hidden
      border-t
      border-white/10
      bg-white/40
      dark:bg-black/20
      backdrop-blur-xl
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        h-72
        w-72
        rounded-full
        bg-cyan-500/20
        blur-[120px]
        text-white
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >
          {/* Brand */}

          <div className="space-y-5">
            <h1
              className="
              text-4xl
              font-black
              bg-gradient-to-r
              from-pink-500
              via-cyan-400
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >
              rifadbasic
            </h1>

            <p
              className="
              text-gray-600
              dark:text-gray-300
              leading-7
              "
            >
              MERN Stack Developer passionate about creating scalable, modern
              and user-friendly web applications.
            </p>

            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/rifadbasic"
                target="_blank"
                rel="noreferrer"
                className="
                p-3
                rounded-full
                bg-white/100
                border
                border-white/10
                hover:bg-black
                hover:text-white
                hover:-translate-y-2
                transition-all
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rifadbasic/"
                target="_blank"
                rel="noreferrer"
                className="
                p-3
                rounded-full
                bg-white/100
                border
                border-white/10
                hover:bg-blue-600
                hover:text-white
                hover:-translate-y-2
                transition-all
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="
                p-3
                rounded-full
                bg-white/100
                border
                border-white/10
                hover:bg-blue-500
                hover:text-white
                hover:-translate-y-2
                transition-all
                "
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div className="text-white">
            <h3 className="text-xl font-bold mb-5">Navigation</h3>

            <ul className="space-y-3">
              {links.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="
                    text-gray-600
                    dark:text-gray-300
                    hover:text-cyan-500
                    transition
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}

          <div className="text-white">
            <h3 className="text-xl font-bold mb-5">Services</h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>Frontend Development</li>

              <li>MERN Stack Development</li>

              <li>Responsive UI Design</li>

              <li>API Integration</li>
            </ul>
          </div>

          {/* Contact */}

          <div className="text-white">
            <h3 className="text-xl font-bold mb-5">Contact</h3>

            <div
              className="
            flex
            items-center
            gap-3
            text-gray-600
            dark:text-gray-300
            "
            >
              <FaEnvelope className="text-cyan-500" />

              <span>krifad02@gmail.com</span>
            </div>

            <Link to="/contact">
              <button
                className="
            mt-6
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            font-semibold
            hover:scale-105
            transition
            "
              >
                Let's Work Together
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
        mt-14
        pt-8
        border-t
        border-white/10
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-5
        "
        >
          <p
            className="
          text-sm
          text-gray-500
          dark:text-gray-400
          flex
          items-center
          gap-2
          "
          >
            © {new Date().getFullYear()} rifadbasic. Made with
            <FaHeart className="text-red-500" />
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
  p-3
  rounded-full
  bg-cyan-500
  text-white
  hover:scale-110
  transition-all
  duration-300
  shadow-lg
  hover:shadow-cyan-500/50
  "
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
