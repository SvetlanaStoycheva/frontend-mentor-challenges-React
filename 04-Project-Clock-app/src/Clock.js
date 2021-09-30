import React from 'react';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useGlobalContext } from './context';

function Clock() {
  const {
    userIP,
    userCity,
    userCountry,
    isLoading_time,
    abbreviation,
    datetime,
    day_of_week,
    day_of_year,
    timezone,
    week_number,
  } = useGlobalContext();

  if (isLoading_time === false) {
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
            <h1>{datetime}</h1>
            <h4>{abbreviation}</h4>
          </div>
          <h3>
            in {userCity}, {userCountry}
          </h3>
        </article>
        <article className='more-btn'>
          <p>more</p>
          <span className='icon'>
            <RiArrowDownSLine />
          </span>
        </article>
      </div>
    );
  } else
    return (
      <div className='clock-container'>
        <h1 className='loading'>Loading...</h1>
      </div>
    );
}

export default Clock;
