import {decrement, increment, getCountriesFetch} from "@footballer/redux";
import {usersAPI} from "@footballer/api";
import {myString} from "@footballer/common";
// @ts-ignore
import React from "react";
// @ts-ignore
import logo from "./logo.svg";
import "./App.css";
import {useAppDispatch, useAppSelector} from "@footballer/redux/src/hooks";




function App() {
    const count = useAppSelector((state) => state.toolkit.count);
    const countries = useAppSelector((state) => state.toolkit.countries);
    const dispatch = useAppDispatch();
    const data = JSON.stringify(countries);
    const dataSlice = data.slice(0, 102);

    const getIncrement = () => {
        dispatch(increment());
    };

    const getDecrement = () => {
        dispatch(decrement());
    };

    const getAddCountriesFetch = () => {
        dispatch(getCountriesFetch());
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="data">
                    {dataSlice}
                </div>
                <button onClick={getAddCountriesFetch}>Получить страны</button>
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Счетчик {count}</h2>
                <button onClick={getIncrement}>Инкремент</button>
                <button onClick={getDecrement}>Декремент</button>
                <br/>
                {myString()}
            </header>
        </div>
    );
}

export default App;
