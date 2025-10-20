import React, { useState } from 'react';
import sandyImage from '../assets/sandy_image.jpeg';

const Hero = ({ onShowAbout, onShowProjects, onShowContact }) => {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  const toggleImageSize = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <img 
          src={sandyImage} 
          alt="Sandy Thomas" 
          className={`hero-image ${isImageEnlarged ? 'enlarged' : ''}`}
          onClick={toggleImageSize}
        />
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
            Projects/Experience
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

