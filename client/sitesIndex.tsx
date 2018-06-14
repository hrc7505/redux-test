import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, Store } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, Reducer } from "redux";

import AllSitesContainer from "./content/site/all-sites-page/allSitesContainer";
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
    isRightPaneVisible: false,
    rightPaneData: null,
    headerData: null
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
