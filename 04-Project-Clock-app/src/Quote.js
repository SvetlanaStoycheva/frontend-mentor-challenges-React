import React from 'react';
import { useGlobalContext } from './context';
import { FiRefreshCw } from 'react-icons/fi';

function Quote() {
  const { quote, author, isLoading_quote, fetchQuote } = useGlobalContext;

  console.log(quote);

  if (!isLoading_quote) {
    return (
      <div className='quote'>
        <div className='quote-container'>
          <p>{quote}</p>

          <button className='quote-btn' onClick={fetchQuote}>
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
            " Failure is an option here. If things are not failing, you're not
            innovating enough"
          </p>

          <button className='quote-btn'>
            <FiRefreshCw />
          </button>
        </div>
        <p className='author'>-Elon Musk</p>
      </div>
    );
}

export default Quote;
