import { Provider } from "react-redux";

type PropsType = {
    store: any;
    children: any;
};

export const ProvideredStore = ({store, children}: PropsType) => {
    return <Provider store={store}>{children}</Provider>;
};