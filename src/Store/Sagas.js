import { all } from "redux-saga/effects";

import moviesSaga from "./../Reducer/sagas";
import movieSaga from "./../Components/MovieDetails/sagas";
import searchSaga from "./../Layout/Navbar/sagas";

export default function* rootSaga() {
  yield all([moviesSaga(), movieSaga(), searchSaga()]);
}
