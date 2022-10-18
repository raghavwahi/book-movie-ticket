import { put, takeEvery } from "@redux-saga/core/effects";

import actions from "./actions";

function* fetchData(action) {
  if (action.type === actions.FETCH_SEARCH_VALUE) {
    const searchValue = yield action.payload;
    yield put(actions.storeSearchValue(searchValue));
  }
}

export default function* watcherSaga() {
  yield takeEvery([actions.FETCH_SEARCH_VALUE], fetchData);
}
