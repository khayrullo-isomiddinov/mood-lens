import React from 'react';
import '../styles/FeaturesSection.css';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className={`features-container ${inView ? 'visible' : ''}`} ref={ref}>
      <h2 className="features-title">Key Features</h2>
      <ul className="features-list">
        <li>Real-time Face Scan & Mood Analysis</li>
        <li>AR Therapy Overlays</li>
        <li>Interactive Mood Shifting Tools</li>
        <li>Emotion Journal & Insights</li>
        <li>Optional Social Sharing</li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
