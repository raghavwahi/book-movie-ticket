import { all } from "redux-saga/effects";

import moviesSaga from "./../Components/Home/sagas";

export default function* rootSagas() {
  yield all([moviesSaga()]);
}
