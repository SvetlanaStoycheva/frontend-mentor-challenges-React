import React, { useContext, useEffect, useReducer } from 'react';

import reducer from './reducer';
const apiKey = process.env.REACT_APP_ACCESS_KEY;
// 192.212.174.101

const initialState = {
  isLoading: true,
  currentIPData: {},
  userIP: '',
  query: '',
  error: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSearch = (query) => {
    dispatch({ type: 'HANDLE_SEARCH', payload: query });
  };
  const fetchUserIP = async () => {
    dispatch({ type: 'SET_LOADING' });

    try {
      const response = await fetch('https://geolocation-db.com/json/');
      const data = await response.json();
      console.log(data);

      dispatch({ type: 'FETCH_USER_IP', payload: data.IPv4 });
      fetchCurrentIP();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserIP();
    //eslint-disable-next-line
  }, []);

  const fetchCurrentIP = async () => {
    dispatch({ type: 'SET_LOADING' });
    let response;
    if (!state.query && state.userIP) {
      response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${state.userIP}`
      );
    } else {
      response = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${state.query}&domain=${state.query}`
      );
    }
    try {
      const data = await response.json();
      // console.log(data);
      if (data) {
        const { ip, location, isp } = data;
        const { region, city, postalCode, timezone, lat, lng } = location;
        dispatch({
          type: 'SET_RESULT',
          payload: { ip, isp, region, city, postalCode, timezone, lat, lng },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: 'SET_ERROR' });
    }
  };

  const closeAlarm = () => {
    dispatch({ type: 'CLOSE_ALARM' });
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, closeAlarm, fetchCurrentIP }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
//  const { handleSearch, query } = useGlobalContext()
