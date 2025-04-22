import React, { useState, useEffect } from 'react';
import './SelfIntroPage.css';
import Header_image from './assets/Header_image.png';

const INTRO_LESSONS = [
  {
    id: 1,
    title: "Basic Self Introduction",
    japanese: "はじめまして",
    romaji: "Hajimemashite",
    meaning: "Nice to meet you",
    practice: [
      { id: 'formal', label: 'Formal Greeting', image: require('./assets/SelfIntro/FormalGreeting.png') },
      { id: 'casual', label: 'Casual Greeting', image: require('./assets/SelfIntro/CasualGreeting.png') }
    ]
  },
  {
    id: 2,
    title: "Saying Your Name",
    japanese: "私の名前は___です",
    romaji: "Watashi no namae wa ___ desu",
    meaning: "My name is ___",
    practice: [
      { id: 'formal', label: 'Formal Introduction', image: require('./assets/SelfIntro/FormalIntro.png') }
    ]
  },
  {
    id: 3,
    title: "Where You're From",
    japanese: "___から来ました",
    romaji: "___ kara kimashita",
    meaning: "I'm from ___",
    practice: [
      { id: 'country', label: 'Country', image: require('./assets/SelfIntro/Country.png') },
      { id: 'city', label: 'City', image: require('./assets/SelfIntro/City (2).png') }
    ]
  },
  {
    id: 4,
    title: "Your Occupation",
    japanese: "私は___です",
    romaji: "Watashi wa ___ desu",
    meaning: "I am a ___",
    practice: [
      { id: 'work', label: 'Work', image: require('./assets/SelfIntro/Work.png') },
      { id: 'study', label: 'Study', image: require('./assets/SelfIntro/study.png') }
    ]
  }
];

const SelfIntroPage = ({ onNext }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const lesson = INTRO_LESSONS[currentLesson];

  useEffect(() => {
    console.log('Practice images:', lesson.practice.map(p => p.image));
  }, [currentLesson]);

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.currentTarget.src);
  };

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (currentLesson < INTRO_LESSONS.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setSelectedOption(null);
      // Scroll to top of the page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      onNext();
    }
  };

  return (
    <div className="self-intro-page" 
    style={{ 
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${Header_image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="intro-card">
        <div className="intro-content">
          <div className="intro-text-container">
            <div className="japanese-phrase">{lesson.japanese}</div>
            <div className="romaji-text">{lesson.romaji}</div>
            <div className="meaning-text">{lesson.meaning}</div>
          </div>

          <div className="practice-section">
            {lesson.practice.map((option) => (
              <div
                key={option.id}
                className={`practice-option ${selectedOption === option.id ? 'selected' : ''}`}
                onClick={() => handleOptionSelect(option.id)}
              >
                <div className="practice-image-container">
                  <img 
                    src={option.image} 
                    alt={option.label} 
                    className="practice-image"
                    onError={handleImageError}
                  />
                </div>
              </div>
            ))}
          </div>

          <button 
            className="next-button"
            onClick={handleNext}
          >
            {currentLesson < INTRO_LESSONS.length - 1 ? 'Next' : 'Complete'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroPage; 