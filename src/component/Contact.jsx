import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      details: message,
    };

    try {
      const response = await fetch("http://localhost:8080/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      alert("Data Submitted Successfully!!");
      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error:", error.message);
      alert("Data Not Submitted !!");
    }
  };

  return (
    <section className="contact">
      <h2>
        Get in touch with our
        <br /> team.
      </h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="contact-info">
        <p>
          <span>Phone:</span> 020-68280688 / +91 7276193805
        </p>
        <p>
          <span>Email:</span> office@stoicsalamander.com
        </p>
        <span>Registered Address:</span>
        <p>Office 01, Level 8, Wing B, City Vista,</p>
        <p>Kharadi, Pune, Maharashtra, India 411014</p>
      </div>
    </section>
  );
}

export default Contact;
