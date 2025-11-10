import React, { useState } from 'react';
import sandyImage from '../assets/sandy_image.jpeg';
import youtubeIcon from '../assets/YouTube_full-color_icon_(2017).svg.png';

const Hero = ({ onShowAbout, onShowProjects, onShowContact, onShowPublishedApps }) => {
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
          <button className="cta-button" onClick={onShowPublishedApps}>
            Published Apps
          </button>
        </div>
        <div className="youtube-container">
          <a 
            href="https://www.youtube.com/@SandyThomasCodes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="youtube-link"
          >
            <img src={youtubeIcon} alt="YouTube" className="youtube-icon" />
          </a>
        </div>
      </div>
      <div className="hero-decoration"></div>
    </section>
  );
};

export default Hero;

