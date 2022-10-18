import actions from "./actions";

const initialState = {
  movie: {},
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
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
