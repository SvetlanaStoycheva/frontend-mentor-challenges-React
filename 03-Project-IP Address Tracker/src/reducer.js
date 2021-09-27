const reducer = (state, action) => {
  if (action.type === 'HANDLE_SEARCH') {
    return { ...state, query: action.payload };
  }
  if (action.type === 'SET_LOADING') {
    return { ...state, isLoading: true };
  }
  if (action.type === 'FETCH_USER_IP') {
    return { ...state, isLoading: false, userIP: action.payload };
  }
  if (action.type === 'SET_RESULT') {
    return { ...state, isLoading: false, currentIPData: action.payload };
  }
  if (action.type === 'SET_ERROR') {
    return { ...state, error: true, isLoading: false };
  }
  if (action.type === 'CLOSE_ALARM') {
    return { ...state, error: false };
  }
  // return { ...state };
  throw new Error(`no matching "${action.type}" action type`);
};
export default reducer;
