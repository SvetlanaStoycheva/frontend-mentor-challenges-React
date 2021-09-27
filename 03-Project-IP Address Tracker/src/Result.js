import React from 'react';
import { useGlobalContext } from './context';
import Alert from './Alert';
//test fetch IP: 192.212.174.101

function Result() {
  const { currentIPData, error } = useGlobalContext();

  return (
    <>
      {error && <Alert />}

      <div className='result-container'>
        <div>
          <h3>ip address</h3>
          <p>{currentIPData.ip}</p>
        </div>
        <div>
          <h3>location</h3>
          <p>
            {currentIPData.region}, {currentIPData.city}{' '}
            {currentIPData.postalCode}
          </p>
        </div>
        <div>
          <h3>timezone</h3>
          <p>UTC {currentIPData.timezone}</p>
        </div>
        <div>
          <h3>isp</h3>
          <p>{currentIPData.isp}</p>
        </div>
      </div>
    </>
  );
}

export default Result;
