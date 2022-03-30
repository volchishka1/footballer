import { myString } from "@footballer/components";
import React from "react";
// @ts-ignore
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo" />
                { myString() }
            </header>
        </div>
    );
}

export default App;
