import { combineReducers, Reducer } from "redux";

import chromeReducer from "../chrome/duck/chromeReducer";
import contentReducer from "../content/duck/contentReducer";
import IAppState from "./interfaces/IAppState";

const appReducer: Reducer<IAppState> = combineReducers<IAppState>({
    chromeState: chromeReducer,
    contentState: contentReducer
});

export default appReducer;
