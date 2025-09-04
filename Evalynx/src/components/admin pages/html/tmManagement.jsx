import React from "react";
import "../css/evalynx_admin.css";

const TeamManagement = () => {
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
          <a href="" className="about-us">
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
        {/*
        <div id="teams" className="page">
          <div className="page-header">
            <h1 className="page-title">Team Management</h1>
            <p className="page-description">
              View, approve, reject, and edit team details.
            </p>
          </div>
        */}
        <div className="management-card">
          <div className="card-header">
            <h3 className="card-title">®Registered Teams</h3>
            <button className="add-btn" onClick={() => openModal("teamModal")}>
              Add New Team
            </button>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Leader</th>
                <th>Members</th>
                <th>Registration Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tech Innovators</td>
                <td>John Smith</td>
                <td>5</td>
                <td>2024-08-25</td>
                <td>
                  <span className="status-badge status-pending">Pending</span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn btn-approve"
                      onClick={(e) => approveTeam(e.target)}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-reject"
                      onClick={(e) => rejectTeam(e.target)}
                    >
                      Reject
                    </button>
                    <button
                      className="btn btn-edit"
                      onClick={(e) => editTeam(e.target)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Digital Warriors</td>
                <td>Emily Johnson</td>
                <td>4</td>
                <td>2024-08-24</td>
                <td>
                  <span className="status-badge status-approved">Approved</span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn btn-edit"
                      onClick={(e) => editTeam(e.target)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-assign"
                      onClick={(e) => assignEvaluators(e.target)}
                    >
                      Assign Evaluators
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Code Masters</td>
                <td>Michael Brown</td>
                <td>6</td>
                <td>2024-08-23</td>
                <td>
                  <span className="status-badge status-approved">Approved</span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn btn-edit"
                      onClick={(e) => editTeam(e.target)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-assign"
                      onClick={(e) => assignEvaluators(e.target)}
                    >
                      Assign Evaluators
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
