import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ openModal }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth);
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">MoodLens</Link>
      
      {isAuthenticated && (
        <div className="navbar-links">
          <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active-link" : ""}>Dashboard</Link>
          <Link to="/mood-tracker" className={location.pathname === "/mood-tracker" ? "active-link" : ""}>Mood Tracker</Link>
          <Link to="/ar-experience" className={location.pathname === "/ar-experience" ? "active-link" : ""}>AR Experience</Link>
          <Link to="/social-feed" className={location.pathname === "/social-feed" ? "active-link" : ""}>Social Feed</Link>
          <Link to="/settings" className={location.pathname === "/settings" ? "active-link" : ""}>Settings</Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
