import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, Store } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";

import IAppState from "./duck/interfaces/IAppState";
import ISitesState from "./content/sites/duck/interfaces/ISitesState";
import SitesContainer from "./content/sites/sitesContainer";
import sitesReducer from "./content/sites/duck/sitesReducer";
import { ISiteDetails } from "./content/sites/common/dummyData/testData";

import "./common/commonStyle/commonStyle.scss";

const sitesOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: null,
    dashboardState: null,
    sitesState: sitesReducer,
});

const defaultState: ISitesState = {
    headerState: {
        breadcrumb: {
            path: null
        },
        commands: {
            buttonList: []
        },
        title: null
    },
    rightPaneState: {
        isRightPaneVisible: false,
        rightPaneId: null,
        rightPaneHeaderText: null,
        rightPaneContent: null
    },
    allSitesState: {
        sites: null,
        isLoading: false
    },
    siteDetailsState: {
        site: {} as ISiteDetails
    }
};

const siteStore: Store<IAppState> = createStore(
    sitesOnlyReducer,
    {
        chromeState: null,
        sitesState: defaultState,
        dashboardState: null
    },
    applyMiddleware(
        thunkMiddleware,
        promiseMiddleware(),
        logger // Adding a logger to see what actions are occurring. Leaving comment to fix up for production later.
    )
);

initializeIcons();

ReactDOM.render(
    <Provider store={siteStore}>
        <Router>
            <SitesContainer />
        </Router>
    </Provider>,
    document.getElementById("root")
);
