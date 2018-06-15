import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, Store } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { combineReducers, createStore, Reducer } from "redux";

import AllSitesContainer from "./content/site/all-sites/allSitesContainer";
import IAppState from "./duck/interfaces/IAppState";
import ISitesState from "./content/site/duck/interfaces/ISitesState";
import sitesReducer from "./content/site/duck/sitesReducer";

import "./common/common-style/CommonStyle.scss";

const sitesOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: null,
    dashboardState: null,
    sitesState: sitesReducer,
});

const defaultState: ISitesState = {
    headerState: {
        breadcrumb: null,
        commands: null,
        title: null
    },
    rightPaneState: {
        rightPaneData: null,
        isRightPaneVisible: false
    },
    allSitesState: {
        isRightPaneVisible: false,
        rightPaneData: null,
        headerData: null
    },
    siteDetailsState: {
        isRightPaneVisible: false,
        rightPaneData: null,
        headerData: null
    }
};

const siteStore: Store<ISitesState> = createStore(sitesOnlyReducer, {
    chromeState: null,
    sitesState: defaultState,
    dashboardState: null
});

ReactDOM.render(
    <Provider store={siteStore}>
        <Router>
            <AllSitesContainer />
        </Router>
    </Provider>,
    document.getElementById("root")
);
