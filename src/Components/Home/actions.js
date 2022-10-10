const actions = {
  STORE_MOVIES: "STORE_MOVIES",
  storeMovies: (payload) => {
    return {
      type: actions.STORE_MOVIES,
      payload,
    };
  },
  STORE_RECOMMENDED_MOVIES: "STORE_RECOMMENDED_MOVIES",
  storeRecommendedMovies: (payload) => {
    return {
      type: actions.STORE_RECOMMENDED_MOVIES,
      payload,
    };
  },
  FETCH_MOVIES: "FETCH_MOVIES",
  fetchMovies: (payload) => {
    return {
      type: actions.FETCH_MOVIES,
      payload,
    };
  },
  FETCH_RECOMMENDED_MOVIES: "FETCH_RECOMMENDED_MOVIES",
  fetchRecommendedMovies: (payload) => {
    return {
      type: actions.FETCH_RECOMMENDED_MOVIES,
      payload,
    };
  },
};

export default actions;
