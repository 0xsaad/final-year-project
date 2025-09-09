import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/team.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // Logout function
  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      sessionStorage.clear();
      localStorage.clear();
      alert("You have been logged out successfully.");
      navigate("/login"); // React Router navigation
    }
  };

  return (
    <div className="dashboard-page">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src="/images/logo-Photoroom.png" alt="Logo" />
        </div>
        <div className="menu">
          <Link to="/dashboard" className="dashboard">
            Dashboard
          </Link>
          <Link to="/submissions" className="dashboard">
            Submissions
          </Link>
        </div>
        <div>
          <div className="nav-user">
            <div className="user-info">
              <div className="user-avatar">G</div>
              <div>
                <div style={{ fontWeight: 500, color: "white" }}>
                  Adnan Asif
                </div>
                <div style={{ fontSize: "0.9rem", color: "white" }}>Admin</div>
              </div>
            </div>
            <button
              onClick={logout}
              className="logout-link"
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div id="dashboard" className="page">
        <div className="dashboard">
          <h1>
            <i className="fas fa-tachometer-alt"></i> Dashboard Overview
          </h1>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">24</div>
              <div className="stat-label">Total Teams</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">18</div>
              <div className="stat-label">Active Submissions</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">42</div>
              <div className="stat-label">Evaluations Complete</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">6</div>
              <div className="stat-label">Days Remaining</div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="activity-section">
            <h2>Recent Activity</h2>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-video"></i>
              </div>
              <div>
                <strong>Team Alpha</strong> submitted "AI Chess Bot"
                <div style={{ color: "#666", fontSize: "14px" }}>
                  2 hours ago
                </div>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-star"></i>
              </div>
              <div>
                <strong>Dr. Smith</strong> completed evaluation for Team Beta
                <div style={{ color: "#666", fontSize: "14px" }}>
                  4 hours ago
                </div>
              </div>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div>
                <strong>Leaderboard</strong> updated with new rankings
                <div style={{ color: "#666", fontSize: "14px" }}>
                  6 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
