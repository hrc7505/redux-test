import { combineReducers } from "redux";

import IContentState from "./interfaces/IContentState";
import rightPaneReducer from "./RightPaneReducer";
import siteReducer from "../body/site/duck/siteReducer";

const contentReducer: ReturnType<typeof combineReducers> = combineReducers<IContentState>({
    siteReducer,
    rightPaneReducer
});

export default contentReducer;
