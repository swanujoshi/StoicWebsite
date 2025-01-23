import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Stoic & Salamander Global Corporation provided us with exceptional service, and the results far exceeded our expectations. Their expertise and attention to detail made all the difference in our project.",
    author: "VM Intellectuals",
    logo: "/image/hindustan-matrimony.avif",
    rating: 5,
  },
  {
    quote:
      "JSP Renewables experienced a seamless collaboration with Stoic & Salamander Global Corporation. Their team is highly professional, responsive, and dedicated to delivering top-notch solutions. Highly recommended!",
    author: "JSP Renewables",
    logo: "/image/jsp.avif",
    rating: 5,
  },
  // Add more testimonials here
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>
        Client Testimonials: Hear from <span>Our Valued Partners</span>
      </h2>
      <p>
        We take pride in our track record of successfully implementing
        transformative solutions that enhance operational efficiency, drive
        innovation, and deliver measurable value. Our impact spans multiple
        sectors, including financial services, healthcare, retail,
        manufacturing, telecommunications, public sector, software/IT, and
        logistics.
      </p>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">
                  ★
                </span>
              ))}
            </div>
            <p>{testimonial.quote}</p>
            <div className="author-logo">
              <img src={testimonial.logo} alt={testimonial.author} />
              <p className="author">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
