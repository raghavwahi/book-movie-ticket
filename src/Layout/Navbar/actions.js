const actions = {
  STORE_SEARCH_VALUE: "STORE_SEARCH_VALUE",
  storeSearchValue: (payload) => {
    return {
      type: actions.STORE_SEARCH_VALUE,
      payload,
    };
  },
  FETCH_SEARCH_VALUE: "FETCH_SEARCH_VALUE",
  fetchSearchValue: (payload) => {
    return {
      type: actions.FETCH_SEARCH_VALUE,
      payload,
    };
  },
};

export default actions;
