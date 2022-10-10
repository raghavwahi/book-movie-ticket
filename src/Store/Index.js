import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import moviesReducer from "./../Components/Home/reducer";
import rootSagas from "./Sagas";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

export { store };
