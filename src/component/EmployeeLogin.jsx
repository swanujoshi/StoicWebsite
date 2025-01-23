import React, { useState } from "react";
import "./Signin.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function EmployeeLogin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();

    console.log("Client sign-in button clicked");

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Example: Save the token and redirect to dashboard
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="unique-container-wrapper">
      <div className="unique-container">
        {/* Logo Container */}
        <div className="unique-logo-container">
          <img src="/image/stoic logo.jpg" alt="Company Logo" />
        </div>

        {/* Form Replacement */}
        <form className="unique-login-fields" onSubmit={handleSignIn}>
          <label htmlFor="unique-email">email</label>
          <input
            type="email"
            id="unique-email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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

          <div className="unique-remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {errorMessage && (
            <p className="unique-error-message">{errorMessage}</p>
          )}

          <button type="submit" className="unique-signin-button">
            Client Login
          </button>
        </form>

        <a href="#" className="unique-forgot-password">
          Forgot your password?
        </a>

        <button type="button" className="unique-google-button">
          <FontAwesomeIcon icon={faGoogle} className="unique-google-icon" />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}

export default EmployeeLogin;
