import React, { useEffect } from 'react';
import { useGlobalContext } from './context';

const Alert = () => {
  const { query, closeAlarm } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlarm();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [query]);
  return (
    <div className='error'>
      <p>This is an invalid IP address domain</p>
    </div>
  );
};

export default Alert;
