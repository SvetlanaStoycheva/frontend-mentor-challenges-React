import React, { useState, useEffect } from 'react';
import pattern from './images/pattern-bg.png';
import MyMap from './components/Map';
import Result from './components/Result';
import { MdKeyboardArrowRight } from 'react-icons/md';

function App() {
  const [inputIP, setInputIP] = useState('');
  const [ip, setIP] = useState('');

  const handleSubmmit = (e) => {
    e.preventDefault();
    if (inputIP) {
      //in order to have the whole input after user stop typing
      setIP(inputIP);
    }
    setInputIP('');
  };

  return (
    <main>
      <div className='bcg-container'>
        <img className='pattern-container' src={pattern} alt='' />
        <MyMap />
      </div>
      <div className='content-container'>
        <h2>IP Address Tracker</h2>
        <form className='form-container'>
          <input
            type='text'
            className='ip-input'
            placeholder='Search for any IP address domain'
            value={inputIP}
            onChange={(e) => setInputIP(e.target.value)}
          />
          <button onClick={handleSubmmit} type='submit' className='submit-btn'>
            <MdKeyboardArrowRight />
          </button>
        </form>
        <Result ip={ip} />
      </div>
    </main>
  );
}

export default App;
