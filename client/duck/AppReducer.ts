import { combineReducers, Reducer } from "redux";

import chromeReducer from "chrome/duck/chromeReducer";
import dashboardReducer from "content/dashboard/duck/dashboardReducer";
import IAppState from "duck/interfaces/IAppState";
import sitesReducer from "content/sites/duck/sitesReducer";

const appReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: chromeReducer,
    dashboardState: dashboardReducer,
    sitesState: sitesReducer
});

export default appReducer;
