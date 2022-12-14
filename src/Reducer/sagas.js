import { call, put, takeEvery } from "@redux-saga/core/effects";
import { API_DATA } from "../static/config";
import { fetchAPIData } from "../Utils/fetchAPI";

import actions from "./actions";

function* fetchAPI(path) {
  const payload = yield path;
  const data = yield fetchAPIData(payload);
  return data;
}

function* fetchData(action) {
  if (action.type === actions.FETCH_LATEST_MOVIES) {
    const result = yield call(fetchAPI, { path: API_DATA.latest });
    yield put(actions.storeLatestMovies(result));
  } else if (action.type === actions.FETCH_UPCOMING_MOVIES) {
    const result = yield call(fetchAPI, { path: API_DATA.upcomingMovies });
    yield put(actions.storeUpcomingMovies(result));
  } else if (action.type === actions.FETCH_EVENTS) {
    const result = yield call(fetchAPI, { path: API_DATA.events });
    yield put(actions.storeEvents(result));
  }
}

export default function* watcherSaga() {
  yield takeEvery(
    [
      actions.FETCH_LATEST_MOVIES,
      actions.FETCH_UPCOMING_MOVIES,
      actions.FETCH_EVENTS,
    ],
    fetchData
  );
}
