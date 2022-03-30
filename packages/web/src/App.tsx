import { usersAPI } from "@footballer/api";
import { myString } from "@footballer/common";
import React from "react";
// @ts-ignore
import logo from "./logo.svg";
import "./App.css";

function App() {
    // eslint-disable-next-line no-console
    console.log(usersAPI().getMatches);
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
