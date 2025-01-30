import React, { useState, useEffect } from "react";
import "../styles/AuthModal.css";
import AuthForm from "./AuthForm";

const AuthModal = ({ isOpen, onClose, initialLogin }) => {
  const [isLogin, setIsLogin] = useState(initialLogin);

  useEffect(() => {
    setIsLogin(initialLogin);
  }, [initialLogin]);

  if (!isOpen) return null; // ✅ Prevents rendering when closed

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{isLogin ? "Login to MoodLens" : "Create Your Account"}</h2>

        <AuthForm isLogin={isLogin} onClose={onClose} />

        <p className="toggle-text">
          {isLogin ? "New here?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
