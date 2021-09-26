import React, { useEffect, useState } from 'react';
import Alert from './Alert';
//test fetch IP: 192.212.174.101

function Result({ setError, error, result, searchIP }) {
  const closeAlarm = () => {
    setError(false);
  };

  return (
    <>
      {error && <Alert searchIP={searchIP} closeAlarm={closeAlarm} />}

      <div className='result-container'>
        <div>
          <h3>ip address</h3>
          <p>{result.ip}</p>
        </div>
        <div>
          <h3>location</h3>
          <p>
            {result.region}, {result.city} {result.postalCode}
          </p>
        </div>
        <div>
          <h3>timezone</h3>
          <p>UTC {result.timezone}</p>
        </div>
        <div>
          <h3>isp</h3>
          <p>{result.isp}</p>
        </div>
      </div>
    </>
  );
}

export default Result;
