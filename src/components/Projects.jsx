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
            <h3>ML/AI & Networking Engineering Intern</h3>
            <h4>Department of War | Office of Naval Research | NAVFAC EXWC</h4>
            <p>
              <b>Machine Learning:</b> Built end-to-end ML pipelines, which improved efficiency by 95%, using Python, TensorFlow, Anaconda, and scikit-learn to detect anomalies and predict component failure to be able to scale 30+ naval power systems.
            </p>
            <p>
              <b>Network Engineering:</b> Designed a secure, isolated networking environment with an industrial-grade Cisco switch. I segmented VLAN networks, configured inter-VLAN communication using the Cisco CLI, and executed 20+ vulnerability scans with Nessus to identify network anomalies.
            </p>
          </div>
          <div 
            className={`project-card ${enlargedCard === 1 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(1)}
          >
            <h3>Computational Pragmatics</h3>
            <h4>Independent Research</h4>
            <p>
              Currently working on research that intersects human linguistics and computer science. The goal is to create a computational model that can understand human language, using context, tone, and implied meanings.
            </p>
            <p>
              <b>Progress:</b> Using a labeled Reddit comments dataset to train a model. The model currently clusters sarcastic comments, creates a list of most common words and common phrases used in sarcastic comments, and creates contextual embeddings. 
            </p>
            <p>
              <b>Results so far:</b> The model with contextual embedings predicts sarcasm with 63% accuracy, which is above random chance.
            </p>
            <p>
              <b>Next Steps:</b> Use different trasformer models and embeddings to improve accuracy.
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
