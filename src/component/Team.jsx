import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed and imported
import "./Team.css";

const teamMembers = [
  {
    name: "Charul Jagtap",
    title: "Director & CEO",
    photo: "/image/charul_jagtap.avif",
  },
  {
    name: "Jessica Antony",
    title: "Client Success",
    photo: "/image/jessica.avif",
  },
  {
    name: "Pavan Sonar",
    title: "Project Head",
    photo: "/image/pawan.avif",
  },
  {
    name: "Shubham Chaudhari",
    title: "Project Manager",
    photo: "/image/shubham.avif",
  },
  {
    name: "Shruti Khune",
    title: "Senior Developer",
    photo: "/image/shruti.avif",
  },
  {
    name: "Chaitali Payghan",
    title: "Process Consultant",
    photo: "/image/chaitali.avif",
  },
  {
    name: "Swanand Joshi",
    title: "Software Developer",
    photo: "/image/swanand.jpg",
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="management-title">
        Meet Our <span className="highlight-management">Management</span>
      </h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-tile">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.title}</p>
          </div>
        ))}
      </div>
      {/* Add the button below */}
      <Link to="/team">
        <button className="explore-button-team">
          Explore All Team Members
        </button>
      </Link>
    </div>
  );
};

export default Team;
