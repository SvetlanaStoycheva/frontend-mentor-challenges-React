const reducer = (state, action) => {
  if (action.type === 'SET_LOADING') {
    return { ...state, isLoading: true };
  }
  if (action.type === 'SET_LOADING_TIME') {
    return { ...state, isLoading_time: true };
  }
  if (action.type === 'SET_LOADING_QUOTE') {
    return { ...state, isLoading_quote: true };
  }

  if (action.type === 'FETCH_USER_IP') {
    const [ip, city, country] = action.payload;
    return {
      ...state,
      isLoading: false,
      userIP: ip,
      userCity: city,
      userCountry: country,
    };
  }
  if (action.type === 'FETCH_TIME') {
    const [
      datetime,
      abbreviation,
      day_of_week,
      day_of_year,
      timezone,
      week_number,
    ] = action.payload;
    //datetime = "2021-09-30T16:22:41.547193+03:00"
    let newDatetime = datetime;
    const firstIndex = newDatetime.indexOf('T');
    const secondIndex = newDatetime.indexOf(':');
    newDatetime = newDatetime.slice(firstIndex + 1, secondIndex + 3);
    return {
      ...state,
      isLoading_time: false,
      datetime: newDatetime,
      abbreviation,
      day_of_week,
      day_of_year,
      timezone,
      week_number,
    };
  }
  if (action.type === 'FETCH_QUOTE') {
    const [content, author] = action.payload;
    return { ...state, quote: content, author, isLoading_quote: false };
  }
  if (action.type === 'TOGGLE_SIDEBAR') {
    if (state.isSidebarOpen) {
      return { ...state, isSidebarOpen: false };
    } else {
      return { ...state, isSidebarOpen: true };
    }
  }
  throw new Error(`no matching "${action.type}" action type`);
};
export default reducer;
