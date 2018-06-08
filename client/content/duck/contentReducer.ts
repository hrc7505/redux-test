import { combineReducers, Reducer } from "redux";

import IContentState from "./interfaces/IContentState";
import siteReducer from "../site/duck/siteReducer";

const contentReducer: Reducer<IContentState> = combineReducers<IContentState>({
    siteState: siteReducer
});

export default contentReducer;
