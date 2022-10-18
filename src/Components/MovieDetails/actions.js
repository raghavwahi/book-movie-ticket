const actions = {
  STORE_MOVIE: "STORE_MOVIE",
  storeMovie: (payload) => {
    return {
      type: actions.STORE_MOVIE,
      payload,
    };
  },
  FETCH_MOVIE: "FETCH_MOVIE",
  fetchMovie: (payload) => {
    return {
      type: actions.FETCH_MOVIE,
      payload,
    };
  },
};

export default actions;
