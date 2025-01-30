import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="about-container"
    >
      <h1 className="about-title">
  About <span className="solid-moodlens">MoodLens</span>
</h1>


      <p className="about-text">
        MoodLens is an innovative AI-powered emotional wellness platform that helps users track, 
        understand, and enhance their mental well-being through real-time mood analysis, interactive 
        AR therapy, and personalized insights.
      </p>

      {/* Who We Are Section */}
      <section className="about-section">
        <h2>Who I Am</h2>
        <p>
          I'm the founder of MoodLens, a passionate developer and AI enthusiast dedicated to 
          building a digital space where emotional intelligence meets cutting-edge technology.
        </p>
      </section>

      {/* What I Offer Section */}
      <section className="about-section">
        <h2>What MoodLens Offers</h2>
        <ul className="about-list">
          <li>🎭 **AI-Powered Mood Tracking** - Get real-time insights on your emotional state.</li>
          <li>🧘 **AR Therapy Overlays** - Personalized, interactive therapy sessions.</li>
          <li>📖 **Emotion Journal & Insights** - Track your progress over time.</li>
          <li>🌎 **Community & Support** - Share experiences and connect with others.</li>
        </ul>
      </section>

      {/* Founder Section - Only YOU */}
      <section className="about-section team-section">
        <h2>Meet the Founder</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="public/kapshonka.jpg" alt="Your Name" />
          </div>
        </div>
      </section>

      {/* Our Journey (Timeline) */}
      <section className="about-section">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>2022</h3>
            <p>🎉 MoodLens was born as my passion project.</p>
          </div>
          <div className="timeline-item">
            <h3>2023</h3>
            <p>🚀 Developed the AI model and brought MoodLens to life.</p>
          </div>
          <div className="timeline-item">
            <h3>2024</h3>
            <p>🌎 Launched MoodLens to the world!</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
