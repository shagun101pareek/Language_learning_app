import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JapanesePage.css';
import greetingsImage from '../components/assets/Greetings.png';
import diningImage from '../components/assets/Dining.png';
import numberImage from '../components/assets/Number.png';
import cityImage from '../components/assets/City.png';
import prefImage from '../components/assets/PrefImage.png';
import homeImage from '../components/assets/Home.png';
import dailyImage from '../components/assets/Daily.png';
import talkingImage from '../components/assets/Talking.png';
import WelcomePage from './WelcomePage';

const JapanesePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('main');

  const handleLessonClick = (sectionIndex, buttonIndex) => {
    if (sectionIndex === 0 && buttonIndex === 0) {
      setCurrentView('welcome');
    }
  };

  const handleNext = () => {
    // We'll handle the next steps after welcome page later
    setCurrentView('main');
  };

  if (currentView === 'welcome') {
    return <WelcomePage onNext={handleNext} />;
  }

  const contentSections = [
    {
      image: greetingsImage,
      title: "Greetings and basic conversations",
      description: "5 topics • 35 words",
      buttons: [
        "Basic Greetings",
        "Self Introduction",
        "Common Phrases",
        "Profession and nationalities",
        "Your hometown",
      ]
    },
    {
      image: diningImage,
      title: "Family, shopping and dining",
      description: "5 topics • 67 words",
      buttons: [
        "Ordering Food",
        "Food Vocabulary",
        "Restaurant Phrases",
        "All about family",
        "Dining out"
      ]
    },
    {
      image: numberImage,
      title: "Numbers and counter suffixes",
      description: "5 topics • 43 words",
      buttons: [
        "Basic Numbers",
        "Counters",
        "Phone Numbers",
        "More about numbers",
        "Hundred and beyond"
      ]
    },
    {
        image: cityImage,
        title: "Getting around the city",
        description: "5 topics • 49 words",
        buttons: [
            "Jump to this chapter",
            "About places",
            "Travel time",
            "Let's go shopping",
            "About"
        ]
    },
    {
        image: prefImage,
        title: "Your preferences",
        description: "5 topics • 37 words",
        buttons: [
            "Jump to this chapter",
            "Your likes",
            "Food and beverages",
            "About sports",
            "Entertainment"
        ]
    },
    {
        image: homeImage,
        title: "Your home and neighbourhood",
        description: "5 topics • 31 words",
        buttons: [
            "Jump to this chapter",
            "Your house",
            "Your kitchen",
            "Your room",
            "Practice"
        ]
    },
    {
        image: dailyImage,
        title: "Daily routine",
        description: "5 topics • 49 words",
        buttons: [
            "Jump to this chapter",
            "Morning routine",
            "Off to work",
            "Day at work",
            "Returning to home"
        ]
    },
    {
        image: talkingImage,
        title: "Talking about plans",
        description: "5 topics • 55 words",
        buttons: [
            "Jumo to this chapter",
            "Weekend plans",
            "Inviting friends",
            "Going on a date",
            "Event management"
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
                  <div 
                    key={btnIndex} 
                    className="play-circle"
                    onClick={() => handleLessonClick(index, btnIndex)}
                    style={{ cursor: 'pointer' }}
                  >
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