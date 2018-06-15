import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { createStore, Store } from "redux";

import App from "./app";
import appReducer from "./duck/appReducer";
import IAppState from "./duck/interfaces/IAppState";

import "./common/commonStyle/commonStyle.scss";

const appStore: Store<IAppState> = createStore(appReducer);

ReactDOM.render(
    <Provider store={appStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
