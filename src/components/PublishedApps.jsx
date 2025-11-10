import React from 'react';

const PublishedApps = ({ onGoBack }) => {
  return (
    <section id="published-apps" className="published-apps">
      <div className="published-apps-container">
        <h2 className="section-title">Published Apps</h2>
        <div className="apps-content">
          <div className="app-card">
            <h3>RSVP App</h3>
            <p className="app-description">Check out my published RSVP application!</p>
            <a 
              href="https://rsvp-49b85.web.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-link"
            >
              Visit App →
            </a>
            <p className="app-url">https://rsvp-49b85.web.app</p>
          </div>
        </div>
        <button className="go-back-button" onClick={onGoBack}>
          ← Go Back
        </button>
      </div>
    </section>
  );
};

export default PublishedApps;

