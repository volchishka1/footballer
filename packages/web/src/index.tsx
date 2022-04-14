// @ts-ignore
import React from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ProvideredStore} from "@footballer/redux";
import storage from 'redux-persist/lib/storage';
import {createGlobalStore} from "@footballer/redux";

const {store} = createGlobalStore(storage);

ReactDOM.render(
    <React.StrictMode>
        <ProvideredStore store={store}>
            <App />
        </ProvideredStore>
    </React.StrictMode>,
    document.getElementById("root")
);

