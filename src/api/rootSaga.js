import { all } from "redux-saga/effects"
import { watchTabs } from "./tabsSaga"

export default function* rootSaga() {
    yield all([
        watchTabs()
    ])
}