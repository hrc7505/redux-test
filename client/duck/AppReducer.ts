import { combineReducers } from "redux";

import chromeReducer from "./ChromeReducer";
import commandBarReducer from "../content/duck/CommandBarReducer";
import rightPaneReducer from "../content/duck/RightPanelReducer";

const appReducer: ReturnType<typeof combineReducers> = combineReducers({
    chromeReducer,
    rightPaneReducer,
    commandBarReducer
});

export default appReducer;
