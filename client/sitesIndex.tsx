import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, Store } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, Reducer } from "redux";

import contentReducer from "./content/duck/contentReducer";
import IAppState from "./duck/interfaces/IAppState";
import IContentState from "./content/duck/interfaces/IContentState";
import ISiteState from "./content/site/interfaces/ISiteState";
import SiteContainer from "./content/site/siteContainer";

import "./common/common-style/CommonStyle.scss";

const sitesOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: null,
    contentState: contentReducer,
    dashboardState: null
});

const standAloneDefaultState: ISiteState = {
    isRightPaneVisible: false,
    rightPaneData: null,
    isLeftMenuVisible: false,
    headerData: null,
    isStandAlone: true
};

const standAloneSiteStore: Store<IContentState> = createStore(sitesOnlyReducer, {
    chromeState: null,
    contentState: { siteState: standAloneDefaultState },
    dashboardState: null
});

ReactDOM.render(
    <Provider store={standAloneSiteStore}>
        <Router>
            <SiteContainer />
        </Router>
    </Provider>,
    document.getElementById("root")
);
