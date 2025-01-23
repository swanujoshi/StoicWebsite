import React from "react";
import "./BusinessServices.css";

const services = [
  {
    title: "Business Consulting and Strategy",
    description:
      "Provide strategic consulting services to help businesses formulate and execute digital transformation and growth strategies.",
    link: "/business-consulting-and-strategy",
  },
  {
    title: "Digital Transformation & Services",
    description:
      "Facilitate digital transformation initiatives across industries, focusing on enhancing customer experiences, operational efficiency, and innovation.",
    link: "/digital-transformation-services",
  },
  {
    title: "Data and Analytics Services",
    description:
      "Offer data management, integration, and analytics services to generate actionable insights from data by implementing advanced analytics & AI.",
    link: "/data-and-analytics-services",
  },
  {
    title: "Technology Services & Products",
    description:
      "From software development and cloud services to cybersecurity and IT consulting, we offer end-to-end technology solutions tailored to your business needs.",
    link: "/technology-services-and-products",
  },
  {
    title: "Business Process & Services",
    description:
      "Offer outsourcing and managed services for business processes, including finance and accounting, human resources, and customer support operations.",
    link: "/business-process-services",
  },
  {
    title: "Cloud & Infrastructure Services",
    description:
      "Offer cloud advisory, migration, and management services to optimize IT infrastructure and enable scalable and secure cloud solutions.",
    link: "/cloud-infrastructure-services",
  },
  {
    title: "Market Research & ESG Services",
    description:
      "We offer you comprehensive market analysis for strategic decision-making and tailored ESG strategies to enhance your sustainability and governance performance.",
    link: "/market-research-and-esg-services",
  },
  {
    title: "Edutech & Institutions",
    description:
      "Tailor services to meet the unique needs of educational institutes and educational platforms with bespoke learning management systems, exam portals software.",
    link: "/edutech-and-institutions",
  },
];

const BusinessServices = () => {
  return (
    <div className="business-services">
      <h1 className="business-services-title">
        Unlock Possibilities with <span>Business Services</span>
      </h1>
      <div className="business-services-cards">
        {services.map((service, index) => (
          <div key={index} className="business-card">
            <h2 className="business-card-title">{service.title}</h2>
            <p className="business-card-description">{service.description}</p>
            <a href={service.link} className="business-card-link">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessServices;
