import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-sectionpage">
      <h2>
        A <span>short story</span> about Us
      </h2>

      <div className="about-content-1">
        <div className="about-column">
          <h3>Who We Are</h3>
          <p>
            Stoic & Salamander Global Corporation is a global leader in
            providing comprehensive business solutions that cater to the diverse
            needs of our clients. With a rich history of success and a
            forward-thinking approach, we have established ourselves as trusted
            advisors and partners in business transformation. Our team of
            experts brings decades of experience and a deep understanding of the
            complex challenges and opportunities that businesses face today. We
            believe that technology should work for you, not against you. That's
            why we're on a relentless pursuit to develop intuitive,
            user-friendly software that simplifies complex processes and fuels
            growth.
          </p>
        </div>

        <div className="about-column">
          <h3>Our Vision</h3>
          <p>
            At Stoic & Salamander Global Corporation, we understand that the
            modern business landscape demands efficiency, agility, and
            integration. The journey of Suitewise began in 2019 when our
            visionary Founder and CEO, Mr. Charul Jagtap, recognized a
            significant challenge faced by enterprises - the need to juggle
            multiple applications for effective business management. In response
            to this pressing need, Charul embarked on a mission to simplify and
            streamline enterprise operations, leading to the birth of Stoic &
            Salamander Global Corporation. To be the global leader across all
            industries we serve, setting benchmarks for excellence and
            innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
