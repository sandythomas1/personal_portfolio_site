import React from 'react';

const Hero = ({ onShowAbout, onShowProjects, onShowContact }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Sandy Thomas</h1>
        <div className="hero-subtitle">
          <p className="subtitle-text">Computer Science Student</p>
          <p className="subtitle-text">Jordan Wings Scholar</p>
          <p className="subtitle-text">California Baptist University</p>
        </div>
        <div className="button-container">
          <button className="cta-button" onClick={onShowAbout}>
            Learn More About Me
          </button>
          <button className="cta-button" onClick={onShowProjects}>
            Projects
          </button>
          <button className="cta-button" onClick={onShowContact}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  );
};

export default Hero;

