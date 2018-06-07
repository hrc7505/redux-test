import { combineReducers } from "redux";

import chromeReducer from "./ChromeReducer";
import contentReducer from "../content/duck/contentReducer";

const appReducer: ReturnType<typeof combineReducers> = combineReducers({
    chromeReducer,
    contentReducer
});

export default appReducer;
