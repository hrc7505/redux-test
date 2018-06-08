import { combineReducers } from "redux";

import chromeReducer from "../chrome/duck/chromeReducer";
import contentReducer from "../content/duck/contentReducer";
import IAppState from "./interfaces/IAppState";

const appReducer = combineReducers<IAppState>({
    chromeState: chromeReducer,
    contentState: null
});

export default appReducer;
