import React from 'react';
import './Footer.css'; // we'll create this file next

function Footer() {
  return (
    <footer className="footer">
      <p>Shagun Pareek</p>
      <p>
        <a href="https://github.com/shagun101pareek" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        | 📞 <a href="tel:+1234567890">+91-9461046343</a>
      </p>
    </footer>
  );
}

export default Footer;
