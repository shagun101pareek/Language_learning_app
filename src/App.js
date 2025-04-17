import React from 'react';
import './App.css';
import LanguageScroller from './components/LanguageScroller';

function App() {
  return (
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
        <LanguageScroller />
      </main>
    </div>
  );
}

export default App; 