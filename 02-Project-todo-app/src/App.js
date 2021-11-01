import React, { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';

import bcgLightImage from './images/bg-desktop-light.jpg';
import bcgDarkImage from './images/bg-desktop-dark.jpg';

const getStorageTheme = () => {
  let theme = localStorage.getItem('theme');
  if (theme) {
    return localStorage.getItem('theme');
  } else {
    return 'light';
  }
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const handleToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <main
      className={`${
        theme === 'light' ? 'main ligth-theme' : 'main dark-theme'
      }`}
    >
      <div className='img-container'>
        <img
          src={`${theme === 'light' ? bcgLightImage : bcgDarkImage}`}
          alt=''
          className='bcg-image'
        />
      </div>
      <div className='header'>
        <h2>todo</h2>
        <button type='button' className='toggleBtn' onClick={handleToggle}>
          {theme === 'light' ? <FaMoon /> : <RiSunFill />}
        </button>
      </div>
      <div className='form-list-container'>
        <Form />
        <List />
      </div>
    </main>
  );
}

export default App;
