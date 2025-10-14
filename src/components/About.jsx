import React, { useState } from 'react';

const About = ({ onGoBack }) => {
  const [enlargedCard, setEnlargedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    if (enlargedCard === cardIndex) {
      setEnlargedCard(null); // Click again to shrink
    } else {
      setEnlargedCard(cardIndex); // Enlarge the clicked card
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div 
            className={`about-card ${enlargedCard === 0 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(0)}
          >
            <h3>Background</h3>
            <p>
              I'm Sandy Thomas, a passionate Computer Science student, avid sports enthusiast, and interested in the intersection of human language and computer programming, at California Baptist University. 
              I'm dedicated to learning and growing in the field of technology, constantly exploring 
              new concepts and building innovative solutions.
            </p>
          </div>
          <div 
            className={`about-card ${enlargedCard === 1 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <h3>Jordan Wings Scholar</h3>
            <p>
              As a Jordan Wings Scholar, I'm committed to excellence both academically and personally. 
              This scholarship represents my dedication to making a positive impact in my community 
              and pursuing my educational goals with determination.
            </p>
          </div>
          <div 
            className={`about-card ${enlargedCard === 2 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(2)}
          >
            <h3>Education</h3>
            <p>
              Currently pursuing my Bachelors of Science degree in Computer Science at California Baptist University with concentrations in Artificial Intelligence and Machine Learning., 
              I'm building a strong foundation in programming, software development, machine learning, and 
              problem-solving skills that will shape my future career in technology.
            </p>
          </div>
        </div>
        <button className="go-back-button" onClick={onGoBack}>
          ← Go Back
        </button>
      </div>
    </section>
  );
};

export default About;

