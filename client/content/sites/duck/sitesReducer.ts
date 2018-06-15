import { combineReducers, Reducer } from "redux";

import allSitesReducer from "../allSites/duck/allSitesReducer";
import headerReducer from "./headerReducer";
import ISitesState from "./interfaces/ISitesState";
import siteDetailsReducer from "../../sites/siteDetails/duck/siteDetailsReducer";
import sitesRightPaneReducer from "./sitesRightPaneReducer";

const sitesReducer: Reducer<ISitesState> = combineReducers<ISitesState>({
    headerState: headerReducer,
    rightPaneState: sitesRightPaneReducer,
    allSitesState: allSitesReducer,
    siteDetailsState: siteDetailsReducer
});

export default sitesReducer;
