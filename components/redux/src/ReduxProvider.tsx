// @ts-ignore
import React, { ComponentType } from "react";
import { Provider } from "react-redux";
// import { Store } from "redux";


export const ReduxProvider = (App: any, store: any) => {
    return () => (
        <Provider store={store}>
            <App />
        </Provider>
    );
};
// @ts-ignore
window.React1 = React;