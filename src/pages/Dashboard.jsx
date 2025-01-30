import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();

        console.log("User data from API:", data);

        if (data.user) {
          setUser(data.user);
        } else {
          localStorage.removeItem("token");
          navigate("/");
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        localStorage.removeItem("token");
        navigate("/");
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="dashboard">
      {user && (
        <>
          <h2 className="dashboard-title">Welcome, {user.name}!</h2>
          <div className="dashboard-cards">
            {/* Mood Tracking Section */}
            <div className="dashboard-card">
              <h3>Track Your Mood</h3>
              <p>Log and track your emotional trends.</p>
              <button className="dashboard-btn">Start Mood Tracking</button>
            </div>

            {/* AI Mood Analysis Section */}
            <div className="dashboard-card">
              <h3>AI Mood Insights</h3>
              <p>Get personalized insights from AI based on your mood.</p>
              <button className="dashboard-btn">Analyze Mood</button>
            </div>

            {/* Social Sharing Section */}
            <div className="dashboard-card">
              <h3>Social Mood Feed</h3>
              <p>Connect with friends and share mood updates.</p>
              <button className="dashboard-btn">View Feed</button>
            </div>
          </div>

          {/* Logout Button */}
          <button className="logout-btn" onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
