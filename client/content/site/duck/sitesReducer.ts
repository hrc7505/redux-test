import { combineReducers, Reducer } from "redux";

import allSitesReducer from "../all-sites/duck/allSitesReducer";
import headerReducer from "./headerReducer";
import ISitesState from "./interfaces/ISitesState";
import siteDetailsReducer from "../site-details/duck/siteDetailsReducer";
import sitesRightPaneReducer from "./sitesRightPaneReducer";

const sitesReducer: Reducer<ISitesState> = combineReducers<ISitesState>({
    headerState: headerReducer,
    rightPaneState: sitesRightPaneReducer,
    allSitesState: allSitesReducer,
    siteDetailsState: siteDetailsReducer
});

export default sitesReducer;
