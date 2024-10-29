import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "../redux/tabSlice";

function* fetchTabsData(action) {
  try {
    const tab = action.payload.tab;
    const response = yield call(axios.get, `/api/${tab}/short`)
  const cleanedData = response.data.replace(/<\/?p>/g, "");  

    yield put(FETCH_SUCCESS({ tab, data: cleanedData })); 
  } catch (error) {
    yield put(FETCH_FAILURE(error.message || "Failed to fetch tabs data"));
  }
}

export function* watchTabs() {
  yield takeLatest(FETCH_REQUEST.type, fetchTabsData);
}
