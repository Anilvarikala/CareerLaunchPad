import React from "react";
import { useNavigate } from "react-router-dom";
import "./JobCard.css";

const JobCard = ({ job, disableApply = false }) => {
  const navigate = useNavigate();

  // 1. Handle clicking the "Apply Now" button specifically
  const handleApplyClick = (e) => {
    e.stopPropagation(); // Stops the card itself from being clicked
    if (job.applyLink) {
      window.open(job.applyLink, "_blank"); // Opens the company website in a new tab
    } else if (job.id || job._id) {
      navigate(`/job/${job.id || job._id}`); // Fallback to details page
    }
  };

  // 2. Handle clicking anywhere else on the card
  const handleCardClick = () => {
    if (job.id || job._id) {
      navigate(`/job/${job.id || job._id}`);
    } else if (job.applyLink) {
      window.open(job.applyLink, "_blank");
    }
  };

  // Safely limit the skills to show a maximum of 4 so it stays neat
  const skillsToShow = (job.skills || []).slice(0, 4);

  return (
    <div
      className="job-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
    >
      {/* --- ROLE, COMPANY & LOCATION --- */}
      <div className="job-card-header" style={{ display: "block" }}>
        <h3
          className="job-role-title"
          style={{ fontSize: "1.2rem", marginBottom: "5px" }}
        >
          {job.title || "Software Role"}
        </h3>
        <p
          className="company-name"
          style={{ fontWeight: "bold", color: "#444" }}
        >
          🏢 {job.company || "Company Unlisted"}
        </p>
        <p
          className="location-text"
          style={{ fontSize: "0.85rem", color: "#888", marginTop: "5px" }}
        >
          📍 {job.location || "Remote"}
        </p>
      </div>

      <div className="job-card-body" style={{ flexGrow: 1 }}>
        {/* --- REQUIRED SKILLS --- */}
        {skillsToShow.length > 0 && (
          <div className="job-card-skills" style={{ marginTop: "10px" }}>
            {skillsToShow.map((skill, index) => (
              <span key={index} className="job-skill-tag">
                {skill}
              </span>
            ))}
            {job.skills && job.skills.length > 4 && (
              <span className="job-skill-tag">+{job.skills.length - 4}</span>
            )}
          </div>
        )}

        {/* --- AI MATCH DETAILS (Necessary for this feature) --- */}
        {job.matchScore && (
          <div
            style={{
              marginTop: "15px",
              paddingTop: "10px",
              borderTop: "1px solid #eee",
            }}
          >
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#00b894",
              }}
            >
              🔥 {job.matchScore}% AI Match
            </span>
            {job.aiReason && (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#6c5ce7",
                  marginTop: "5px",
                  fontStyle: "italic",
                  lineHeight: "1.4",
                }}
              >
                ✨ {job.aiReason}
              </p>
            )}
          </div>
        )}
      </div>

      {/* --- APPLY LINK BUTTON --- */}
      <button
        className="view-job-btn"
        onClick={handleApplyClick}
        disabled={disableApply}
        style={{ width: "100%", marginTop: "15px" }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
