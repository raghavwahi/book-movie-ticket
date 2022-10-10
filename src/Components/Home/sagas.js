import { call, put, takeEvery } from "@redux-saga/core/effects";
import { API_DATA } from "../../static/config";
import { fetchAPIData } from "../../Utils/fetchAPI";

import actions from "./actions";

function* fetchAPI(path) {
  const payload = yield { path };
  const data = yield fetchAPIData(payload);
  return data;
}

function* fetchData(action) {
  if (action.type === actions.FETCH_MOVIES) {
    const result = yield call(fetchAPI, API_DATA.latest);
    yield put(actions.storeMovies(result));
  } else if (action.type === actions.FETCH_RECOMMENDED_MOVIES) {
    const result = yield call(fetchAPI, API_DATA.recommended);
    yield put(actions.storeRecommendedMovies(result));
  }
}

export default function* watcherSaga() {
  yield takeEvery(
    [actions.FETCH_MOVIES, actions.FETCH_RECOMMENDED_MOVIES],
    fetchData
  );
}
