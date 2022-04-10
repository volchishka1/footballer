import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";

export const rootReducer = combineReducers( {
  toolkit: toolkitSlice
})

export const store = configureStore( {
  reducer: rootReducer,

})
export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch