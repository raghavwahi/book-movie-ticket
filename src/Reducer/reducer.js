import actions from "./actions";

const initialState = {
  latestMovies: [],
  upcomingMovies: [],
  events: [],
  movie: {},
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.STORE_LATEST_MOVIES:
      newState.latestMovies = [...action.payload];
      return newState;
    case actions.STORE_UPCOMING_MOVIES:
      newState.upcomingMovies = [...action.payload];
      return newState;
    case actions.STORE_EVENTS:
      newState.events = [...action.payload];
      return newState;
    case actions.STORE_MOVIE:
      if (!action.payload) {
        newState.movie = {};
      } else {
        newState.movie = { ...action.payload };
      }
      return newState;
    default:
      return state;
  }
};

export default Reducer;
