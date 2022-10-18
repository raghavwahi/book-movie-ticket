import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import moviesReducer from "./../Reducer/reducer";
import movieReducer from "./../Components/MovieDetails/reducer";
import searchReducer from "./../Layout/Navbar/reducer";
import rootSagas from "./Sagas";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  search: searchReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export { store };
