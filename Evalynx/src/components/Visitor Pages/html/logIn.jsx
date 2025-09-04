import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../CSS/registration.css";

const Login = () => {
  return (
    <div className="main-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <img src="/src/images/logo-Photoroom.png" alt="Logo" />
          </div>
          <p>Automated Content Submission Evaluation System</p>
        </div>

        <div className="auth-body">
          {/* Login Form */}
          <form className="login-form active">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
          </form>

          {/* Footer */}
          <div className="auth-footer">
            <p className="login-footer">
              Don’t have an account?{" "}
              <a href="register.html">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
