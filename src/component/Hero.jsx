import React, { useEffect, useState } from "react";
import "./Hero.css";
import Services from "./Service";

function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setTimeout(() => {
      setShowContent(true);
    }, 100); // Delay to ensure the transition is noticeable
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className={`hero-content ${showContent ? "show" : ""}`}>
          <div className="hero-text">
            <h1>
              Delivering Enterprise <br />
              Solutions <span>Globally</span>.
            </h1>
          </div>
          <div className="services-section">
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
