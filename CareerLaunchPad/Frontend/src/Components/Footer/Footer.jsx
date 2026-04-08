import React from "react";
import "./Footer.css";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-logo">CareerLaunchPad</h2>
          <p>
            CareerLaunchPad helps students prepare for placements with coding
            practice, interview preparation, and project-based learning.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📞 +91 9100459738</p>
          <p>
            ✉️ <a href="mailto:saikiranchikilam@gmail.com">
              saikiranchikilam@gmail.com
            </a>
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {currentYear} CareerLaunchPad. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;