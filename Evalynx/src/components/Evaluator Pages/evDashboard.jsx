import React, { useState } from "react";
import "../Visitor Pages/css/registration.css";
import "./evDashboard.css";

const EvaluatorDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [scores, setScores] = useState({
    tech: 0,
    innovation: 0,
    presentation: 0,
    learning: 0,
  });
  const [comments, setComments] = useState({
    overall: "",
    strengths: "",
    improvements: "",
  });

  // Open / Close Modal
  const openEvaluationModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle input changes
  const handleScoreChange = (e, key) => {
    setScores({ ...scores, [key]: parseInt(e.target.value) || 0 });
  };

  const handleCommentChange = (e, key) => {
    setComments({ ...comments, [key]: e.target.value });
  };

  // Submit Evaluation
  const submitEvaluation = (e) => {
    e.preventDefault();
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

    if (totalScore > 100) {
      alert("Total score cannot exceed 100 points.");
      return;
    }

    if (!comments.overall && !comments.strengths && !comments.improvements) {
      alert("Please provide feedback in at least one comment section.");
      return;
    }

    alert(`Evaluation submitted! Total Score: ${totalScore}/100`);
    closeModal();
  };

  const saveDraft = () => {
    alert("Draft saved successfully!");
  };

  const viewDetails = (teamId) => {
    alert(`Viewing details for ${teamId}`);
  };

  const viewEvaluation = (teamId) => {
    alert(`Viewing evaluation for ${teamId}`);
  };

  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      alert("Logging out...");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src="/src/images/logo-Photoroom.png" alt="Logo" />
        </div>
        <div className="menu">
          <a href="#" className="home">
            Home
          </a>
          <a href="#" className="dashboard">
            Dashboard
          </a>
          <a href="#" className="submissions">
            Submissions
          </a>
          <a href="#" className="leaderBoard">
            LeaderBoard
          </a>
          <a href="#" className="results">
            Results
          </a>
          <a href="#" className="results">
            About Us
          </a>
        </div>
        <div className="nav-user">
          <div className="user-info">
            <div className="user-avatar">G</div>
            <div>
              <div style={{ fontWeight: 500, color: "white" }}>Adnan Asif</div>
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

      {/* Dashboard Container */}
      <div className="container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Evaluator Dashboard</h1>
          <p className="dashboard-subtitle">
            Review and evaluate team submissions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">12</div>
            <div className="stat-label">Total Assignments</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2</div>
            <div className="stat-label">Due Today</div>
          </div>
        </div>

        <div className="main-content">
          {/* Assignments Section */}
          <div className="assignments-section">
            <h2 className="section-title">📋 Assigned Evaluations</h2>

            {/* Example Assignment Card */}
            <div className="assignment-card">
              <div className="assignment-header">
                <div>
                  <div className="team-name">Team Alpha</div>
                  <div className="video-title">
                    AI-Powered Learning Management System
                  </div>
                </div>
                <span className="status-badge status-pending">Pending</span>
              </div>
              <div className="assignment-meta">
                <span>📅 Due: Dec 20, 2024</span>
                <span>🎯 Topic: Machine Learning</span>
                <span>⏱️ Duration: 5:30</span>
              </div>
              <div className="assignment-actions">
                <button
                  className="btn btn-primary"
                  onClick={openEvaluationModal}
                >
                  ▶️ Watch & Evaluate
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => viewDetails("team-alpha")}
                >
                  📄 View Details
                </button>
              </div>
            </div>

            {/* Repeat the other cards (Beta, Gamma, Delta) in similar way */}
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h3 className="section-title">⏰ Upcoming Deadlines</h3>
              <div className="deadline-item">
                <div>
                  <div style={{ fontWeight: 500 }}>Team Alpha</div>
                  <div style={{ fontSize: "0.9rem", color: "#666" }}>
                    AI Learning System
                  </div>
                </div>
                <div className="deadline-time">2 days left</div>
              </div>
              {/* Repeat Delta & Epsilon deadlines */}
            </div>

            <div className="sidebar-card">
              <h3 className="section-title">📊 Evaluation Guidelines</h3>
              <div
                style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.5 }}
              >
                <p>
                  <strong>Technical Implementation (30%)</strong>
                </p>
                <p>Code quality, architecture, and functionality</p>
                <p>
                  <strong>Innovation & Creativity (25%)</strong>
                </p>
                <p>Uniqueness and creative problem-solving</p>
                <p>
                  <strong>Presentation Quality (25%)</strong>
                </p>
                <p>Video clarity, explanation, and engagement</p>
                <p>
                  <strong>Learning Outcomes (20%)</strong>
                </p>
                <p>Demonstration of learning and growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Evaluation Modal */}
      {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Evaluate Submission</h2>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>

            <div className="video-player">
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>▶️</div>
                <div>Video Player</div>
                <div style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                  Click to play submission video
                </div>
              </div>
            </div>

            <form className="evaluation-form" onSubmit={submitEvaluation}>
              <div className="form-group">
                <label className="form-label">Team Name</label>
                <input
                  type="text"
                  className="form-input"
                  value="Team Alpha"
                  readOnly
                />
              </div>

              <div className="form-group">
                <label className="form-label">Video Title</label>
                <input
                  type="text"
                  className="form-input"
                  value="AI-Powered Learning Management System"
                  readOnly
                />
              </div>

              {/* Score Inputs */}
              <div className="form-group">
                <label className="form-label">Evaluation Criteria</label>
                <div className="scoring-grid">
                  <label>Technical Implementation (30%)</label>
                  <input
                    type="number"
                    className="form-input score-input"
                    min="0"
                    max="30"
                    value={scores.tech}
                    onChange={(e) => handleScoreChange(e, "tech")}
                  />
                </div>
                <div className="scoring-grid">
                  <label>Innovation & Creativity (25%)</label>
                  <input
                    type="number"
                    className="form-input score-input"
                    min="0"
                    max="25"
                    value={scores.innovation}
                    onChange={(e) => handleScoreChange(e, "innovation")}
                  />
                </div>
                <div className="scoring-grid">
                  <label>Presentation Quality (25%)</label>
                  <input
                    type="number"
                    className="form-input score-input"
                    min="0"
                    max="25"
                    value={scores.presentation}
                    onChange={(e) => handleScoreChange(e, "presentation")}
                  />
                </div>
                <div className="scoring-grid">
                  <label>Learning Outcomes (20%)</label>
                  <input
                    type="number"
                    className="form-input score-input"
                    min="0"
                    max="20"
                    value={scores.learning}
                    onChange={(e) => handleScoreChange(e, "learning")}
                  />
                </div>
              </div>

              {/* Comment Inputs */}
              <div className="form-group">
                <label className="form-label">Overall Comments</label>
                <textarea
                  className="form-textarea"
                  value={comments.overall}
                  onChange={(e) => handleCommentChange(e, "overall")}
                  placeholder="Provide detailed feedback..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Strengths</label>
                <textarea
                  className="form-textarea"
                  value={comments.strengths}
                  onChange={(e) => handleCommentChange(e, "strengths")}
                  placeholder="What did the team do well?"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Areas for Improvement</label>
                <textarea
                  className="form-textarea"
                  value={comments.improvements}
                  onChange={(e) => handleCommentChange(e, "improvements")}
                  placeholder="What could be improved?"
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={saveDraft}
                >
                  Save Draft
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit Evaluation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluatorDashboard;
