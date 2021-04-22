import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap';

function App() {
  const [content, setContent] = useState('home');

  // Page nav
  function handleDirectoryClick(e) {
    setContent('directory');
  }
  function handleHomeClick(e) {
    setContent('home');
  }
  function handleContactClick(e) {
    setContent('contact');
  }
  function handleClaimClick(e) {
    setContent('claim');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h1 onClick={handleHomeClick}>Zuly Marketplace</h1>
          <div className="row">
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          <div className="col-sm square"></div>
          <div className="col-sm red"></div>
          </div>
          <div className="row end-rain-deck-background">
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          <div className="col-sm below-rain-deck"></div>
          <div className="col-sm below-rain-red"></div>
          </div>
        </div>
      </div>

<div className="row window">
      <div className="col-sm container-btn-menu"><button type="button" onClick={handleContactClick} className="btn btn-menu">Contact.</button></div>
      <div className="col-sm container-btn-menu"><button type="button" onClick={handleClaimClick} className="btn btn-menu">Claim a business!</button></div>
      <div className="col-sm container-btn-menu"><button type="button" onClick={handleDirectoryClick} className="btn btn-menu">Directory?</button></div>
          </div>
          <div className="window content">

          <Content content={content}/>
          </div>
      <Footer/>
    </div>
  );
}

export default App;
