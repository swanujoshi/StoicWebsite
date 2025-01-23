import React from "react";
import "./IndustriesWeServe.css";

// Sample background image URLs (replace with your actual URLs or paths)
const industries = [
  { name: "Banking & Finance", bgImage: "url('./image/Banking&Finance.avif')" },
  { name: "Manufacturing", bgImage: "url('./image/Manufacturing.avif')" },
  {
    name: "Technology & Software",
    bgImage: "url('./image/Technology&Software.avif')",
  },
  {
    name: "Healthcare & Lifescience",
    bgImage: "url('./image/Healthcare&Lifescience.avif')",
  },
  {
    name: "Logistics & Supply Chain",
    bgImage: "url('./image/Logistics&Supply Chain.avif')",
  },
  {
    name: "E-Commerce & Retail",
    bgImage: "url('./image/E-Commerce&Retail.avif')",
  },
  {
    name: "Educational Institutions",
    bgImage: "url('./image/EducationalInstitutions.avif')",
  },
  { name: "Government", bgImage: "url('./image/Goverment.avif')" },
];

const ServicePage = () => {
  return (
    <section className="industries-section">
      <h2>
        Industries <span>We Serve</span>
      </h2>
      <p className="section-description">
        Delivering innovative cloud applications and business consultation
        services globally.
      </p>
      <div className="industries-content">
        {industries.map((industry, index) => (
          <div
            className="industry-card"
            key={index}
            style={{ backgroundImage: industry.bgImage }}
          >
            <h3>{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
