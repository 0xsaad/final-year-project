import React from "react";
import logo from "/src/images/logo-Photoroom.png";
import "../css/evalynx_admin.css";

const AdminDashboard = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="/src/images/logo-Photoroom.png" />
        </div>
        <div className="menu">
          <a href="" className="home">
            Home
          </a>
          <a href="" className="dashboard">
            Dashboard
          </a>
          <a href="" className="submissions">
            Submissions
          </a>
          <a href="" className="leaderBoard">
            LeaderBoard
          </a>
          <a href="" className="results">
            Results
          </a>
          <a href="" className="results">
            About Us
          </a>
        </div>
        <div>
          <div className="nav-user">
            <div className="user-info">
              <div className="user-avatar">G</div>
              <div>
                <div style={{ fontWeight: 500, color: "white" }}>
                  Adnan Asif
                </div>
                <div style={{ fontSize: "0.9rem", color: "white" }}>
                  Evaluator
                </div>
              </div>
            </div>
            <Link to="/login" onClick={logout}>
              <i className="logout"></i> Logout
            </Link>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div id="dashboard" className="page active">
          <div className="page-header">
            <h1 className="page-title">Admin Dashboard</h1>
            <p className="page-description">
              Welcome to EvaLynx Admin Panel. Monitor your system overview and
              key statistics.
            </p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">24</div>
              <div className="stat-label">Total Teams</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">67</div>
              <div className="stat-label">Active Evaluators</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Pending Reviews</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8</div>
              <div className="stat-label">Teams Awaiting Approval</div>
            </div>
          </div>
          <div className="management-card">
            <h3 className="card-title">🕒 Recent Activity</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Type</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Team "Tech Innovators" submitted for approval</td>
                  <td>Team Registration</td>
                  <td>2 hours ago</td>
                  <td>
                    <span className="status-badge status-pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Evaluator John Doe completed review</td>
                  <td>Evaluation</td>
                  <td>4 hours ago</td>
                  <td>
                    <span className="status-badge status-approved">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>New evaluator Sarah Smith registered</td>
                  <td>Evaluator Registration</td>
                  <td>6 hours ago</td>
                  <td>
                    <span className="status-badge status-pending">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
