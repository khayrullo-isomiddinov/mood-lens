import React from "react";
import "../styles/Home.css"; // ✅ Ensure the correct path

const Home = ({ openModal }) => {
  return (
    <div className="home-container">
      {/* 🔥 Animated MoodLens Title */}
      <h1 className="home-title">MoodLens</h1>

      {/* 🌊 Floating, Glowing Subtitle */}
      <p className="home-subtitle">
        Track your mood, analyze your emotions, and enhance your well-being.
      </p>

      {/* 🚀 Epic Call-to-Action Button */}
      <button className="home-cta" onClick={() => openModal(true)}>
        Get Started
      </button>

      {/* 🎇 Floating Particles for an Immersive Experience */}
      <div className="particle" style={{ top: "10%", left: "20%" }}></div>
      <div className="particle" style={{ top: "40%", left: "80%" }}></div>
      <div className="particle" style={{ top: "70%", left: "50%" }}></div>

      {/* 💎 Glassmorphic Features Section */}
      <div className="features-container">
        <div className="feature-card">🔍 Real-time Mood Analysis</div>
        <div className="feature-card">🎭 AI-Powered Emotion Insights</div>
        <div className="feature-card">🌊 AR Therapy & Relaxation</div>
      </div>
    </div>
  );
};

export default Home;
