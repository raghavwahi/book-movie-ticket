import actions from "./actions";

const initialState = {
  movies: [],
  recommendedMovies: [],
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.STORE_MOVIES:
      newState.movies = action.payload;
      return newState;
    case actions.STORE_RECOMMENDED_MOVIES:
      newState.recommendedMovies = action.payload;
      return newState;
    default:
      return state;
  }
};

export default Reducer;
