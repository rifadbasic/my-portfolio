// src/data/certificateData.js

import certificate1 from "../assets/certificates/certificates-01.jpg";
import certificate2 from "../assets/certificates/02.jpg";
import certificate3 from "../assets/certificates/web.jpg";

export const certificateData = [
  {
    id: 1,
    title: "MERN Stack Web Development",
    provider: "Programming Hero",
    duration: "6 Months Internship",
    image: certificate1,
    drive:
      "https://drive.google.com/file/d/1bWJhbFn4ylHsTief2HFQekFkh7xrLXDc/view?usp=sharing",
    verified: true,
    featured: true,
  },

  {
    id: 2,

    title: "Cyber Hygiene",

    provider: "SAJIDA FOUNDATION",

    duration: "3 days training",

    image: certificate2,

    drive:
      "https://drive.google.com/file/d/1PbLM6GotfXUFOTH3NOQUJUVOBY8z6Q8y/view?usp=sharing",

    verified: true,

    featured: false,
  },

  {
    id: 3,

    title: "Web Development on PHP",

    provider: "Bangladesh Computer Council",

    duration: "4 Months Internship",

    image: certificate3,

    drive:
      "https://drive.google.com/file/d/1sOnldURB1P722UCsK2qelBP2XR8rrPjw/view?usp=sharing",

    verified: true,

    featured: true,
  },
];
