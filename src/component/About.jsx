import React from "react";
import "./About.css";
import AboutSection from "./AboutSection";
import Trusted from "./Trusted";
import "./AboutSection.css";

function About() {
  return (
    <div className="about-contentpage">
      <img
        src="/image/buisness.avif"
        alt="Business Solutions"
        className="about-imagepage"
      />
      <AboutSection />
      <Trusted />
    </div>
  );
}

export default About;
