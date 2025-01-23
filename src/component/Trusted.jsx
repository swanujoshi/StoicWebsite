import React from "react";
import "./Trusted.css"; // Import the updated CSS file

const Trusted = () => {
  return (
    <section className="trusted-section">
      <h2>
        Trusted by <span>Leading Companies</span>
      </h2>
      <p className="trusted-description">
        At Stoic & Salamander Global Corporation, our mission is to drive
        business excellence and innovation across various industries. We are
        dedicated to helping our clients achieve sustainable growth by
        leveraging cutting-edge technology, advanced analytics, and deep
        industry insights. Our commitment to delivering exceptional value is
        rooted in our core principles of resilience, wisdom, and rationality.
      </p>
      <div className="trusted-image-container">
        <img
          src="./image/hindustan-matrimonyred.avif"
          alt="Trusted Company"
          className="trusted-image"
        />
      </div>
    </section>
  );
};

export default Trusted;
