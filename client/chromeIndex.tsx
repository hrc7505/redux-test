import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore, Reducer, Store } from "redux";

import Chrome from "chrome/chrome";
import chromeReducer from "chrome/duck/chromeReducer";
import IChromeState from "chrome/duck/interfaces/IChromeState";
import IAppState from "duck/interfaces/IAppState";

import "common/commonStyle/commonStyle.scss";

const chromeOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: chromeReducer,
    dashboardState: null,
    sitesState: null,
});

const defaultState: IChromeState = {
    isLeftPaneVisible: false,
    isRightPanelVisible: false,
    rightPanelData: {
        rightPanelId: "emptyId",
        rightPanelHeaderText: "empty header",
        rightPanelContent: <div>empty content</div>
    }
};

const standAloneChromeStore: Store<IAppState> = createStore(
    chromeOnlyReducer,
    {
        chromeState: defaultState,
        dashboardState: null,
        sitesState: null,
    }
);

ReactDOM.render(
    <Provider store={standAloneChromeStore}>
        <Router>
            <Chrome />
        </Router>
    </Provider>,
    document.getElementById("root")
);
