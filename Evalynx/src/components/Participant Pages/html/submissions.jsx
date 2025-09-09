import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/team.css";

const Submissions = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    teamName: "",
    videoUrl: "",
    projectTitle: "",
    description: "",
    learningOutcomes: "",
    category: "",
    tags: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Video submitted successfully!");
    // You can later send formData to backend with axios/fetch
  };

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
    <div className="submissions-page">
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

      {/* Page Content */}
      <div id="submissions" className="page">
        <div className="submissions">
          <h1
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <i className="fas fa-video"></i> Video Submissions
          </h1>

          {/* Submission Form */}
          <div className="form-container">
            <h2>Submit Your Video</h2>
            <form onSubmit={handleSubmit} className="submissionForm">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="teamName">Team Name</label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Enter your team name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="videoUrl">Video URL</label>
                  <input
                    type="url"
                    id="videoUrl"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleChange}
                    placeholder="https://youtube.com/watch?v=..."
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectTitle">Project Title</label>
                <input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  placeholder="Brief title of your project"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Project Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Detailed description of your project and approach"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="learningOutcomes">Learning Outcomes</label>
                <textarea
                  id="learningOutcomes"
                  name="learningOutcomes"
                  rows="3"
                  value={formData.learningOutcomes}
                  onChange={handleChange}
                  placeholder="What did you learn from this project?"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="data">Data Science</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags (comma-separated)</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="AI, Machine Learning, Python, Neural Networks"
                />
              </div>

              <button
                type="submit"
                className="btn-submit d-flex justify-content-center align-items-center"
              >
                <i className="fas fa-upload me-2"></i> Submit Video
              </button>
            </form>
          </div>

          {/* User Submissions */}
          <div className="form-container">
            <h2>Your Submissions</h2>
            <div id="userSubmissions">
              <div className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-video"></i>
                </div>
                <div style={{ flex: 1 }}>
                  <strong>AI Chess Bot</strong>
                  <div style={{ color: "#666", fontSize: "14px" }}>
                    Submitted 2 days ago • Status: Under Review
                  </div>
                </div>
                <button
                  className="btn-secondary"
                  style={{ padding: "8px 16px", fontSize: "14px" }}
                >
                  <i className="fas fa-edit"></i> Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
