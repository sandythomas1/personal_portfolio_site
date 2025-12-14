import React, { useState } from 'react';
import presentationPdf from '../assets/Using Context to Determine Sarcasm in Reddit Comments_.pdf';
import paperPdf from '../assets/Building+Context+from+Sarcasm.pdf';
import githubIcon from '../assets/Github-Logo-PNG.png';

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
            <div className="pdf-links" onClick={(e) => e.stopPropagation()}>
              <a href={paperPdf} target="_blank" rel="noopener noreferrer" className="pdf-icon-link" title="Research Paper">
                <span className="pdf-icon">📄</span>
                <span className="pdf-label">Paper</span>
              </a>
              <a href={presentationPdf} target="_blank" rel="noopener noreferrer" className="pdf-icon-link" title="Presentation">
                <span className="pdf-icon">📊</span>
                <span className="pdf-label">Presentation</span>
              </a>
              <a href="https://youtu.be/xYctp1okUt0" target="_blank" rel="noopener noreferrer" className="pdf-icon-link" title="Video">
                <span className="pdf-icon">🎬</span>
                <span className="pdf-label">Video</span>
              </a>
            </div>
          </div>
          <div 
            className={`project-card ${enlargedCard === 2 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(2)}
          >
            <h3>Mobile App Development</h3>
            <h4>Sharp Dressed App</h4>
            <p>
              Collaborated with a classmate to develop a fashion app that takes out the guesswork out of finding the perfect outfit for any occasion.
            </p>
            <p>
              <b>Technologies:</b> Dart/Flutter / Firebase / StabilityAPI / OpenWeatherAPI
            </p>
            <p>
              <b>Features:</b> The app allows users to choose the date and time of day for the event. Then, the app will generate a weather forecast for the event.
            </p>
            <p>
              <b>Features:</b> The app allows users to choose the type of event and the style they are looking for. The app then generates animage of an outfit that matches the user's preferences.
            </p>
            <p>
              <b>Features:</b> The app allows users to save their favorite outfits and/or regenerate outfits. 
            </p>
            <p>
              <b>Next Steps:</b> adding a calendar to the app to show users their upcoming events and what to wear for each event. Possible add links to similar clothing generated by the app.
            </p>
            <div className="pdf-links" onClick={(e) => e.stopPropagation()}>
              <a href="https://github.com/IsaacVass/final_app_mobile_app" target="_blank" rel="noopener noreferrer" className="pdf-icon-link" title="GitHub Repository">
                <img src={githubIcon} alt="GitHub" className="pdf-icon-img" />
                <span className="pdf-label">GitHub</span>
              </a>
            </div>
          </div>
          <div 
            className={`project-card ${enlargedCard === 3 ? 'enlarged' : ''}`}
            onClick={() => handleCardClick(3)}
          >
            <h3>See the rest of my projects on Github & LinkedIn!!</h3>
            <a href="https://github.com/sandythomas1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <br />
            <a href="https://www.linkedin.com/in/sandy-thomas2027cbugrad/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
