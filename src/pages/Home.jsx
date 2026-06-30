import React from "react";
import Header from "../components/Header.jsx";
import Project from "../pages/Project.jsx";
import Skill from "../components/Skill.jsx";
import Sabout from "../components/Sabout.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Sabout />
      <Project />
      <Skill />
    </div>
  );
};

export default Home;
