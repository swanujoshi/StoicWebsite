import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/image/stoic logo.avif" alt="Stoic & Salamander Logo" />
        </div>
        <nav className={isMenuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className={activeLink === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => handleLinkClick("/about")}
                className={activeLink === "/about" ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/Technology"
                onClick={() => handleLinkClick("/Technology")}
                className={activeLink === "/Technology" ? "active" : ""}
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                onClick={() => handleLinkClick("/Services")}
                className={activeLink === "/Services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
                className={activeLink === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
            <li className="dropdown">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
                className={isDropdownOpen ? "active" : ""}
              >
                Signin/Login
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      to="/client-login"
                      onClick={() => handleLinkClick("/client-login")}
                    >
                      Client Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/employee-login"
                      onClick={() => handleLinkClick("/employee-login")}
                    >
                      Employee Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/employee-Register"
                      onClick={() => handleLinkClick("/employee-Register")}
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
