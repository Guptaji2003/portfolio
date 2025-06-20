import React from "react";
import ScrollingEffect from "../components/ScrollingEffect";
import About from "../components/About";
import HeadPage from "../components/HeadPage";
import Project from "../components/Project";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import SectionAnimation from "../components/SectionAnimation";

const Hero = () => {
  SectionAnimation();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <HeadPage />
        <ScrollingEffect />
        <About />
        <Project />
        <Certificate />
        <Contact />
      </div>
    </>
  );
};

export default Hero;
