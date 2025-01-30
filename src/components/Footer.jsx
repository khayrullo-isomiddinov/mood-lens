// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    {/* Footer Content */}
    <div className="footer-content">
      <div className="footer-brand">
        <h2 className="footer-title">MoodLens</h2>
        <p>Your emotional companion, powered by AI.</p>
      </div>

      <nav className="footer-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </div>

    {/* Copyright */}
    <p className="footer-copyright">© 2025 MoodLens. All rights reserved.</p>
  </footer>
);

export default Footer;
