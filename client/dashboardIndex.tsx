import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore, Reducer, Store } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";

import DashboardContainer from "content/dashboard/dashboardContainer";
import dashboardReducer from "content/dashboard/duck/dashboardReducer";
import IAppState from "duck/interfaces/IAppState";

import "common/commonStyle/commonStyle.scss";

const dashboardOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: null,
    dashboardState: dashboardReducer,
    sitesState: null
});

const dashboardStore: Store<IAppState> = createStore(
    dashboardOnlyReducer,
    applyMiddleware(
        thunkMiddleware,
        promiseMiddleware(),
        logger // Adding a logger to see what actions are occurring. Leaving comment to fix up for production later.
    )
);

initializeIcons();

ReactDOM.render(
    <Provider store={dashboardStore}>
        <Router>
            <DashboardContainer />
        </Router>
    </Provider>,
    document.getElementById("root")
);
