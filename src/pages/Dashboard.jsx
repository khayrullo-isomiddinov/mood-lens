import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Added loading state

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch("https://moodlens-backend.onrender.com/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }, // ✅ Fixed incorrect string formatting
        });

        const data = await response.json();
        console.log("User data from API:", data);

        if (data.user) {
          setUser(data.user);
        } else {
          handleLogout(); // If user is not found, log them out
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        handleLogout(); // Handle network errors
      } finally {
        setLoading(false); // ✅ Stop showing the loading spinner
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home
    window.dispatchEvent(new Event("storage")); // Notify other components (Navbar)
  };

  return (
    <div className="dashboard">
      {loading ? ( // ✅ Show loading spinner while waiting for API response
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading Dashboard...</p>
        </div>
      ) : (
        user && (
          <>
            <h2 className="dashboard-title">Welcome, {user.name}!</h2>
            <div className="dashboard-cards">
              <div className="dashboard-card">
                <h3>Track Your Mood</h3>
                <p>Log and track your emotional trends.</p>
                <button className="dashboard-btn">Start Mood Tracking</button>
              </div>

              <div className="dashboard-card">
                <h3>AI Mood Insights</h3>
                <p>Get personalized insights from AI based on your mood.</p>
                <button className="dashboard-btn">Analyze Mood</button>
              </div>

              <div className="dashboard-card">
                <h3>Social Mood Feed</h3>
                <p>Connect with friends and share mood updates.</p>
                <button className="dashboard-btn">View Feed</button>
              </div>
            </div>

            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )
      )}
    </div>
  );
};

export default Dashboard;
