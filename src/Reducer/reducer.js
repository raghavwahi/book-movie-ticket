import actions from "./actions";

const initialState = {
  latestMovies: [],
  upcomingMovies: [],
  events: [],
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.STORE_LATEST_MOVIES:
      newState.latestMovies = [...action.payload.slice(0, 10)];
      return newState;
    case actions.STORE_UPCOMING_MOVIES:
      newState.upcomingMovies = [...action.payload.slice(0, 10)];
      return newState;
    case actions.STORE_EVENTS:
      newState.events = [...action.payload.slice(0, 10)];
      return newState;
    default:
      return state;
  }
};

export default Reducer;
