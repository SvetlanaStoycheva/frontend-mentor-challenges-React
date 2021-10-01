import React from 'react';
import { useGlobalContext } from './context';
import { FiRefreshCw } from 'react-icons/fi';

function Quote() {
  const { quote, author, isLoading_quote, isLoading_time } = useGlobalContext;

  if (isLoading_quote === false) {
    return (
      <div className='quote'>
        <div className='quote-container'>
          <p>{quote}</p>

          <button className='quote-btn'>
            <FiRefreshCw />
          </button>
        </div>
        <p className='author'>{author}</p>
      </div>
    );
  } else
    return (
      <div className='quote'>
        <div className='quote-container'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            debitis nemo consequuntur aperiam nihil temporibus provident
            veritatis, quas maxime reprehenderit.
          </p>

          <button className='quote-btn'>
            <FiRefreshCw />
          </button>
        </div>
        <p className='author'>Author</p>
      </div>
    );
}

export default Quote;
