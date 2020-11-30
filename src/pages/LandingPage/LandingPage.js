import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="landing-head">BookShelf</h1>
      <a className="landing-link" href="/search"><h3 className="landing-link">Explore to find your favorite books!</h3></a>
    </div>
  )
}
