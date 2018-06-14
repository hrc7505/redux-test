import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, Reducer, Store } from "redux";

import Chrome from "./chrome/chrome";
import chromeReducer from "./chrome/duck/chromeReducer";
import IAppState from "./duck/interfaces/IAppState";

import "./common/common-style/CommonStyle.scss";

const chromeOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: chromeReducer,
    dashboardState: null,
    sitesState: null,
});

const standAloneChromeStore: Store<IAppState> = createStore(chromeOnlyReducer);

ReactDOM.render(
    <Provider store={standAloneChromeStore}>
        <Router>
            <Chrome />
        </Router>
    </Provider>,
    document.getElementById("root")
);
