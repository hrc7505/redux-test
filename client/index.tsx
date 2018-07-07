import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";

import App from "./app";
import appReducer from "./duck/appReducer";
import IAppState from "./duck/interfaces/IAppState";

import "./common/commonStyle/commonStyle.scss";

const appStore: Store<IAppState> = createStore(
    appReducer,
    applyMiddleware(
        thunkMiddleware,
        promiseMiddleware(),
        logger // Adding a logger to see what actions are occurring. Leaving comment to fix up for production later.
    )
);

initializeIcons();

ReactDOM.render(
    <Provider store={appStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
