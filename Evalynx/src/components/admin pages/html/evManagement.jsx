import React from "react";
import logo from "/src/images/logo-Photoroom.png";
import "../css/evalynx_admin.css";

const EvaluatorManagement = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
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
        <div id="evaluators" className="page active">
          {/*
          <div className="page-header">
              <h1 className="page-title">Evaluator Management</h1>
              <p className="page-description">Manage evaluator registrations and assign evaluators to teams.</p>
          </div>
          */}
          <div className="management-card">
            <div className="card-header">
              <h3 className="card-title">®Registered Evaluators</h3>
              <button
                className="add-btn"
                onClick={() => openModal("evaluatorModal")}
              >
                Add New Evaluator
              </button>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Expertise</th>
                  <th>Experience</th>
                  <th>Status</th>
                  <th>Assigned Teams</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Sarah Wilson</td>
                  <td>sarah.wilson@email.com</td>
                  <td>Software Development</td>
                  <td>10 years</td>
                  <td>
                    <span className="status-badge status-approved">
                      Approved
                    </span>
                  </td>
                  <td>2</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-edit"
                        onClick={(e) => editEvaluator(e.target)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-assign"
                        onClick={(e) => manageAssignments(e.target)}
                      >
                        Manage Assignments
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Prof. James Davis</td>
                  <td>james.davis@email.com</td>
                  <td>Data Science</td>
                  <td>15 years</td>
                  <td>
                    <span className="status-badge status-pending">Pending</span>
                  </td>
                  <td>0</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-approve"
                        onClick={(e) => approveEvaluator(e.target)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-reject"
                        onClick={(e) => rejectEvaluator(e.target)}
                      >
                        Reject
                      </button>
                      <button
                        className="btn btn-edit"
                        onClick={(e) => editEvaluator(e.target)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Dr. Lisa Chen</td>
                  <td>lisa.chen@email.com</td>
                  <td>UI/UX Design</td>
                  <td>8 years</td>
                  <td>
                    <span className="status-badge status-approved">
                      Approved
                    </span>
                  </td>
                  <td>3</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-edit"
                        onClick={(e) => editEvaluator(e.target)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-assign"
                        onClick={(e) => manageAssignments(e.target)}
                      >
                        Manage Assignments
                      </button>
                    </div>
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

export default EvaluatorManagement;
