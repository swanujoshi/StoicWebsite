import React from "react";
import "./Pioneers.css";

function Pioneers() {
  return (
    <section className="pioneers">
      <div className="container">
        <h2>
          Pioneers of Excellence Across <span>Industries</span>
        </h2>
      </div>
      <div className="paragraph">
        <p>
          At Stoic & Salamander Global Corporation, we are dedicated to
          transforming industries with our innovative solutions and unwavering
          commitment to excellence. Our mission is to create value, drive
          progress, and foster sustainable growth across a wide array of
          sectors.
        </p>
      </div>
      <div className="service-cards">
        <div className="service-card">
          <img src="/image/cloud.avif" alt="Service 1" />
          <h3>Enterprise Business Solutions</h3>
          <p>
            Our cloud application services streamline your operations, enhancing
            efficiency and scalability for your business.
          </p>
        </div>
        <div className="service-card">
          <img src="/image/working.avif" alt="Service 2" />
          <h3>Business Consultation & Services</h3>
          <p>
            Our expert consultants provide tailored strategies to optimize your
            business processes and drive growth.
          </p>
        </div>
        <div className="service-card">
          <img src="/image/chargingcars.avif" alt="Service 3" />
          <h3>Enterprise Business Products</h3>
          <p>
            Our project management tools ensure timely delivery and effective
            collaboration across all your projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pioneers;
