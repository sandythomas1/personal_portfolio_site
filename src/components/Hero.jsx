import React from 'react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Sandy Thomas</h1>
        <div className="hero-subtitle">
          <p className="subtitle-text">Computer Science Student</p>
          <p className="subtitle-text">Jordan Wings Scholar</p>
          <p className="subtitle-text">California Baptist University</p>
        </div>
        <button className="cta-button" onClick={scrollToAbout}>
          Learn More About Me
        </button>
      </div>
      <div className="hero-decoration"></div>
    </section>
  );
};

export default Hero;

