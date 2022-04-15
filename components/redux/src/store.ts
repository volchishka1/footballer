import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import createSagaMiddleware from "redux-saga";
import {RootSaga} from "./sagas";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

export type AppRootStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({toolkit: toolkitSlice});

export const createGlobalStore = (persistStorage: any) => {
    const sagaMiddleware = createSagaMiddleware();
    const persistConfig = {key: 'root', storage: persistStorage};
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(sagaMiddleware)
    });

    sagaMiddleware.run(RootSaga);

    const persistor = persistStore(store);
    return {store, persistor};
};


