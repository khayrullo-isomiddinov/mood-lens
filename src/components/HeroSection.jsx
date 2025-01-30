// src/components/HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <h1 className="hero-title">
        Welcome to <span className="highlight">MoodLens</span>
      </h1>
      <p className="hero-subtitle">
  Your emotional companion, powered by <span className="highlight">AI</span> and <span className="highlight">Augmented Reality</span>.
</p>

      <button className="hero-cta">Get Started</button>
    </section>
  );
};

export default HeroSection;
