import * as React from "react";
import { Provider, ProviderProps } from "react-redux";
import { Store } from "redux";

// type PropsType = {
//     store: Store;
//     children: ProviderProps["children"];
// };

export const ReduxProvider = (App: any, store: Store) => {
    return () => (
        <Provider store={store}>
            <App />
        </Provider>
    );
};