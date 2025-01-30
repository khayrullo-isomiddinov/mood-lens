import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import './styles/global.css'; // Importing the global CSS file


const App = () => {
  const getInitialTheme = () => {
    return localStorage.getItem("theme") === "dark";
  };
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [modalOpen, setModalOpen] = useState(false);
  const [initialLogin, setInitialLogin] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);
  return (
    <Router>
      <Navbar openModal={(isLogin) => {
        setModalOpen(true);
        setInitialLogin(isLogin);
      }} />
      <Routes>
        <Route path="/" element={<Home openModal={(isLogin) => {
          console.log("✅ openModal triggered from Home.jsx!");
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
      <FloatingButton />  {}
      <Footer />
      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} initialLogin={initialLogin} />
    </Router>
  );
};
export default App;
