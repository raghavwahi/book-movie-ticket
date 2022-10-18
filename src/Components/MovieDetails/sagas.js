import { call, put, takeEvery } from "@redux-saga/core/effects";
import { API_DATA } from "../../static/config";
import { fetchAPIData } from "../../Utils/fetchAPI";

import actions from "./actions";

function* fetchAPI(path) {
  const payload = yield path;
  const data = yield fetchAPIData(payload);
  return data;
}

function* fetchData(action) {
  if (action.type === actions.FETCH_MOVIE) {
    const result = yield call(fetchAPI, {
      path: API_DATA.latest,
      id: action.payload.id,
    });
    yield put(actions.storeMovie(result));
  }
}

export default function* watcherSaga() {
  yield takeEvery([actions.FETCH_MOVIE], fetchData);
}
