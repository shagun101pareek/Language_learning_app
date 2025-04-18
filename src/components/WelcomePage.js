import React, { useState } from 'react';
import './WelcomePage.css';
import mascotImage from '../components/assets/mascot.png'; // You'll need to provide this image
import morningImage from '../components/assets/morningImage.png';

const WelcomePage = ({ onNext }) => {
  const [currentView, setCurrentView] = useState('welcome');

  const handleNext = () => {
    setCurrentView('greeting');
  };

  if (currentView === 'welcome') {
    return (
      <div className="welcome-page">
        <div className="greeting-card welcome-card">
          <div className="mascot-container">
            <img src={mascotImage} alt="Mascot" className="mascot-image" />
          </div>
          <div className="welcome-text">
            <h1>Welcome to your journey of mastering Japanese—the language of tradition, innovation, and a gateway to over 125 million speakers!</h1>
          </div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="bottom-nav">
          <button className="nav-button">✕</button>
          <button className="nav-button">⚑</button>
        </div>
      </div>
    );
  }

  return (
    <div className="welcome-page">
      <div className="greeting-card">
        <div className="greeting-header">
          <div className="hanging-dot"></div>
          <h2>NEW GREETING</h2>
        </div>
        
        <div className="japanese-text">おはよう</div>
        <div className="romaji-text">O ha yo u</div>
        
        <div className="greeting-description">
          <p>おはよう <span className="bold-text">(ohayō)</span> is a casual Japanese greeting that translates to 'good morning'.</p>
        </div>

        <div className="greeting-image-container">
          <img src={morningImage} alt="Morning greeting scene" className="greeting-image" />
        </div>

        <div className="mascot-decoration">
          {/* Mascot decoration image will be added later */}
        </div>

        <button className="next-button" onClick={onNext}>
          Next
        </button>
      </div>
      <div className="bottom-nav">
        <button className="nav-button">✕</button>
        <button className="nav-button">⚑</button>
      </div>
    </div>
  );
};

export default WelcomePage; 