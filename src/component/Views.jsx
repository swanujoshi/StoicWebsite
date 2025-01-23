import React, { useEffect, useState } from "react";
import "./Views.css";

function Views() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component is mounted
    setTimeout(() => {
      setShowContent(true);
    }, 100); // Delay for transition to be noticeable
  }, []);

  return (
    <section className={`views ${showContent ? "show" : ""}`}>
      <div className="container">
        <div className={`about-content ${showContent ? "show" : ""}`}>
          <h2>
            Global Solutions, <br /> <span>Stoic Approach.</span>
          </h2>
          <p>
            At Stoic & Salamander Global Corporation, our philosophy is deeply
            rooted in the Stoic approach. We value resilience, wisdom, and
            rationality, striving to remain steadfast in the face of challenges
            while focusing on what truly matters.
          </p>
          <div className="stats">
            <div className="stat" style={{ marginRight: "20px" }}>
              <h3 style={{ fontSize: "3rem", fontWeight: "normal" }}>1500+</h3>
              <p>Global Clients</p>
            </div>
            <div className="stat">
              <h3 style={{ fontSize: "3rem", fontWeight: "normal" }}>10 Mn+</h3>
              <p>Reduced Yearly Overhead Cost</p>
            </div>
          </div>
        </div>
        <div className={`about-image ${showContent ? "show" : ""}`}>
          <img src="/image/image2.webp" alt="man on the phone" />
        </div>
      </div>
    </section>
  );
}

export default Views;
