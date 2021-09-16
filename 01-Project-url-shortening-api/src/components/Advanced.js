import React, { useState, useEffect } from 'react';
import { advancedStatistics } from '../data';

const url = 'https://api.shrtco.de/v2/shorten?url=';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

function Advanced() {
  const [link, setLink] = useState('');
  const [fetchError, setFetchError] = useState(false);
  const [validLink, setValidLink] = useState(true);
  const [shortedLink, setShortedLink] = useState('');
  const [copy, setCopy] = useState(false);
  const [copyText, setCopyText] = useState('Copy');
  const [list, setList] = useState(getLocalStorage());

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${link}`);
      const data = await response.json();
      console.log(data);
      const {
        full_short_link: shortLink,
        original_link: longLink,
      } = data.result;
      setShortedLink(shortLink);
      setLink(longLink);

      const newLink = {
        id: new Date().getTime().toString(),
        longLink: link,
        shortLink: shortedLink,
      };
      setList([...list, newLink]);

      setValidLink(true);
      setFetchError(false);
    } catch (error) {
      console.log(error);
      setFetchError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link) {
      fetchData();
    } else {
      setValidLink(false);
    }
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortedLink);
    setCopy(true);
    setCopyText('Copied!');
  };

  return (
    <section className='advanced'>
      <div className='advanced-center'>
        <form className='form-container' onSubmit={handleSubmit}>
          <input
            type='text'
            className={`${
              !validLink ? 'form-input alarm-form-input' : 'form-input'
            }`}
            placeholder='Shorten a link here...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type='submit' className='form-btn submit-btn'>
            Shorten it!
          </button>
          {(!validLink && <p className='alarm'>Please add a link</p>) ||
            (fetchError && <p className='alarm'>Please add a valid link</p>)}
        </form>
        {validLink && link && (
          <div className='link-result-container'>
            <p>{link}</p>
            <div className='short-link-btn'>
              <p className='short-link'>{shortedLink}</p>
              <button
                type='button'
                className={`${
                  copy ? 'link-result-button-copied' : 'link-result-button'
                }`}
                onClick={handleCopy}
              >
                {copyText}
              </button>
            </div>
          </div>
        )}

        {/* Advanced Statistics */}
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
                  <img src={icon} alt='icon' className='statistic-icon' />
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
