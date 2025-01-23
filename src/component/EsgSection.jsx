import React from "react";
import "./EsgSection.css";

function EsgSection() {
  return (
    <section className="esg-section">
      <div className="container">
        <div className="image-container">
          <img src="/image/building.avif" alt="Building image" />
        </div>
        <div className="content-container">
          <h2>
            Leading the Charge <span>in ESG Excellence</span>
          </h2>
          <p>
            At Stoic & Salamander Global Corporation, we understand that today's
            most successful businesses are those that are committed to
            Environmental, Social, and Governance (ESG) principles. Our expert
            ESG services are designed to integrate sustainability seamlessly
            into your strategy, ensuring not just compliance, but genuine impact
            and growth. Stay ahead with cutting-edge tools and methodologies
            that redefine ESG excellence. We offer bespoke ESG strategies that
            align with your unique business goals and industry requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EsgSection;
