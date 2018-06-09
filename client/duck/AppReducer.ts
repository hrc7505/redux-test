import { combineReducers, Reducer } from "redux";

import chromeReducer from "../chrome/duck/chromeReducer";
import contentReducer from "../content/duck/contentReducer";
import dashboardReducer from "../content/dashboard/duck/dashboardReducer";
import IAppState from "./interfaces/IAppState";

const appReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: chromeReducer,
    contentState: contentReducer,
    dashboardState: dashboardReducer
});

export default appReducer;
