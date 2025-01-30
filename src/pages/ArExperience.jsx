// src/pages/ArExperience.jsx
import React from 'react';
import '../styles/ArExperience.css'; 

const ArExperience = () => {
  return (
    <div className="ar-experience-container">
      <h1 className="ar-experience-title">Explore the AR Experience</h1>
      <p className="ar-experience-description">
        Immerse yourself in an augmented reality world where you can interact with your emotions, 
        visualize your mood, and experience it in 3D.
      </p>

      <div className="ar-experience-actions">
        <button className="ar-experience-btn">Launch AR</button>
        <button className="ar-experience-btn">View AR Gallery</button>
      </div>

      <div className="ar-experience-info">
        <h3>How it works:</h3>
        <ul className="ar-info-list">
          <li>1. Connect to your camera and set up your AR environment.</li>
          <li>2. Visualize your mood in 3D as AR objects around you.</li>
          <li>3. Interact with your mood objects and learn insights from them.</li>
        </ul>
      </div>
    </div>
  );
};

export default ArExperience;
