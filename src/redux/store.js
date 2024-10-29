import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import tabsReducer from "./tabSlice"
import rootSaga from "../api/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:tabsReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store;