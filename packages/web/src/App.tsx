import {decrement, increment} from "@footballer/redux/src/toolkitSlice";
import {usersAPI} from "@footballer/api";
import {myString} from "@footballer/common";
// @ts-ignore
import React from "react";
// @ts-ignore
import logo from "./logo.svg";
import "./App.css";
import {useAppDispatch, useAppSelector} from "@footballer/redux/src/hooks";


function App() {
    // @ts-ignore
    const count = useAppSelector(state => state.toolkit.count);
    const dispatch = useAppDispatch();

    // eslint-disable-next-line no-console
    console.log(usersAPI(`${process.env.REACT_APP_BASE_URL}`, `${process.env.REACT_APP_APIKEY}`).getMatches);
    return (
        <div className="App">
            <header className="App-header">
                <h1>Счетчик {count}</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <button onClick={() => dispatch(increment())}>Инкремент</button>
                <button onClick={() => dispatch(decrement())}>Декремент</button>
                {myString()}
            </header>
        </div>
    );
}

export default App;
