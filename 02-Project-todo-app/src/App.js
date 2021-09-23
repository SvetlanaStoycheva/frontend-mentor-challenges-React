import React, { useState, useEffect } from 'react';
import List from './List';
import { useListContext } from './context';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import bcgLightImage from './images/bg-desktop-light.jpg';
import bcgDarkImage from './images/bg-desktop-dark.jpg';

const getStorageTheme = () => {
  let theme = 'light';
  if (localStorage.getItem(theme)) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const { handleAddTask, taskInput } = useListContext();
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
        <div className='form-container'>
          <form onSubmit={(e) => e.preventDefault()}>
            <button className='form-btn'>
              <AiOutlineCheckCircle />
            </button>
            <input
              type='text'
              className='form-input'
              placeholder='Create a new todo...'
              value={taskInput}
              onClick={(e) => handleAddTask(e.target.value)}
            />
          </form>
        </div>
        <List />
      </div>
    </main>
  );
}

export default App;
