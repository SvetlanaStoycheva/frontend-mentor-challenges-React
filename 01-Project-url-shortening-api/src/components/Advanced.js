import React, { useState } from 'react';
import { advancedStatistics } from '../data';

function Advanced() {
  const [name, setName] = useState('');
  const handleSubmit = () => {};

  return (
    <section className='advanced'>
      <div className='advanced-center'>
        <form className='form-container' onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-input'
            placeholder='Shorten a link here...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='form-btn submit-btn'>
            Shorten it!
          </button>
        </form>
        <div className='advanced-statistics'>
          <h2 className='section-title'>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className='statistics-container'>
            {advancedStatistics.map((item, index) => {
              const { icon, title, text } = item;
              return (
                <article
                  className={`statistic-container statistic${index}`}
                  key={index}
                >
                  <img src={icon} alt='icon-image' className='statistic-icon' />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advanced;
