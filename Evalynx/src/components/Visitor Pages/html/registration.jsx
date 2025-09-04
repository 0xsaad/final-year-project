import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../CSS/registration.css";

const Registration = () => {
  const [activeType, setActiveType] = useState("evaluator");
  const [members, setMembers] = useState(["Member 1"]);

  // Handle role type change
  const handleTypeChange = (type) => {
    setActiveType(type);
  };

  // Add team member
  const addMember = () => {
    if (members.length < 5) {
      setMembers([...members, `Member ${members.length + 1}`]);
    }
  };

  // Remove member
  const removeMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

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
          <div className="competition-info">
            <h6>
              <i className="fas fa-trophy"></i> CS Video Competition 2025
            </h6>
            <small>
              Register your team and submit innovative computer science video
              content
            </small>
          </div>

          {/* Registration Form */}
          <form className="register-form active">
            {/* Team Type Selector */}
            <div className="team-type-selector">
              <div
                className={`team-type-option ${
                  activeType === "team" ? "active" : ""
                }`}
                onClick={() => handleTypeChange("team")}
              >
                <div className="team">
                  <img src="/src/images/people.png" alt="Team" />
                </div>
                <h6>Team</h6>
                <small>Up to 5 members</small>
              </div>

              <div
                className={`team-type-option ${
                  activeType === "evaluator" ? "active" : ""
                }`}
                onClick={() => handleTypeChange("evaluator")}
              >
                <div className="evaluator">
                  <img src="/src/images/surveyor.png" alt="Evaluator" />
                </div>
                <h6>Evaluator</h6>
                <small>Expert</small>
              </div>

              <div
                className={`team-type-option ${
                  activeType === "admin" ? "active" : ""
                }`}
                onClick={() => handleTypeChange("admin")}
              >
                <div className="admin">
                  <img src="/src/images/user-setting.png" alt="Admin" />
                </div>
                <h6>Admin</h6>
                <small>Coordinator</small>
              </div>
            </div>

            {/* Evaluator Registration */}
            {activeType === "evaluator" && (
              <div className="evaluator-inputs">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="evaluator@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Address *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Qualification *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., MSc, PhD"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Specialization *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., AI, Cybersecurity"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Years of Experience *</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="e.g., 5"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Organization *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., Lecturer at XYZ University"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">LinkedIn / Portfolio</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Availability</label>
                  <select className="form-control form-select">
                    <option value="">Select Availability</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="timeslots">Specific Time Slots</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-3 d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-user-plus me-2"></i> Register Evaluator
                </button>
              </div>
            )}

            {/* Team Registration */}
            {activeType === "team" && (
              <div className="team-registration">
                <div className="form-group">
                  <label className="form-label">Team/Individual Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter team name or your name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Lead Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="team.leader@university.edu"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create a strong password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">University/Institution</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="University Name"
                  />
                </div>

                <label className="form-label">Team Members (Up to 5)</label>
                {members.map((member, index) => (
                  <div key={index} className="member-input d-flex mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={member}
                    />
                    <button
                      type="button"
                      className="btn-remove"
                      onClick={() => removeMember(index)}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  className="btn btn-secondary w-100 mt-2 d-flex justify-content-center align-items-center"
                  onClick={addMember}
                >
                  <i className="fas fa-plus me-2"></i> Add Another Member
                </button>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-3 d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-user-plus me-2"></i> Register Team
                </button>
              </div>
            )}

            {/* Admin Registration */}
            {activeType === "admin" && (
              <div className="admin-inputs">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Official Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="admin@organization.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Username *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Choose a username"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Role *</label>
                  <select className="form-control form-select">
                    <option value="">Select Role</option>
                    <option value="super">Super Admin</option>
                    <option value="event">Event Admin</option>
                    <option value="coordinator">Coordinator</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Recovery Email/Phone *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alternate contact"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Enable 2FA?</label>
                  <input type="checkbox" /> Yes, enable Two-Factor
                  Authentication
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mt-3 d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-user-plus me-2"></i> Register Admin
                </button>
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="auth-footer">
            <p className="register-footer">
              Already have an account? <a href="#">Login here</a>
            </p>
            <p className="login-footer" style={{ display: "none" }}>
              Don’t have an account? <a href="#">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
