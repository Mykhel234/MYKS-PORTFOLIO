import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Project from "./Slider";
import MyServices from "./Services";
import MySkill from "./MySkill";
import NextProject from "./NextProject";

const Home = () => {
  return (
    <div>
      <Hero />
      <MyServices />
      <MySkill />
      <Project />
      <NextProject/>
      <Footer />
    </div>
  );
};

export default Home;
