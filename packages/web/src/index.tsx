// @ts-ignore
import React from "react";
// @ts-ignore
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ProvideredStore} from "@footballer/redux";


ReactDOM.render(
    <React.StrictMode>
        <ProvideredStore>
            <App />
        </ProvideredStore>
    </React.StrictMode>,
    document.getElementById("root")
);

