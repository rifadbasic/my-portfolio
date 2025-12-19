import React from 'react';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Project from '../pages/Project.jsx';
import Skill from '../components/Skill.jsx';



const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Project/>
      <Skill/>
    </div>
  );
};

export default Home;