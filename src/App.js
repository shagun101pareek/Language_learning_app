import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LanguageScroller from './components/LanguageScroller';
import JapanesePage from './components/JapanesePage';
import headerBackground from '../src/components/assets/Header_image.png';
import Footer from './Footer'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{
          backgroundImage: `linear-gradient(#6ea1ee,#4A89DC), url(${headerBackground})`
        }}>
          <div className="header-content">
            <h1>Language Learning App</h1>
            <nav className="App-nav">
              <a className="App-link" href="/">Home</a>
              <a className="App-link" href="/about">About</a>
              <a className="App-link" href="/contact">Contact</a>
            </nav>
            
            {/* Static text added below navigation */}
            <div className="japanese-promo">
              Go to Japanese → Greetings and Basic Conversation
            </div>
          </div>
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<LanguageScroller />} />
            <Route path="/japanese" element={<JapanesePage />} />
            <Route path="/learn/ja" element={<JapanesePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;