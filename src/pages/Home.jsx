import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; 

const Home = ({ openModal }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    } else {
      openModal(true);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">MoodLens</h1>
      <p className="home-subtitle">
        Track your mood, analyze your emotions, and enhance your well-being.
      </p>
      <button className="home-cta" onClick={handleStart}>
        Get Started
      </button>

      <div className="features-container">
        <div className="feature-card">🔍 Real-time Mood Analysis</div>
        <div className="feature-card">🎭 AI-Powered Emotion Insights</div>
        <div className="feature-card">🌊 AR Therapy & Relaxation</div>
      </div>
    </div>
  );
};

export default Home;
