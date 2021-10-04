import React from 'react';
import { RiSunFill } from 'react-icons/ri';
import { FaMoon } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useGlobalContext } from './context';
import Sidebar from './Sidebar';

import { FiRefreshCw } from 'react-icons/fi';

function Clock() {
  const {
    userCity,
    userCountry,
    isLoading_time,
    abbreviation,
    datetime,
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
      <>
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
          <Sidebar />
        </main>
      </>
    );
  } else
    return (
      <div>
        <main className='clock-container'>
          <h1 className='loading'>Loading...</h1>
        </main>
      </div>
    );
}

export default Clock;
