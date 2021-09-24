import React, { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_ACCESS_KEY;

function Result() {
  const [ip, setIP] = useState('');
  const [result, setResult] = useState({});

  const fetchYourIP = async () => {
    const response = await fetch('https://geolocation-db.com/json/');
    const data = await response.json();
    // console.log(data);
    setIP(data.IPv4);
  };

  const fetchResultData = async () => {
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=130.204.43.70`
    );
    const data = await response.json();
    // console.log(data);
    const { ip, location, isp } = data;
    const { region, city, postalCode, timezone } = location;
    setResult({ ip, isp, region, city, postalCode, timezone });
  };

  useEffect(() => {
    fetchYourIP();
    fetchResultData();
  }, []);
  // const { ip, region, city, postalCode, timezone, isp } = result;
  return (
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
  );
}

export default Result;
