import React, { useState } from 'react';

const Projects = ({ onGoBack }) => {
  const [enlargedCard, setEnlargedCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    if (enlargedCard === cardIndex) {
      setEnlargedCard(null); // Click again to shrink
    } else {
      setEnlargedCard(cardIndex); // Enlarge the clicked card
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-content">
          <div 
            className={`project-card ${enlargedCard === 0 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(0)}
          >
            <h3>Project 1</h3>
            <p>
              Project description coming soon...
            </p>
          </div>
          <div 
            className={`project-card ${enlargedCard === 1 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <h3>Project 2</h3>
            <p>
              Project description coming soon...
            </p>
          </div>
          <div 
            className={`project-card ${enlargedCard === 2 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(2)}
          >
            <h3>Project 3</h3>
            <p>
              Project description coming soon...
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

export default Projects;
