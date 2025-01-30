import React from "react";
import "../styles/OAuthButtons.css";

const OAuthButtons = () => {
  return (
    <div className="oauth-buttons">
      <button className="oauth-btn google-btn">Sign in with Google</button>
      <button className="oauth-btn apple-btn">Sign in with Apple</button>
    </div>
  );
};

export default OAuthButtons;
