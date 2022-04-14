import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import createSagaMiddleware from "redux-saga";
import {RootSaga} from "./sagas";
import storage from "redux-persist/lib/storage";
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
// @ts-ignore

export const rootReducer = combineReducers({toolkit: toolkitSlice});

export const createGlobalStore = (persistStorage) => {
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

