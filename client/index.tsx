import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

import AppComponent from "./AppComponent";
import AppReducer from "./duck/AppReducer";
import IAppState from "./duck/State";

const store: Store<IAppState> = createStore(AppReducer);
ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById("root")
);
