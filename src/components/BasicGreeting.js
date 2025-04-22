import React, { useState } from 'react';
import './BasicGreeting.css';
import mascotImage from './assets/mascot.png'; 
import morningImage from './assets/morningImage.png';
import dayImage from './assets/dayScene.png'; 
import nightImage from './assets/nightScene.png';
import goodMorningImage from './assets/goodMorningImage.png';
import shizukaImage from './assets/shizuka.png';
import konnichiwaImage from './assets/konnichiwa.png';
import Header_image from './assets/Header_image.png';

const WelcomePage = ({ onNext }) => {
  const [currentView, setCurrentView] = useState('welcome');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTranslation, setSelectedTranslation] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [matchingSequence, setMatchingSequence] = useState([]);
  const [isCorrectSequence, setIsCorrectSequence] = useState(false);
  const [lessonStats] = useState({
    timeInMinutes: 1,
    timeInSeconds: 9,
    accuracy: 97,
    xp: 50,
    words: 2
  });

  const handleNext = () => {
    if (currentView === 'welcome') {
      setCurrentView('greeting');
    } else if (currentView === 'greeting') {
      setCurrentView('identify');
    } else if (currentView === 'identify') {
      setCurrentView('translateMorning');
    } else if (currentView === 'translateMorning') {
      setCurrentView('newGreeting');
    } else if (currentView === 'newGreeting') {
      setCurrentView('translate');
    } else if (currentView === 'translate') {
      setCurrentView('matching');
    } else if (currentView === 'matching') {
      setCurrentView('complete');
    } else {
      onNext();
    }
    setSelectedOption(null);
    setSelectedTranslation(null);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleTranslationSelect = (translation) => {
    setSelectedTranslation(translation);
  };

  const handleMatchSelect = (item) => {
    if (selectedItem === null) {
      setSelectedItem(item);
    } else {
      const pair = [selectedItem, item];
      const isValidPair = (
        (pair[0] === 'morning' && pair[1] === 'ohayo') ||
        (pair[0] === 'ohayo' && pair[1] === 'morning') ||
        (pair[0] === 'hello' && pair[1] === 'konnichiwa') ||
        (pair[0] === 'konnichiwa' && pair[1] === 'hello')
      );

      if (isValidPair) {
        const newPair = pair[0] === 'morning' || pair[0] === 'ohayo' ? 'morning' : 'hello';
        if (!matchedPairs.includes(newPair)) {
          const newMatchedPairs = [...matchedPairs, newPair];
          setMatchedPairs(newMatchedPairs);
          setMatchingSequence([...matchingSequence, newPair]);
          const isCorrect = 
            newMatchedPairs.length === 2 && 
            newMatchedPairs[0] === 'morning' && 
            newMatchedPairs[1] === 'hello';
          setIsCorrectSequence(isCorrect);
        }
      }
      setSelectedItem(null);
    }
  };

  if (currentView === 'welcome') {
    return (
      <div 
         className="welcome-page" 
           style={{ 
           backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed',
           backgroundRepeat: 'no-repeat'
  }}
>
        
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

  if (currentView === 'greeting') {
    return (
      <div 
  className="welcome-page" 
  style={{ 
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}
>
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

  if (currentView === 'identify') {
    return (
      <div 
  className="welcome-page" 
  style={{ 
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}
>
        <div className="greeting-card identify-card">
          <h2 className="identify-title">Identify from options</h2>
          <div className="japanese-text large">おはよう (ohayō)</div>
          
          <div className="options-container">
            <div 
              className={`option-card ${selectedOption === 'morning' ? 'selected' : ''}`}
              onClick={() => handleOptionSelect('morning')}
            >
              <img src={dayImage} alt="Morning scene" className="option-image" />
              <div className="option-label">Morning</div>
            </div>
            <div 
              className={`option-card ${selectedOption === 'night' ? 'selected' : ''}`}
              onClick={() => handleOptionSelect('night')}
            >
              <img src={nightImage} alt="Night scene" className="option-image" />
              <div className="option-label">Night</div>
            </div>
          </div>

          <button 
            className={`next-button ${selectedOption ? 'active' : 'disabled'}`}
            onClick={handleNext}
            disabled={!selectedOption}
          >
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

  if (currentView === 'translateMorning') {
    return (
      <div 
  className="welcome-page" 
  style={{ 
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}
>
        <div className="greeting-card translate-card">
          <h2 className="translate-title">Translate this sentence</h2>
          <div className="translate-text">Good morning, Ken.</div>

          <div className="translation-image-container">
            <img 
              src={goodMorningImage} 
              alt="Two friends greeting" 
              className="translation-image"
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }}
            />
          </div>

          <div className="translation-options">
            <div 
              className={`translation-option ${selectedTranslation === 'ohayou' ? 'selected' : ''}`}
              onClick={() => handleTranslationSelect('ohayou')}
            >
              <div className="option-romaji">O ha yo u, Ken</div>
              <div className="option-japanese">おはよう、けん。</div>
            </div>
            <div 
              className={`translation-option ${selectedTranslation === 'konnichiwa' ? 'selected' : ''}`}
              onClick={() => handleTranslationSelect('konnichiwa')}
            >
              <div className="option-romaji">Ko n ni chi wa, Ken</div>
              <div className="option-japanese">こんにちは、けん。</div>
            </div>
          </div>

          <button 
            className={`next-button ${selectedTranslation ? 'active' : 'disabled'}`}
            onClick={handleNext}
            disabled={!selectedTranslation}
          >
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

  if (currentView === 'newGreeting') {
    return (
      <div 
  className="welcome-page" 
  style={{ 
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}
>
        <div className="greeting-card new-greeting-card">
          <h2 className="new-greeting-title">NEW GREETING</h2>

          <div className="japanese-text">こんにちは</div>
          <div className="romaji-text">Ko n ni chi wa</div>

          <div className="greeting-description">
            <p>こんにちは <span className="bold-text">(konnichiwa)</span> is a Japanese greeting that translates to 'hello' or 'good afternoon'.</p>
          </div>

          <div className="greeting-image-container">
            <img 
              src={konnichiwaImage} 
              alt="Friends greeting in flower garden" 
              className="greeting-image"
            />
          </div>
          

          <button className="next-button" onClick={handleNext}>
            Next
          </button>
          
        </div>
      </div>
    );
  }

  if (currentView === 'translate') {
    return (
      <div 
  className="welcome-page" 
  style={{ 
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}
>
        <div className="greeting-card translate-card">
          <h2 className="translate-title">Translate to Japanese</h2>
          <div className="translate-text">Hello, Shizuka.</div>

          <div className="translation-image-container">
            <img src={shizukaImage} alt="Friends greeting" className="translation-image" />
          </div>

          <div className="translation-options">
            <div 
              className={`translation-option ${selectedTranslation === 'ohayou' ? 'selected' : ''}`}
              onClick={() => handleTranslationSelect('ohayou')}
            >
              <div className="option-romaji">O ha yo u, Shizuka</div>
              <div className="option-japanese">おはよう、しずか。</div>
            </div>
            <div 
              className={`translation-option ${selectedTranslation === 'konnichiwa' ? 'selected' : ''}`}
              onClick={() => handleTranslationSelect('konnichiwa')}
            >
              <div className="option-romaji">Ko n ni chi wa, Shizuka</div>
              <div className="option-japanese">こんにちは、しずか。</div>
            </div>
          </div>

          <button 
            className={`next-button ${selectedTranslation ? 'active' : 'disabled'}`}
            onClick={handleNext}
            disabled={!selectedTranslation}
          >
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

  if (currentView === 'matching') {
    return (
      <div 
  className="welcome-page" 
  style={{ 
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }}
>
        <div className="greeting-card matching-card">
          <h2 className="matching-title">Match the following</h2>

          <div className="matching-container">
            <div className="matching-column">
              <div 
                className={`matching-item ${matchedPairs.includes('morning') ? 'matched' : ''} ${selectedItem === 'morning' ? 'selected' : ''}`}
                onClick={() => handleMatchSelect('morning')}
              >
                Good morning
              </div>
              <div 
                className={`matching-item ${matchedPairs.includes('hello') ? 'matched' : ''} ${selectedItem === 'hello' ? 'selected' : ''}`}
                onClick={() => handleMatchSelect('hello')}
              >
                Hello
              </div>
            </div>

            <div className="matching-column">
              <div 
                className={`matching-item japanese ${matchedPairs.includes('morning') ? 'matched' : ''} ${selectedItem === 'ohayo' ? 'selected' : ''}`}
                onClick={() => handleMatchSelect('ohayo')}
              >
                <div className="option-romaji">O ha yo u</div>
                <div className="option-japanese">おはよう</div>
              </div>
              <div 
                className={`matching-item japanese ${matchedPairs.includes('hello') ? 'matched' : ''} ${selectedItem === 'konnichiwa' ? 'selected' : ''}`}
                onClick={() => handleMatchSelect('konnichiwa')}
              >
                <div className="option-romaji">Ko n ni chi wa</div>
                <div className="option-japanese">こんにちは</div>
              </div>
            </div>
          </div>

          <button 
            className={`next-button ${isCorrectSequence ? 'active' : 'disabled'}`}
            onClick={handleNext}
            disabled={!isCorrectSequence}
          >
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

  if (currentView === 'complete') {
    return (
      <div 
        className="welcome-page" 
          style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${Header_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="greeting-card complete-card">
          <div className="mascot-container complete">
            {/* Mascot image placeholder */}
          </div>

          <h2 className="complete-title">Wow, you definitely are fast</h2>

          <div className="stats-container">
            <div className="lesson-time">
              <span className="stats-label">LESSON COMPLETED IN</span>
              <span className="stats-value">{lessonStats.timeInMinutes}:{lessonStats.timeInSeconds.toString().padStart(2, '0')}</span>
            </div>

            <div className="stats-grid">
              <div className="stats-item accuracy">
                <span className="stats-label">ACCURACY</span>
                <span className="stats-value">{lessonStats.accuracy}%</span>
              </div>
              <div className="stats-item xp">
                <span className="stats-label">XP</span>
                <span className="stats-value">{lessonStats.xp}</span>
              </div>
              <div className="stats-item words">
                <span className="stats-label">WORDS</span>
                <span className="stats-value">{lessonStats.words}</span>
              </div>
            </div>
          </div>

          <div className="feedback-section">
            <h3>How was the lesson?</h3>
            <div className="feedback-options">
              <button className="feedback-button">👍</button>
              <button className="feedback-button">👎</button>
            </div>
          </div>

          <button className="next-button continue" onClick={handleNext}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default WelcomePage;