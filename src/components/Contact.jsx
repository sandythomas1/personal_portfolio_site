import React from 'react';
import linkedinIcon from '../assets/linkendIN.png';
import githubIcon from '../assets/github.jpeg';
import emailIcon from '../assets/email.png';

const Contact = ({ onGoBack }) => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-icons">
          <a 
            href="https://www.linkedin.com/in/sandy-thomas2027cbugrad/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a 
            href="https://github.com/sandythomas1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a 
            href="mailto:sandythomas1605@gmail.com"
            className="contact-icon"
          >
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
        <button className="go-back-button" onClick={onGoBack}>
          ← Go Back
        </button>
      </div>
    </section>
  );
};

export default Contact; 
