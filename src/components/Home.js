// src/pages/HomePage.js
import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="intro-section">
        <h1 className="intro-title">Welcome!</h1>
        <p className="intro-subtitle">I'm Rohini, a passionate Technical Architect.</p>
      </div>
      <div className="content-section">
        <h2>About Me</h2>
        <p>
          With 13 years of experience in full-stack development, I specialize in building innovative and user-friendly web solutions. My expertise spans JavaScript, React, Angular, and Node.js. I love turning complex problems into simple, beautiful, and intuitive designs.
        </p>
        <div className="button-container">
          <a href="/about" className="cta-button">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
