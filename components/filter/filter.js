const filter = (state = 'SHOW_ALL', action) => {
  switch (action) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filter;