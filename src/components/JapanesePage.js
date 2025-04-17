import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JapanesePage.css';
import greetingsImage from '../components/Greetings.png';
import diningImage from '../components/Dining.png';
import numberImage from '../components/Number.png';

const JapanesePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const contentSections = [
    {
      image: greetingsImage,
      title: "Greetings and basic conversations",
      description: "Learn essential Japanese phrases for daily interactions",
      buttons: [
        "Basic Greetings",
        "Self Introduction",
        "Common Phrases"
      ]
    },
    {
      image: diningImage,
      title: "Dining and food vocabulary",
      description: "Master restaurant conversations and food terms",
      buttons: [
        "Ordering Food",
        "Food Vocabulary",
        "Restaurant Phrases"
      ]
    },
    {
      image: numberImage,
      title: "Numbers and counting",
      description: "Number and counter suffixes",
      buttons: [
        "Basic Numbers",
        "Counters",
        "Phone Numbers"
      ]
    }
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

        {/* Content Sections with Image + Buttons */}
        {contentSections.map((section, index) => (
          <React.Fragment key={index}>
            <section className="lesson-image-section">
              <img src={section.image} alt={section.title} className="lesson-image" />
              <div className="image-text-container">
                <p className="image-caption">{section.title}</p>
                <p className="image-description">{section.description}</p>
              </div>
            </section>

            <section className="play-circles-section">
              <div className="play-circles-container">
                {section.buttons.map((buttonText, btnIndex) => (
                  <div key={btnIndex} className="play-circle">
                    <div className="play-icon">▶</div>
                    <p className="circle-label">{buttonText}</p>
                  </div>
                ))}
              </div>
            </section>
          </React.Fragment>
        ))}
      </main>
    </div>
  );
};

export default JapanesePage;