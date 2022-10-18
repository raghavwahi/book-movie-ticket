import actions from "./actions";

const initialState = {
  searchValue: "",
};

const Reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.STORE_SEARCH_VALUE:
      newState.searchValue = action.payload;
      return newState;
    default:
      return state;
  }
};

export default Reducer;
