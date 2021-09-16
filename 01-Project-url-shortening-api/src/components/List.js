import React from 'react';

const List = ({ items, handleCopy }) => {
  items.map((item) => {
    const { id, longLink, shortLink } = item;
    return (
      <div className='link-result-container' key={id}>
        <p>{longLink}</p>
        <div className='short-link-btn'>
          <p className='short-link'>{shortLink}</p>
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
    );
  });
};

export default List;
