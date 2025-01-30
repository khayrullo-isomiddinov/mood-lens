import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";  
import Contact from "./pages/Contact";    
import About from "./pages/About";        
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import FloatingButton from "./components/FloatingButton";  
import MoodTracker from "./pages/MoodTracker"; 
import ArExperience from "./pages/ArExperience";
import SocialFeed from "./pages/SocialFeed";
import './styles/global.css'; 

const App = () => {
  const getInitialTheme = () => localStorage.getItem("theme") === "dark";
  
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [modalOpen, setModalOpen] = useState(false);
  const [initialLogin, setInitialLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // 🔥 Fix: Logout & force re-render
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false); // ✅ Navbar updates instantly

    if (window.location.hostname.includes("github.io")) {
      window.location.reload(); // ✅ Forces GitHub Pages to refresh properly
    }
  };

  return (
    <Router>
      <Navbar 
        openModal={(isLogin) => {
          setModalOpen(true);
          setInitialLogin(isLogin);
        }}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout} 
      />
      
      <Routes>
        <Route path="/" element={<Home openModal={(isLogin) => {
          setModalOpen(true);
          setInitialLogin(isLogin);
        }} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/ar-experience" element={<ArExperience />} />
        <Route path="/social-feed" element={<SocialFeed />} />
      </Routes>

      <FloatingButton />
      <Footer />

      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialLogin={initialLogin} />
    </Router>
  );
};

export default App;
