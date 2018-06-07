import { combineReducers } from "redux";
import rightPaneReducer from "./RightPaneReducer";
import siteReducer from "../body/site/duck/siteReducer";

const contentReducer: ReturnType<typeof combineReducers> = combineReducers({
    siteReducer,
    rightPaneReducer
});

export default contentReducer;
