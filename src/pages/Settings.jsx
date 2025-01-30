import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Settings.css';

const Settings = () => {
  const getInitialTheme = () => {
    return localStorage.getItem('theme') === 'dark';
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="settings-container"
    >
      <h1 className="settings-title">Settings</h1>
      <section className="settings-content">
        {/* Dark Mode Toggle */}
        <div className="settings-card">
          <div className="settings-item">
            <label>Dark Mode</label>
            {/* 🕶️ Toggle Button */}
            <div
              className={`toggle-container ${darkMode ? 'dark' : 'light'}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <div className="toggle-switch">
                <div className="toggle-circle"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Toggle */}
        <div className="settings-card">
          <div className="settings-item">
            <label>Notifications</label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>
        </div>

        {/* Language Selector */}
        <div className="settings-card">
          <div className="settings-item">
            <label htmlFor="language-select">Language</label>
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>

        {/* Theme Preview */}
        <div className="settings-card">
          <div className="settings-item theme-preview">
            <label>Theme Preview</label>
            <div className={`preview-box ${darkMode ? 'dark' : 'light'}`}></div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Settings;
