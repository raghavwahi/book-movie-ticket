import actions from "./actions";

const initialState = {
  latestMovies: [],
  upcomingMovies: [],
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.STORE_LATEST_MOVIES:
      newState.latestMovies = action.payload;
      return newState;
    case actions.STORE_RECOMMENDED_MOVIES:
      newState.upcomingMovies = action.payload;
      return newState;
    default:
      return state;
  }
};

export default Reducer;
