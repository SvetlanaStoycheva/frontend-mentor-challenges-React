import React from 'react';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useGlobalContext } from './context';
import Quote from './Quote';

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
    isLoading_quote,
    toggleSidebar,
  } = useGlobalContext();

  const themeHour = Number(datetime.slice(0, 2));

  if (isLoading_time === false) {
    return (
      <main className={`${themeHour > 17 ? 'night-theme' : 'day-theme'}`}>
        {!isLoading_time && <Quote />}
        <div className='clock-container'>
          <article className='clock-info'>
            <div className='greeting'>
              <button className='greetings-btn'>
                {themeHour > 17 ? <FaMoon /> : <RiSunFill />}
              </button>
              <h4>
                {themeHour > 12 && themeHour < 17
                  ? 'good afternoon'
                  : themeHour < 12
                  ? 'good morning'
                  : 'good evening'}
              </h4>
            </div>
            <div className='current-hour'>
              <h1>{datetime}</h1>
              <h4>{abbreviation}</h4>
            </div>
            <h3>
              in {userCity}, {userCountry}
            </h3>
          </article>
          <button className='more-btn' onClick={toggleSidebar}>
            <p>more</p>
            <span className='icon'>
              <RiArrowDownSLine />
            </span>
          </button>
        </div>
      </main>
    );
  } else
    return (
      <main>
        <div className='clock-container'>
          <h1 className='loading'>Loading...</h1>
        </div>
      </main>
    );
}

export default Clock;
