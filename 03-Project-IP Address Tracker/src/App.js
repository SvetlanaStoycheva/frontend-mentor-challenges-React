import React from 'react';
import pattern from './images/pattern-bg.png';
import MyMap from './Map';
import Result from './Result';
import SearchForm from './SearchForm';

function App() {
  return (
    <main>
      <div className='bcg-container'>
        <img className='pattern-container' src={pattern} alt='' />
        <MyMap />
      </div>
      <div className='content-container'>
        <h2>IP Address Tracker</h2>
        <SearchForm />
        <Result />
      </div>
    </main>
  );
}

export default App;
