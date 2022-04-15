import {createGlobalStore, ReduxProvider } from "@footballer/redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import storage from "redux-persist/lib/storage";

const {store} = createGlobalStore(storage);

ReactDOM.render(
    <React.StrictMode>
        {ReduxProvider(App, store)()}
    </React.StrictMode>,
    document.getElementById("root")
);

