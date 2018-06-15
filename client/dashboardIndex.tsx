import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, Reducer, Store } from "redux";

import DashboardContainer from "./content/dashboard/dashboardContainer";
import dashboardReducer from "./content/dashboard/duck/dashboardReducer";
import IAppState from "./duck/interfaces/IAppState";
import IDashboardState from "./content/dashboard/duck/interfaces/IDashboardState";

import "./common/commonStyle/commonStyle.scss";

const dashboardOnlyReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: null,
    dashboardState: dashboardReducer,
    sitesState: null
});

const dashboardStore: Store<IDashboardState> = createStore(dashboardOnlyReducer);

ReactDOM.render(
    <Provider store={dashboardStore}>
        <DashboardContainer />
    </Provider>,
    document.getElementById("root")
);
