import React, { useEffect, useState } from 'react';
import Alert from './Alert';

const apiKey = process.env.REACT_APP_ACCESS_KEY;

function Result({ ip }) {
  const [homeIP, setHomeIP] = useState('');
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const fetchYourHomeIP = async () => {
    const response = await fetch('https://geolocation-db.com/json/');
    const data = await response.json();
    setHomeIP(data.IPv4);
    fetchResultData();
  };

  const fetchResultData = async () => {
    let response;
    if (!ip) {
      response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${homeIP}`
      );
    } else {
      response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`
      );
    }
    try {
      const data = await response.json();
      // console.log(data);
      const { ip, location, isp } = data;
      const { region, city, postalCode, timezone } = location;
      setResult({ ip, isp, region, city, postalCode, timezone });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchYourHomeIP();
  }, []);

  useEffect(() => {
    console.log(ip);
    fetchResultData();
  }, [ip]);

  const closeAlarm = () => {
    setError(false);
  };

  return (
    <>
      {error && <Alert ip={ip} closeAlarm={closeAlarm} />}

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
