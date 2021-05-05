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
      <div class="rainbow">
        
      </div>

      <div className="window content">
        <Content content={content} french={french}/>
      </div>
      <Footer french={french}/>
    </div>
  );
}

export default App;
