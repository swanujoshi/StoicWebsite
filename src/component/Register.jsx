import React, { useState } from "react";
import "./Signin.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [role, setRole] = useState("Intern");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    console.log("Register button clicked");

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, about, role }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        setSuccessMessage("Registration successful! You can now log in.");
        setErrorMessage(""); // Clear any previous errors
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Registration failed. Please try again."
        );
        setSuccessMessage(""); // Clear any success message
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setSuccessMessage(""); // Clear any success message
    }
  };

  return (
    <div className="unique-container-wrapper">
      <div className="unique-container">
        {/* Logo Container */}
        <div className="unique-logo-container">
          <img src="/image/stoic logo.jpg" alt="Company Logo" />
        </div>

        {/* Registration Form */}
        <form className="unique-login-fields" onSubmit={handleRegister}>
          <label htmlFor="unique-username">Username</label>
          <input
            type="text"
            id="unique-username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="unique-password">Password</label>
          <input
            type="password"
            id="unique-password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="unique-email">Email</label>
          <input
            type="email"
            id="unique-email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="unique-about">About</label>
          <input
            type="text"
            id="unique-about"
            name="about"
            placeholder="Tell us about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <label htmlFor="unique-role">Role</label>
          <select
            id="unique-role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="Intern">Intern</option>
            <option value="Member">Member</option>
            <option value="Admin">Admin</option>
          </select>

          {errorMessage && (
            <p className="unique-error-message">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="unique-success-message">{successMessage}</p>
          )}

          <button type="submit" className="unique-register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
