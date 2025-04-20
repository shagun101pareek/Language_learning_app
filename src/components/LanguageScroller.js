import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageScroller.css';
import englishFlag from '../components/flags/english.png';
import hindiFlag from '../components/flags/hindi.png';
import spanishFlag from '../components/flags/spanish.png';
import frenchFlag from '../components/flags/french.png';
import germanFlag from '../components/flags/german.png';
import japaneseFlag from '../components/flags/japanese.png';
import koreanFlag from '../components/flags/korean.png';

const languages = [
  { 
    category: "FOR HINDI SPEAKERS",
    items: [
      { 
        code: 'en', 
        name: 'English', 
        flag: englishFlag,
      }
    ]
  },
  { 
    category: "FOR ENGLISH SPEAKERS",
    items: [
      { code: 'hi', name: 'Hindi', flag: hindiFlag },
      { code: 'es', name: 'Spanish', flag: spanishFlag },
      { code: 'fr', name: 'French', flag: frenchFlag },
      { code: 'de', name: 'German', flag: germanFlag },
      { code: 'ja', name: 'Japanese', flag: japaneseFlag },
      { code: 'ko', name: 'Korean', flag: koreanFlag }
    ]
  }
];

const LanguageScroller = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const navigate = useNavigate();

  const handleLanguageSelect = (code) => {
    setSelectedLanguage(code);
  };

  const handleDoneClick = () => {
    const selectedLangObj = languages
      .flatMap(section => section.items)
      .find(lang => lang.code === selectedLanguage);
    
    if (selectedLangObj) {
      window.scrollTo(0, 0);
      navigate(`/learn/${selectedLanguage}`, {
        state: {
          language: selectedLangObj.name,
          flag: selectedLangObj.flag,
          code: selectedLangObj.code
        }
      });
    }
  };

  const isLanguageSelected = !!selectedLanguage;

  return (
    <div className="language-page">
      <header className="language-header">
        <h1 className="page-title">Choose a language</h1>
      </header>
      
      <main className="language-content">
        {languages.map((section, sectionIndex) => (
          <section key={sectionIndex} className="language-section">
            <h2 className="section-title">{section.category}</h2>
            <div className="section-divider"></div>
            
            <div className="language-items">
              {section.items.map((language) => (
                <div 
                  key={language.code}
                  className={`language-item ${selectedLanguage === language.code ? 'selected' : ''} ${language.isMain ? 'main-language' : ''}`}
                  onClick={() => handleLanguageSelect(language.code)}
                >
                  <img 
                    src={language.flag} 
                    alt={language.name} 
                    className="language-flag" 
                    loading="lazy"
                  />
                  <div className="language-info">
                    <span className="language-name">{language.name}</span>
                    {selectedLanguage === language.code 
                      }
                    {language.isMain }
                  </div>
                </div>
              ))}
            </div>
            
            {sectionIndex < languages.length - 1 && <div className="section-divider"></div>}
          </section>
        ))}
      </main>
      
      <footer className="language-footer">
        <button 
          className={`done-button ${!isLanguageSelected ? 'disabled' : ''}`}
          onClick={handleDoneClick}
          disabled={!isLanguageSelected}
          aria-label={`Continue with ${selectedLanguage}`}
        >
          Done
        </button>
      </footer>
    </div>
  );
};

export default LanguageScroller;