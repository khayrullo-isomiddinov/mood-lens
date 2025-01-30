import React from 'react';
import '../styles/FloatingButton.css';

const FloatingButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="floating-button" onClick={handleScrollToTop}>
      ↑
    </button>
  );
};

export default FloatingButton;
