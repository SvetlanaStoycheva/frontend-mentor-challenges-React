import React from 'react';
import { useGlobalContext } from './context';
import { MdKeyboardArrowRight } from 'react-icons/md';

const SearchForm = () => {
  const { handleSearch, query, fetchCurrentIP } = useGlobalContext();

  return (
    <form className='form-container' onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        className='ip-input'
        placeholder='Search for any IP or domain e.g. "spacex.com"'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        // onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={() => fetchCurrentIP()}
        type='submit'
        className='submit-btn'
      >
        <MdKeyboardArrowRight />
      </button>
    </form>
  );
};

export default SearchForm;
