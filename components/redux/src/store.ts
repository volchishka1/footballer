import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import createSagaMiddleware from "redux-saga";
import {RootSaga} from "./sagas";

export const rootReducer = combineReducers( {
  toolkit: toolkitSlice
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore( {
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
});

sagaMiddleware.run(RootSaga);

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch