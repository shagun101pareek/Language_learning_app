import React, { useState } from 'react';
import './ProfessionsPage.css';

// Import images directly
import teacherImage from './assets/professions/teacher.jpg';
import doctorImage from './assets/professions/doctor.jpg';
import engineerImage from './assets/professions/engineer.jpg';
import officeWorkerImage from './assets/professions/office-worker.jpg';
import studentImage from './assets/professions/student.jpg';
import nurseImage from './assets/professions/nurse.jpg';
import americanImage from './assets/professions/american.jpg';
import japaneseImage from './assets/professions/japanese.jpg';
import chineseImage from './assets/professions/chinese.jpg';

const professionImages = {
  teacher: teacherImage,
  doctor: doctorImage,
  engineer: engineerImage,
  officeWorker: officeWorkerImage,
  student: studentImage,
  nurse: nurseImage,
  american: americanImage,
  japanese: japaneseImage,
  chinese: chineseImage
};

const PROFESSION_LESSONS = [
  {
    id: 1,
    type: 'learn',
    title: "Professions in Japanese",
    japanese: "仕事",
    pronunciation: "(shee-go-toh)",
    meaning: "Work/Occupation",
    explanation: "When talking about professions in Japanese, we use the pattern:\n私は [profession] です\n(wah-tah-shee wah [profession] dehs)",
    examples: [
      { 
        japanese: "先生", 
        pronunciation: "(sehn-seh)",
        meaning: "Teacher",
        translation: "私は先生です = I am a teacher\n(wah-tah-shee wah sehn-seh dehs)",
        image: 'teacher'
      },
      { 
        japanese: "医者", 
        pronunciation: "(ee-shah)",
        meaning: "Doctor",
        translation: "私は医者です = I am a doctor\n(wah-tah-shee wah ee-shah dehs)",
        image: 'doctor'
      },
      { 
        japanese: "エンジニア", 
        pronunciation: "(ehn-jee-nee-ah)",
        meaning: "Engineer",
        translation: "私はエンジニアです = I am an engineer\n(wah-tah-shee wah ehn-jee-nee-ah dehs)",
        image: 'engineer'
      }
    ]
  },
  {
    id: 2,
    type: 'match',
    title: "Match Professions",
    instruction: "Match the Japanese words with their English meanings",
    pairs: [
      { 
        japanese: "会社員", 
        pronunciation: "(kai-shah-een)",
        meaning: "Office Worker",
        translation: "私は会社員です = I am an office worker\n(wah-tah-shee wah kai-shah-een dehs)",
        image: 'officeWorker'
      },
      { 
        japanese: "学生", 
        pronunciation: "(gah-koo-seh)",
        meaning: "Student",
        translation: "私は学生です = I am a student\n(wah-tah-shee wah gah-koo-seh dehs)",
        image: 'student'
      },
      { 
        japanese: "看護師", 
        pronunciation: "(kahn-go-shee)",
        meaning: "Nurse",
        translation: "私は看護師です = I am a nurse\n(wah-tah-shee wah kahn-go-shee dehs)",
        image: 'nurse'
      }
    ]
  },
  {
    id: 3,
    type: 'learn',
    title: "Nationalities",
    japanese: "国籍",
    pronunciation: "(koh-koo-sek-ee)",
    meaning: "Nationality",
    explanation: "To express nationality in Japanese, add ～人 (jeen) to the country name.\nFor example: アメリカ + 人 = アメリカ人\n(ah-meh-ree-kah + jeen = ah-meh-ree-kah-jeen)",
    examples: [
      { 
        japanese: "アメリカ人", 
        pronunciation: "(ah-meh-ree-kah-jeen)",
        meaning: "American",
        translation: "私はアメリカ人です = I am American\n(wah-tah-shee wah ah-meh-ree-kah-jeen dehs)",
        image: 'american'
      },
      { 
        japanese: "日本人", 
        pronunciation: "(nee-hohn-jeen)",
        meaning: "Japanese",
        translation: "私は日本人です = I am Japanese\n(wah-tah-shee wah nee-hohn-jeen dehs)",
        image: 'japanese'
      },
      { 
        japanese: "中国人", 
        pronunciation: "(chuu-goh-koo-jeen)",
        meaning: "Chinese",
        translation: "私は中国人です = I am Chinese\n(wah-tah-shee wah chuu-goh-koo-jeen dehs)",
        image: 'chinese'
      }
    ]
  },
  {
    id: 4,
    type: 'choice',
    title: "Choose the Correct Profession",
    question: "How do you say 'I am a student' in Japanese?",
    japanese: "私は___です",
    pronunciation: "(wah-tah-shee wah ___ dehs)",
    options: [
      { 
        id: 'correct', 
        text: "学生", 
        pronunciation: "(gah-koo-seh)",
        meaning: "Student",
        isCorrect: true 
      },
      { 
        id: 'wrong', 
        text: "先生", 
        pronunciation: "(sehn-seh)",
        meaning: "Teacher",
        isCorrect: false 
      }
    ]
  },
  {
    id: 5,
    type: 'translate',
    title: "Complete the Sentence",
    japanese: "私はイギリス人のエンジニアです",
    pronunciation: "(wah-tah-shee wah ee-gee-ree-soo-jeen no ehn-jee-nee-ah dehs)",
    meaning: "I am a British engineer",
    hint: "This sentence combines:\nイギリス人 (ee-gee-ree-soo-jeen) = British\nの (no) = possessive particle\nエンジニア (ehn-jee-nee-ah) = engineer",
    translation: "私は = I\nイギリス人 (ee-gee-ree-soo-jeen) = British\nの (no) = possessive particle\nエンジニア (ehn-jee-nee-ah) = engineer\nです = am"
  }
];

const ProfessionsPage = ({ onNext }) => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const lesson = PROFESSION_LESSONS[currentLesson];

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
    if (currentLesson < PROFESSION_LESSONS.length - 1) {
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
    <>
      <div className="profession-content">
        <h2 className="profession-title">{lesson.title}</h2>
        <div className="japanese-phrase">{lesson.japanese}</div>
        <div className="pronunciation-text">{lesson.pronunciation}</div>
        <div className="meaning-text">{lesson.meaning}</div>
        <p className="explanation-text">{lesson.explanation}</p>
        
        <div className="examples-section">
          {lesson.examples.map((example, index) => (
            <div key={index} className="example-item">
              <div className="example-image-container">
                {professionImages[example.image] ? (
                  <img 
                    src={professionImages[example.image]} 
                    alt={example.meaning}
                    className="example-image"
                  />
                ) : (
                  <div className="example-image-placeholder">
                    {example.meaning}
                  </div>
                )}
              </div>
              <div className="japanese-text">{example.japanese}</div>
              <div className="pronunciation-small">{example.pronunciation}</div>
              <div className="meaning-small">{example.meaning}</div>
              <div className="translation-text">{example.translation}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderMatchPage = () => (
    <div className="match-content">
      <h2 className="match-title">{lesson.title}</h2>
      <p className="match-instruction">{lesson.instruction}</p>
      <div className="match-grid">
        {lesson.pairs.map((pair, index) => (
          <React.Fragment key={index}>
            <div 
              className={`match-item ${selectedItems.includes(pair) ? 'selected' : ''}`}
              onClick={() => handleMatchSelect(pair)}
            >
              <div className="match-japanese">{pair.japanese}</div>
              <div className="match-pronunciation">{pair.pronunciation}</div>
            </div>
            <div 
              className={`match-item ${selectedItems.includes(pair) ? 'selected' : ''}`}
              onClick={() => handleMatchSelect(pair)}
            >
              <div className="match-meaning">{pair.meaning}</div>
              {selectedItems.includes(pair) && (
                <div className="match-translation">{pair.translation}</div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderChoicePage = () => (
    <div className="choice-content">
      <h2 className="choice-title">{lesson.title}</h2>
      <div className="question-text">{lesson.question}</div>
      <div className="japanese-phrase">{lesson.japanese}</div>
      <div className="pronunciation-text">{lesson.pronunciation}</div>
      
      <div className="options-container">
        {lesson.options.map((option) => (
          <button
            key={option.id}
            className={`choice-option ${showResult && option.isCorrect ? 'correct' : ''}`}
            onClick={() => handleChoiceSelect(option)}
          >
            <div className="option-japanese">{option.text}</div>
            <div className="option-pronunciation">{option.pronunciation}</div>
            <div className="option-meaning">{option.meaning}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderTranslatePage = () => (
    <div className="translate-content">
      <h2 className="translate-title">{lesson.title}</h2>
      <div className="japanese-phrase">{lesson.japanese}</div>
      <div className="pronunciation-text">{lesson.pronunciation}</div>
      <div className="meaning-text">{lesson.meaning}</div>
      <div className="hint-text">{lesson.hint}</div>
      <div className="translation-breakdown">{lesson.translation}</div>
      
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
    <div className="professions-page">
      <div className="profession-card">
        {lesson.type === 'learn' && renderLearnPage()}
        {lesson.type === 'match' && renderMatchPage()}
        {lesson.type === 'choice' && renderChoicePage()}
        {lesson.type === 'translate' && renderTranslatePage()}

        <button 
          className="next-button"
          onClick={handleNext}
        >
          {currentLesson < PROFESSION_LESSONS.length - 1 ? 'Next' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default ProfessionsPage; 