import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JapanesePage.css';
import greetingsImage from '../components/Greetings.png';
import diningImage from '../components/Dining.png';
// import familyImage from '../components/Family.png';
// import shoppingImage from '../components/Shopping.png';

const JapanesePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const imageSections = [
    {
      image: greetingsImage,
      title: "Greetings and basic conversations",
      description: "Learn essential Japanese phrases for daily interactions"
    },
    {
      image: diningImage,
      title: "Dining and food vocabulary",
      description: "Master restaurant conversations and food terms"
    },
    // {
    //   image: familyImage,
    //   title: "Family relationships",
    //   description: "Learn how to talk about family members"
    // },
    // {
    //   image: shoppingImage,
    //   title: "Shopping phrases",
    //   description: "Essential vocabulary for stores and markets"
    // }
  ];

  const playCircleItems = [
    "Basic Greetings",
    "Self Introduction",
    "Profession and Personalities",
    "Your hometown",
    "Your family",
    "Practice"
  ];

  return (
    <div className="japanese-page">
      <header className="page-header">
        <button className="back-button" onClick={() => navigate('/')}>
          &larr; Back
        </button>
        <div className="language-header">
          <img src={state?.flag} alt={state?.language} className="language-flag-large" />
          <h1>Japanese Learning</h1>
        </div>
      </header>

      <main className="content">
        {/* Streak Section */}
        <section className="streak-section">
          <div className="streak-header">
            <h2 className="streak-title">Continue your streak!</h2>
            <p className="streak-subtitle">Do a lesson to start your day</p>
          </div>
        </section>

        {/* Multiple Image Sections */}
        {imageSections.map((section, index) => (
          <section key={index} className="lesson-image-section">
            <img src={section.image} alt={section.title} className="lesson-image" />
            <div className="image-text-container">
              <p className="image-caption">{section.title}</p>
              <p className="image-description">{section.description}</p>
            </div>
          </section>
        ))}

        {/* Circular Play Buttons */}
        <section className="play-circles-section">
          <h3 className="section-title">Start Learning</h3>
          <div className="play-circles-container">
            {playCircleItems.map((item, index) => (
              <div key={index} className="play-circle">
                <div className="play-icon">▶</div>
                <p className="circle-label">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default JapanesePage;