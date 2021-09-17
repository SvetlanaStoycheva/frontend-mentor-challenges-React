import React, { useState, useEffect } from 'react';
import { advancedStatistics } from '../data';
import Alert from './Alert';
import { FaTimes } from 'react-icons/fa';

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
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: '' });

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${link}`);
      const data = await response.json();
      //   console.log(data);
      const {
        full_short_link: shortLink,
        original_link: longLink,
      } = data.result;
      if (shortLink) {
        const newLink = {
          id: new Date().getTime().toString(),
          longLink: longLink,
          shortLink: shortLink,
        };
        setList([...list, newLink]);
        setLink('');
      }
    } catch (error) {
      console.log(error);
      showAlert(true, 'This is not a valid URL. Please add a valid link');
      setLink('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link) {
      fetchData();
    } else {
      showAlert(true, 'Please add a link.');
    }
  };

  const showAlert = (show = false, msg = '') => {
    setAlert({ show, msg });
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const handleCopy = (e) => {
    const currentBtn = e.currentTarget;
    navigator.clipboard.writeText(currentBtn.previousSibling.textContent);
    currentBtn.textContent = 'Copied';
    currentBtn.classList.add('link-result-button-copied');

    const timeout = setTimeout(() => {
      currentBtn.textContent = 'Copy';
      currentBtn.classList.remove('link-result-button-copied');
      return () => clearTimeout(timeout);
    }, 3000);
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <section className='advanced'>
      <div className='advanced-center'>
        <form className='form-container' onSubmit={handleSubmit}>
          <input
            type='text'
            className={`${
              alert.show ? 'form-input alarm-form-input' : 'form-input'
            }`}
            placeholder='Shorten a link here...'
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type='submit' className='form-btn submit-btn'>
            Shorten it!
          </button>
          {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        </form>
        {list.length > 0 &&
          list.map((item) => {
            const { id, longLink, shortLink } = item;
            return (
              <div className='link-result-container' key={id}>
                <button
                  type='button'
                  className='close-btn'
                  onClick={() => deleteItem(id)}
                >
                  <FaTimes />
                </button>
                <p>{longLink}</p>
                <div className='short-link-btn'>
                  <p className='short-link'>{shortLink}</p>
                  <button
                    type='button'
                    className={'link-result-button'}
                    onClick={handleCopy}
                  >
                    Copy
                  </button>
                </div>
              </div>
            );
          })}

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
