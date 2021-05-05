import React, { useState, useEffect } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import translate from './lib/translate';
import 'bootstrap';

function App() {
  const [content, setContent] = useState('home');

  var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
  const [french, setFrench] = useState(userLang || false);

  useEffect(() => {
    var path = window.location.pathname;
    if (path) {
      setContent(path.replace('/', ''));
    }
  }, []);

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
  function handleLanguageSwitch() {
    if (french) {
      return setFrench(false);
    }
    return setFrench(true);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <a onClick={handleLanguageSwitch}>{french ? 'fr': 'en'}</a>
          <h1 onClick={handleHomeClick}>{translate('title', french)}</h1>
          <div className="row mb-hidden">
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
          <div className="row end-rain-deck-background mb-hidden">
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
          <div className="mb-roof lg-hidden">
            <table style={{width:"100%"}}>
              <tbody>
                <tr>
                  <td className="square"></td>
                  <td className="square red"></td>
                  <td className="square"></td>
                  <td className="square red"></td>
                  <td className="square"></td>
                  <td className="square red"></td>
                  <td className="square"></td>
                  <td className="square red"></td>
                  <td className="square"></td>
                  <td className="square red"></td>
                </tr>
              </tbody>
            </table>
            <table style={{width:"100%"}}>
              <tbody>
                <tr>
                  <td className="below-rain-deck"><div></div></td>
                  <td className="below-rain-red"><div></div></td>
                  <td className="below-rain-deck"><div></div></td>
                  <td className="below-rain-red"><div></div></td>
                  <td className="below-rain-deck"><div></div></td>
                  <td className="below-rain-red"><div></div></td>
                  <td className="below-rain-deck"><div></div></td>
                  <td className="below-rain-red"><div></div></td>
                  <td className="below-rain-deck"><div></div></td>
                  <td className="below-rain-red"><div></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row window mb-hidden">
        <div className="col-sm container-btn-menu"><button type="button" onClick={handleContactClick} className="btn btn-menu">{translate('contact', french)}</button></div>
        <div className="col-sm container-btn-menu"><button type="button" onClick={handleClaimClick} className="btn btn-menu">{translate('business', french)}</button></div>
        <div className="col-sm container-btn-menu"><button type="button" onClick={handleDirectoryClick} className="btn btn-menu">{translate('directory', french)}</button></div>
      </div>
      <div className="menu lg-hidden">
        <div><button type="button" onClick={handleContactClick} className="btn btn-menu">Contact.</button></div>
        <div><button type="button" onClick={handleClaimClick} className="btn btn-menu">Claim a business!</button></div>
        <div><button type="button" onClick={handleDirectoryClick} className="btn btn-menu">Directory?</button></div>
      </div>

      <div className="window content">
        <Content content={content} french={french}/>
      </div>
      <Footer french={french}/>
    </div>
  );
}

export default App;
