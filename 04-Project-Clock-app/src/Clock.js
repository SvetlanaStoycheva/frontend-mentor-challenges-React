import React from 'react';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useGlobalContext } from './context';
// import Quote from './Quote';

import { FiRefreshCw } from 'react-icons/fi';

function Clock() {
  const {
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
    isSidebarOpen,
    quote,
    fetchQuote,
    author,
  } = useGlobalContext();

  const themeHour = Number(datetime.slice(0, 2));

  if (!isLoading_time && !isLoading_quote) {
    return (
      <main className={`${themeHour > 17 ? 'night-theme' : 'day-theme'}`}>
        {/* Quote */}
        {!isSidebarOpen && (
          <div className='quote'>
            <div className='quote-container'>
              <p>{quote}</p>

              <button className='quote-btn' onClick={fetchQuote}>
                <FiRefreshCw />
              </button>
            </div>
            <p className='author'>{author}</p>
          </div>
        )}
        {/* Clock */}
        <div
          className={`${
            isSidebarOpen
              ? 'clock-container pushed-clock-container'
              : 'clock-container'
          }`}
        >
          <article className='clock-info'>
            <div className='greeting'>
              <button className='greetings-btn'>
                {themeHour >= 18 ? <FaMoon /> : <RiSunFill />}
              </button>
              <h4>
                {themeHour > 12 && themeHour < 18
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
            <p>{isSidebarOpen ? 'less' : 'more'}</p>
            <span className='icon'>
              {isSidebarOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </span>
          </button>
        </div>
        {/* Sidebar */}
        {isSidebarOpen && (
          <div
            className={`${
              themeHour > 17
                ? 'sidebar-night-theme sidebar'
                : 'sidebar-day-theme sidebar'
            }`}
            // className={`${isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}
          >
            <article className='first-info'>
              <div className='sidebar-single-info'>
                <h4>current timezone</h4>
                <h2>{timezone}</h2>
              </div>
              <div className='sidebar-single-info'>
                <h4>day of the year</h4>
                <h2>{day_of_year}</h2>
              </div>
            </article>
            <article className='second-info'>
              <div className='sidebar-single-info'>
                <h4>day of the week</h4>
                <h2>{day_of_week}</h2>
              </div>
              <div className='sidebar-single-info'>
                <h4>week number</h4>
                <h2>{week_number}</h2>
              </div>
            </article>
          </div>
        )}
      </main>
    );
  } else
    return (
      <main>
        <main className='clock-container'>
          <h1 className='loading'>Loading...</h1>
        </main>
      </main>
    );
}

export default Clock;
