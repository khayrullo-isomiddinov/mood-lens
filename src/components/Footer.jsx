import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">MoodLens</h2>
        <p>Your emotional companion, powered by AI.</p>

        <nav className="footer-nav">
          <ul>
            <li><Link to="/#">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </div>

      <p className="footer-copyright">© 2025 MoodLens. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
