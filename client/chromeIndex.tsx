import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, Store } from "redux";

import Chrome from "./chrome/chrome";
import chromeReducer from "./chrome/duck/chromeReducer";
import IAppState from "./duck/interfaces/IAppState";
import IChromeState from "./chrome/duck/interfaces/IChromeState";

import "./common/common-style/CommonStyle.scss";

const chromeOnlyReducer = combineReducers<IAppState>({
    chromeState: chromeReducer,
    contentState: null
});

const standAloneDefaultState: IChromeState = {
    rightPanelComponent: null,
    isRightPanelVisible: false,
    isLeftPaneVisible: false,
    isStandAlone: true
}
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
