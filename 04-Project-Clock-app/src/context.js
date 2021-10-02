import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
// http://worldtimeapi.org/api/ip/130.204.43.70

const initialState = {
  userIP: '',
  userCity: '',
  userCountry: '',
  isLoading: true,
  isLoading_time: true,
  isLoading_quote: true,
  abbreviation: '',
  datetime: '',
  day_of_week: '',
  day_of_year: '',
  timezone: '',
  week_number: '',
  quote: '',
  author: '',
  isSidebarOpen: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUserIP = async () => {
    dispatch({ type: 'SET_LOADING' });

    try {
      const response = await fetch('https://geolocation-db.com/json/');
      const data = await response.json();
      // console.log(data);
      const { IPv4: ip, city, country_name: country } = data;

      dispatch({ type: 'FETCH_USER_IP', payload: [ip, city, country] });

      fetchQuote();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserIP();
    //eslint-disable-next-line
  }, []);

  const fetchTime = async () => {
    dispatch({ type: 'SET_LOADING_TIME' });
    try {
      const response = await fetch(
        `http://worldtimeapi.org/api/ip/${state.userIP}`
      );
      const data = await response.json();
      // console.log(data);
      const {
        datetime,
        abbreviation,
        day_of_week,
        day_of_year,
        timezone,
        week_number,
      } = data;

      dispatch({
        type: 'FETCH_TIME',
        payload: [
          datetime,
          abbreviation,
          day_of_week,
          day_of_year,
          timezone,
          week_number,
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuote = async () => {
    dispatch({ type: 'SET_LOADING_QUOTE' });
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      // console.log(data);
      const { content, author } = data;
      dispatch({ type: 'FETCH_QUOTE', payload: [content, author] });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!state.isLoading_quote) {
      fetchTime();
    }
  }, [state.isLoading_quote]);

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleSidebar }}>
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
