import React, { useState } from 'react';
import './CommonPhrasesPage.css';

import thankyouImage from './assets/CommonPhrases/thankyou.png';
import thankyouCasualImage from './assets/CommonPhrases/thankyou_casual.jpg';
import thankyouFormalImage from './assets/CommonPhrases/thankyou_formal.png';
import pleaseImage from './assets/CommonPhrases/please.jpg';
import welcomeFormalImage from './assets/CommonPhrases/welcome_formal.png';
import welcomeCasualImage from './assets/CommonPhrases/welcome_casual.jpg';
import basicPhrasesImage from './assets/CommonPhrases/basic_phrases.jpg';
import excuseMeImage from './assets/CommonPhrases/excuse_me.jpg';
import sorryFormalImage from './assets/CommonPhrases/sorry_formal.jpg';
import sorryCasualImage from './assets/CommonPhrases/sorry_casual.jpg';
import directionsImage from './assets/CommonPhrases/directions.jpg';
import goodbyeImage from './assets/CommonPhrases/goodbye.jpg';
import goodbyeCasualImage from './assets/CommonPhrases/goodbye_casual.jpg';
import goodbyeFormalImage from './assets/CommonPhrases/goodbye_formal.jpg';
import goodbyeMatchImage from './assets/CommonPhrases/goodbye_match.jpg';
import itadakimasuImage from './assets/CommonPhrases/itadakimasu.jpg';
import gochisousamaImage from './assets/CommonPhrases/gochisousama.jpg';
import oishiiImage from './assets/CommonPhrases/oishii.jpg';
import whenToEatImage from './assets/CommonPhrases/when_to_eat.jpg';
import goodMorningImage from './assets/CommonPhrases/good_morning.jpg';
import Header_image from './assets/Header_image.png';

const PHRASES_LESSONS = [
  {
    id: 1,
    type: 'learn',
    title: "Thank You",
    japanese: "ありがとうございます",
    romaji: "Arigatou gozaimasu",
    meaning: "Thank you (formal)",
    explanation: "This is the polite form of 'thank you' used in most situations with people you don't know well or in formal settings.",
    image: thankyouImage,
    examples: [
      { 
        japanese: "どうも ありがとう", 
        romaji: "Doumo arigatou", 
        meaning: "Thanks a lot (casual)",
        image: thankyouCasualImage
      },
      { 
        japanese: "ありがとうございました", 
        romaji: "Arigatou gozaimashita", 
        meaning: "Thank you (past tense, formal)",
        image: thankyouFormalImage
      }
    ]
  },
  {
    id: 2,
    type: 'learn',
    title: "Please and You're Welcome",
    japanese: "お願いします",
    romaji: "Onegaishimasu",
    meaning: "Please",
    explanation: "A polite way to make requests or ask for something. Often used when ordering at restaurants or asking for help.",
    image: pleaseImage,
    examples: [
      { 
        japanese: "どういたしまして", 
        romaji: "Douitashimashite", 
        meaning: "You're welcome (formal)",
        image: welcomeFormalImage
      },
      { 
        japanese: "いいえ", 
        romaji: "Iie", 
        meaning: "No problem / You're welcome (casual)",
        image: welcomeCasualImage
      }
    ]
  },
  {
    id: 3,
    type: 'match',
    title: "Match Basic Phrases",
    image: basicPhrasesImage,
    pairs: [
      { japanese: "すみません", romaji: "Sumimasen", meaning: "Excuse me/I'm sorry" },
      { japanese: "はい", romaji: "Hai", meaning: "Yes" },
      { japanese: "いいえ", romaji: "Iie", meaning: "No" }
    ]
  },
  {
    id: 4,
    type: 'learn',
    title: "Excuse Me and Sorry",
    japanese: "すみません",
    romaji: "Sumimasen",
    meaning: "Excuse me / I'm sorry",
    explanation: "A versatile phrase used to get attention, apologize, or express gratitude. Very commonly used in daily life.",
    image: excuseMeImage,
    examples: [
      { 
        japanese: "ごめんなさい", 
        romaji: "Gomen nasai", 
        meaning: "I'm sorry (formal)",
        image: sorryFormalImage
      },
      { 
        japanese: "ごめん", 
        romaji: "Gomen", 
        meaning: "Sorry (casual)",
        image: sorryCasualImage
      }
    ]
  },
  {
    id: 5,
    type: 'choice',
    title: "Choose the Right Response",
    question: "Someone helps you with directions. What do you say?",
    japanese: "すみません、ありがとうございます",
    image: directionsImage,
    options: [
      { id: 'correct', text: "Excuse me, thank you", isCorrect: true },
      { id: 'wrong1', text: "Good morning", isCorrect: false },
      { id: 'wrong2', text: "Goodbye", isCorrect: false }
    ]
  },
  {
    id: 6,
    type: 'learn',
    title: "Goodbye Expressions",
    japanese: "さようなら",
    romaji: "Sayounara",
    meaning: "Goodbye (formal)",
    explanation: "Used for long-term goodbyes. For casual daily goodbyes, different expressions are more common.",
    image: goodbyeImage,
    examples: [
      { 
        japanese: "じゃあね", 
        romaji: "Jaa ne", 
        meaning: "See you (casual)",
        image: goodbyeCasualImage
      },
      { 
        japanese: "また会いましょう", 
        romaji: "Mata aimashou", 
        meaning: "Let's meet again",
        image: goodbyeFormalImage
      }
    ]
  },
  {
    id: 7,
    type: 'match',
    title: "Match Goodbye Phrases",
    image: goodbyeMatchImage,
    pairs: [
      { japanese: "さようなら", romaji: "Sayounara", meaning: "Goodbye" },
      { japanese: "また会いましょう", romaji: "Mata aimashou", meaning: "Let's meet again" },
      { japanese: "じゃあね", romaji: "Jaa ne", meaning: "See you" }
    ]
  },
  {
    id: 8,
    type: 'learn',
    title: "Daily Expressions",
    japanese: "いただきます",
    romaji: "Itadakimasu",
    meaning: "Let's eat (before meals)",
    explanation: "Used before starting a meal to express gratitude for the food. Has no direct English translation.",
    image: itadakimasuImage,
    examples: [
      { 
        japanese: "ごちそうさま", 
        romaji: "Gochisousama", 
        meaning: "Thank you for the meal (after eating)",
        image: gochisousamaImage
      },
      { 
        japanese: "おいしい", 
        romaji: "Oishii", 
        meaning: "Delicious",
        image: oishiiImage
      }
    ]
  },
  {
    id: 9,
    type: 'choice',
    title: "When to Use",
    question: "You're about to start eating. What should you say?",
    japanese: "いただきます",
    image: whenToEatImage,
    options: [
      { id: 'correct', text: "Before eating", isCorrect: true },
      { id: 'wrong1', text: "After eating", isCorrect: false },
      { id: 'wrong2', text: "When cooking", isCorrect: false }
    ]
  },
  {
    id: 10,
    type: 'translate',
    title: "Translate the Phrase",
    japanese: "おはようございます、お元気ですか",
    romaji: "Ohayou gozaimasu, ogenki desu ka",
    meaning: "Good morning, how are you?",
    image: goodMorningImage,
    hint: "This combines a morning greeting with asking about someone's well-being"
  }
];

const CommonPhrasesPage = ({ onNext }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const lesson = PHRASES_LESSONS[currentLesson];

  const handleMatchSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else if (selectedItems.length < 2) {
      const newSelected = [...selectedItems, item];
      setSelectedItems(newSelected);
      
      if (newSelected.length === 2) {
        const isMatch = newSelected[0].meaning === newSelected[1].japanese || 
                       newSelected[0].japanese === newSelected[1].meaning;
        setIsCorrect(isMatch);
        setShowResult(true);
      }
    }
  };

  const handleChoiceSelect = (option) => {
    setIsCorrect(option.isCorrect);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentLesson < PHRASES_LESSONS.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setSelectedItems([]);
      setShowResult(false);
      setIsCorrect(false);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      onNext();
    }
  };

  const renderLearnPage = () => (
    <div className="learn-content" >
      <h2 className="phrase-title">{lesson.title}</h2>
      <div className="japanese-phrase">{lesson.japanese}</div>
      <div className="romaji-text">{lesson.romaji}</div>
      <div className="meaning-text">{lesson.meaning}</div>
      <p className="explanation-text">{lesson.explanation}</p>
      
      <h3 className="examples-title">Examples</h3>
      <div className="examples-grid">
        {lesson.examples.map((example, index) => (
          <div key={index} className="example-item">
            <div className="example-image-container">
              <img 
                src={example.image}
                alt={example.meaning}
                className="example-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.backgroundColor = '#f0f0f0';
                }}
              />
            </div>
            <div className="example-content">
              <div className="japanese-text">{example.japanese}</div>
              <div className="romaji-small">{example.romaji}</div>
              <div className="meaning-small">{example.meaning}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMatchPage = () => (
    <div className="match-content">
      <h2 className="phrase-title">{lesson.title}</h2>
      
      <div className="match-image-container">
        <img 
          src={lesson.image}
          alt={lesson.title}
          className="match-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.backgroundColor = '#f0f0f0';
          }}
        />
      </div>

      <div className="match-grid">
        {lesson.pairs.map((pair, index) => (
          <div 
            key={index}
            className={`match-item ${selectedItems.includes(pair) ? 'selected' : ''}`}
            onClick={() => handleMatchSelect(pair)}
          >
            <div className="match-item-content">
              <div className="match-japanese">{pair.japanese}</div>
              <div className="match-romaji">{pair.romaji}</div>
              <div className="match-meaning">{pair.meaning}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderChoicePage = () => (
    <div className="choice-content">
      <h2 className="phrase-title">{lesson.title}</h2>
      <div className="japanese-phrase">{lesson.japanese}</div>
      
      <div className="options-container">
        {lesson.options.map((option) => (
          <button
            key={option.id}
            className={`choice-option ${showResult && option.isCorrect ? 'selected' : ''}`}
            onClick={() => handleChoiceSelect(option)}
          >
            <img 
              src={option.image} 
              alt={option.text}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.backgroundColor = '#f0f0f0';
              }}
            />
            <div className="option-text">{option.text}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderTranslatePage = () => (
    <div className="translate-content">
      <h2 className="phrase-title">{lesson.title}</h2>
      <div className="japanese-phrase">{lesson.japanese}</div>
      <div className="romaji-text">{lesson.romaji}</div>
      <div className="hint-text">{lesson.hint}</div>
      
      <div className="translation-input">
        <input 
          type="text" 
          placeholder="Type your translation..."
          className="translate-input"
        />
      </div>
    </div>
  );

  return (
    <div className="phrases-page">
      <div className="phrase-card">
        {lesson.type === 'learn' && renderLearnPage()}
        {lesson.type === 'match' && renderMatchPage()}
        {lesson.type === 'choice' && renderChoicePage()}
        {lesson.type === 'translate' && renderTranslatePage()}

        <button 
          className="next-button"
          onClick={handleNext}
        >
          {currentLesson < PHRASES_LESSONS.length - 1 ? 'Next' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default CommonPhrasesPage; 