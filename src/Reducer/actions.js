const actions = {
  STORE_LATEST_MOVIES: "STORE_LATEST_MOVIES",
  storeLatestMovies: (payload) => {
    return {
      type: actions.STORE_LATEST_MOVIES,
      payload,
    };
  },
  STORE_UPCOMING_MOVIES: "STORE_UPCOMING_MOVIES",
  storeUpcomingMovies: (payload) => {
    return {
      type: actions.STORE_UPCOMING_MOVIES,
      payload,
    };
  },
  STORE_EVENTS: "STORE_EVENTS",
  storeEvents: (payload) => {
    return {
      type: actions.STORE_EVENTS,
      payload,
    };
  },
  FETCH_LATEST_MOVIES: "FETCH_LATEST_MOVIES",
  fetchLatestMovies: (payload) => {
    return {
      type: actions.FETCH_LATEST_MOVIES,
      payload,
    };
  },
  FETCH_UPCOMING_MOVIES: "FETCH_UPCOMING_MOVIES",
  fetchUpcomingMovies: (payload) => {
    return {
      type: actions.FETCH_UPCOMING_MOVIES,
      payload,
    };
  },
  FETCH_EVENTS: "FETCH_EVENTS",
  fetchEvents: (payload) => {
    return {
      type: actions.FETCH_EVENTS,
      payload,
    };
  },
};

export default actions;
