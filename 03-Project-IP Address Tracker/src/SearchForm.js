import React, { useState } from 'react';
import { useGlobalContext } from './context';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SearchForm = () => {
  const { handleSearch, query } = useGlobalContext();

  return (
    <form className='form-container' onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        className='ip-input'
        placeholder='Search for any IP address domain'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type='submit' className='submit-btn'>
        <MdKeyboardArrowRight />
      </button>
    </form>
  );
};

export default SearchForm;
