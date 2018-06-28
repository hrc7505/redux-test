import { combineReducers, Reducer } from "redux";

import allSitesReducer from "../allSites/duck/allSitesReducer";
import headerReducer from "../common/header/duck/headerReducer";
import ISitesState from "./interfaces/ISitesState";
import rightPaneReducer from "../../common/rightPane/duck/rightPaneReducer";
import siteDetailsReducer from "../../sites/siteDetails/duck/siteDetailsReducer";

const sitesReducer: Reducer<ISitesState> = combineReducers<ISitesState>({
    headerState: headerReducer,
    rightPaneState: rightPaneReducer("SITES"),
    allSitesState: allSitesReducer,
    siteDetailsState: siteDetailsReducer,
    isStandAlone: (isStandAlone: boolean): boolean => isStandAlone || false
});

export default sitesReducer;
