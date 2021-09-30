import React from 'react';

import { FiRefreshCw } from 'react-icons/fi';

function Quote() {
  return (
    <div className='quote-container'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        dolore ipsum quia non sint delectus commodi culpa in cumque nisi!
      </p>
      <button className='quote-btn'>
        <FiRefreshCw />
      </button>
    </div>
  );
}

export default Quote;
