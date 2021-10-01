import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

const Alert = () => {
  const { query, closeAlarm } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlarm();
    }, 4000);
    return () => clearTimeout(timeout);
    //eslint-disable-next-line
  }, [query]);
  return (
    <div className='error'>
      <p>Please enter a valid domain e.g. "spacex.com"</p>
    </div>
  );
};

export default Alert;
