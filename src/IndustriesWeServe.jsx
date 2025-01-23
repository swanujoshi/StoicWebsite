import React from "react";
import "./IndustriesWeServe.css";

// Sample image imports (replace with your actual images)
import bankingImage from "./image/Banking&Finance.avif";
import manufacturingImage from "./images/manufacturing.png";
import techImage from "./images/technology.png";
import healthcareImage from "./images/healthcare.png";
import logisticsImage from "./images/logistics.png";
import retailImage from "./images/retail.png";
import educationImage from "./images/education.png";
import governmentImage from "./images/government.png";

const industries = [
  { name: "Banking & Finance", image: bankingImage },
  { name: "Manufacturing", image: manufacturingImage },
  { name: "Technology & Software", image: techImage },
  { name: "Healthcare & Lifescience", image: healthcareImage },
  { name: "Logistics & Supply Chain", image: logisticsImage },
  { name: "E-Commerce & Retail", image: retailImage },
  { name: "Educational Institutions", image: educationImage },
  { name: "Government", image: governmentImage },
];

const IndustriesWeServe = () => {
  return (
    <section className="industries-section">
      <h2>
        Industries <span>We Serve</span>
      </h2>
      <div className="industries-content">
        {industries.map((industry, index) => (
          <div className="industry-card" key={index}>
            <img
              src={industry.image}
              alt={industry.name}
              className="industry-image"
            />
            <h3>{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
