import { combineReducers } from "redux";

import chromeReducer from "./ChromeReducer";
import navigationReducer from "../content/duck/NavigationReducer";
import rightPaneReducer from "../content/duck/RightPaneReducer";

const appReducer: ReturnType<typeof combineReducers> = combineReducers({
    chromeReducer,
    rightPaneReducer,
    navigationReducer
});

export default appReducer;
