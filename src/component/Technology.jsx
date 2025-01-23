import React from "react";
import "./Technology.css";

const technologies = [
  {
    name: "React JS",
    description: "A JavaScript library for building user interfaces.",
    icon: "🔵",
  },
  {
    name: "Node JS",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: "🟢",
  },
  {
    name: "Python",
    description:
      "A versatile language for web development, data science, and more.",
    icon: "🐍",
  },
  {
    name: "AWS",
    description: "Cloud computing services platform by Amazon.",
    icon: "☁️",
  },
  {
    name: "Docker",
    description:
      "A platform for developing, shipping, and running applications.",
    icon: "🐳",
  },
];

const Technology = () => {
  return (
    <div className="technology-container">
      <h1 className="page-title">
        <span className="highlighted-text">Technologies</span> That Shape the
        Future
      </h1>
      <div className="card-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="card">
            <div className="card-icon">{tech.icon}</div>
            <h2 className="card-title">{tech.name}</h2>
            <p className="card-description">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
