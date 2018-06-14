import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, Store } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, Reducer } from "redux";

import contentReducer from "./content/duck/contentReducer";
import IAppState from "./duck/interfaces/IAppState";
import IContentState from "./content/duck/interfaces/IContentState";
import ISitesState from "./content/site/duck/interfaces/ISitesState";
import SitesContainer from "./content/site/sitesContainer";

import "./common/common-style/CommonStyle.scss";

const sitesOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: null,
    contentState: contentReducer,
    dashboardState: null
});

const defaultState: ISitesState = {
    isRightPaneVisible: false,
    rightPaneData: null,
    headerData: null
};

const siteStore: Store<IContentState> = createStore(sitesOnlyReducer, {
    chromeState: null,
    contentState: { sitesState: defaultState },
    dashboardState: null
});

ReactDOM.render(
    <Provider store={siteStore}>
        <Router>
            <SitesContainer />
        </Router>
    </Provider>,
    document.getElementById("root")
);
