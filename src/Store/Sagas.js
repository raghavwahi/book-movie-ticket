import { all } from "redux-saga/effects";

import watcherSaga from "./../Components/Home/sagas";

export default function* rootSaga() {
  yield all([watcherSaga()]);
}
