import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

import AppComponent from "./AppComponent";
import appReducer from "./duck/AppReducer";
import IAppState from "./duck/State";

const store: Store<IAppState> = createStore(appReducer);
ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById("root")
);
