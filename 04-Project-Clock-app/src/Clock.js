import React from 'react';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';

function Clock() {
  return (
    <div className='clock-container'>
      <article className='clock-info'>
        <div className='greeting'>
          <button className='greetings-btn'>
            <RiSunFill />
          </button>
          <h4>good evening</h4>
        </div>
        <div className='current-hour'>
          <h1>23:14</h1>
          <h4>BST</h4>
        </div>
        <h3>in london, uk</h3>
      </article>
      <article className='more-btn'>
        <RiArrowDownSLine />
      </article>
    </div>
  );
}

export default Clock;
