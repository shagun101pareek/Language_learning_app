import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LanguageScroller from './components/LanguageScroller';
import JapanesePage from './components/JapanesePage'; // You'll create this next

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Language Learning App</h1>
          <nav className="App-nav">
            <a className="App-link" href="/">Home</a>
            <a className="App-link" href="/about">About</a>
            <a className="App-link" href="/contact">Contact</a>
          </nav>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<LanguageScroller />} />
            <Route path="/japanese" element={<JapanesePage />} />
            <Route path="/learn/ja" element={<JapanesePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;