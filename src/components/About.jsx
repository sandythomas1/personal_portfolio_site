import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <h3>Background</h3>
            <p>
              I'm Sandy Thomas, a passionate Computer Science student at California Baptist University. 
              I'm dedicated to learning and growing in the field of technology, constantly exploring 
              new concepts and building innovative solutions.
            </p>
          </div>
          <div className="about-card">
            <h3>Jordan Wings Scholar</h3>
            <p>
              As a Jordan Wings Scholar, I'm committed to excellence both academically and personally. 
              This scholarship represents my dedication to making a positive impact in my community 
              and pursuing my educational goals with determination.
            </p>
          </div>
          <div className="about-card">
            <h3>Education</h3>
            <p>
              Currently pursuing my degree in Computer Science at California Baptist University, 
              I'm building a strong foundation in programming, software development, and 
              problem-solving skills that will shape my future career in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

