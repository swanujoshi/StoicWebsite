import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-title">Stoic & Salamander Global Corporation</h2>
        <p className="footer-subtitle">Global Solutions, Stoic Approach</p>
        <div className="footer-socials">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">CONTACT US</h3>
        <p>020-68280688 / +91 7276193805</p>
        <p>office@stoicsalamander.com</p>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">CONSULTATION</h3>
        <div className="footer-form">
          <input
            type="email"
            placeholder="Your email for contact purposes"
            className="footer-input"
          />
          <button type="submit" className="footer-button">
            Submit your inquiry now
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-consultation-box">
          <p>
            © 2024. All rights reserved. Stoic & Salamander Global Corporation
            (OPC) Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
