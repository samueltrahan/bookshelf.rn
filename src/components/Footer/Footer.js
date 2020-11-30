import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="copy">
      <p className="copy"><i className="fab fa-react fa-2x"></i></p>
      <p>&copy; 2020 by Samuel Trahan</p>
      </div>
      <div className="social-links">
        <a className="links" target="_blank" rel="noreferrer" href="https://www.github.com/samueltrahan"><i className="fab fa-github fa-3x"></i></a>
        <a className="links" target="_blank" rel="noreferrer" href="https://www.twitter.com/samueltrahan4"><i className="fab fa-twitter fa-3x"></i></a>
        <a className="links" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/samueltrahan/"><i className="fab fa-linkedin fa-3x"></i></a>
      </div>
    </div>
  )
}
