import React, { useState } from 'react';
import '../styles/MoodTracker.css';

const MoodTracker = () => {
  const [moods, setMoods] = useState([
    { mood: 'Happy', date: '📅 2025-01-30' },
    { mood: 'Sad', date: '📅 2025-01-29' },
    { mood: 'Neutral', date: '📅 2025-01-28' }
  ]);

  return (
    <div className="mood-tracker-container">
      <h1 className="mood-tracker-title">Track Your Mood</h1>
      <p className="mood-tracker-description">
        Log your emotions and see your progress over time.
      </p>

      <div className="mood-tracker-actions">
        <button className="mood-tracker-btn mood-happy">😊 Happy</button>
        <button className="mood-tracker-btn mood-sad">😢 Sad</button>
        <button className="mood-tracker-btn mood-neutral">😐 Neutral</button>
      </div>

      <div className="mood-graph">🌊 Mood Trends Loading...</div>

      <div className="recent-activity">
        <h4>Recent Entries</h4>
        {moods.map((entry, index) => (
          <div key={index} className="recent-item">
            <p>{entry.mood}</p>
            <span>{entry.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
