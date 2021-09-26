import React, { useState, useEffect } from 'react';
import pattern from './images/pattern-bg.png';
import MyMap from './components/Map';
import Result from './components/Result';
import { MdKeyboardArrowRight } from 'react-icons/md';
const apiKey = process.env.REACT_APP_ACCESS_KEY;
//test fetch IP: 192.212.174.101

function App() {
  const [inputIP, setInputIP] = useState('');
  const [searchIP, setSearchIP] = useState('');
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const x = 42.69751;
  const y = 23.32415;

  const handleSubmmit = (e) => {
    e.preventDefault();
    if (inputIP) {
      //in order to have the whole input after user stop typing
      setSearchIP(inputIP);
    }
    setInputIP('');
  };

  // Fetch functionality
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
    if (!searchIP) {
      response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${homeIP}`
      );
    } else {
      response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${searchIP}`
      );
    }
    try {
      const data = await response.json();
      // console.log(data);
      if (data) {
        const { ip, location, isp } = data;
        const { region, city, postalCode, timezone, lat, lng } = location;
        setResult({ ip, isp, region, city, postalCode, timezone, lat, lng });
        console.log(result);

        // if (result.lat !== 0 && result.lng !== 0) {
        //   setX(result.lat);
        //   setY(result.lng);
        // }
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  useEffect(() => {
    fetchYourHomeIP();
  }, []);

  useEffect(() => {
    fetchResultData();
  }, [searchIP]);

  return (
    <main>
      <div className='bcg-container'>
        <img className='pattern-container' src={pattern} alt='' />
        <MyMap x={x} y={y} />
      </div>
      <div className='content-container'>
        <h2>IP Address Tracker</h2>
        <form className='form-container'>
          <input
            type='text'
            className='ip-input'
            placeholder='Search for any IP address domain'
            value={inputIP}
            onChange={(e) => setInputIP(e.target.value)}
          />
          <button onClick={handleSubmmit} type='submit' className='submit-btn'>
            <MdKeyboardArrowRight />
          </button>
        </form>
        <Result
          searchIP={searchIP}
          setError={setError}
          error={error}
          result={result}
        />
      </div>
    </main>
  );
}

export default App;
