import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('hero');

  const handleShowAbout = () => {
    setCurrentPage('about');
  };

  const handleShowProjects = () => {
    setCurrentPage('projects');
  };

  const handleShowContact = () => {
    setCurrentPage('contact');
  };

  const handleGoBack = () => {
    setCurrentPage('hero');
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {currentPage === 'hero' && (
        <Hero 
          onShowAbout={handleShowAbout}
          onShowProjects={handleShowProjects}
          onShowContact={handleShowContact}
        />
      )}
      {currentPage === 'about' && <About onGoBack={handleGoBack} />}
      {currentPage === 'projects' && <Projects onGoBack={handleGoBack} />}
      {currentPage === 'contact' && <Contact onGoBack={handleGoBack} />}
    </div>
  );
}

export default App;

