import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import "../CSS/Landing.css";

const Landing = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src="/src/images/logo-Photoroom.png" alt="Logo" />
        </div>

        <div className="nav-buttons">
          <Link className="a-login" to="/login">
            Login
          </Link>
          <Link className="a-register" to="/register">
            Register
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Evalynx</h1>
          <p className="hero-description">
            Your platform for smart evaluations and real-time feedback
          </p>

          <Link to="/register">
            <button className="submit">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
