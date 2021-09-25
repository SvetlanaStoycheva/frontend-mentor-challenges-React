import React, { useEffect } from 'react';

const Alert = ({ ip, closeAlarm }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      closeAlarm();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [ip]);
  return (
    <div className='error'>
      <p>This is an invalid IP address domain</p>
    </div>
  );
};

export default Alert;
