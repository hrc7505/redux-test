import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, Reducer, Store } from "redux";

import Chrome from "./chrome/chrome";
import chromeReducer from "./chrome/duck/chromeReducer";
import IAppState from "./duck/interfaces/IAppState";
import IChromeState from "./chrome/duck/interfaces/IChromeState";
import IRightPanelData from "./chrome/right-panel/interfaces/IRightPanelData";

import "./common/common-style/CommonStyle.scss";

const chromeOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: chromeReducer,
    contentState: null
});

const standAloneDefaultState: IChromeState = {
    rightPanelData: {} as IRightPanelData,
    isRightPanelVisible: false,
    isLeftPaneVisible: false,
    isStandAlone: true
};

const standAloneChromeStore: Store<IAppState> = createStore(chromeOnlyReducer, {
    chromeState: standAloneDefaultState,
    contentState: null
});

ReactDOM.render(
    <Provider store={standAloneChromeStore}>
        <Chrome />
    </Provider>,
    document.getElementById("root")
);
