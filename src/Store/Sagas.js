import { all } from "redux-saga/effects";

import watcherSaga from "./../Reducer/sagas";

export default function* rootSaga() {
  yield all([watcherSaga()]);
}
