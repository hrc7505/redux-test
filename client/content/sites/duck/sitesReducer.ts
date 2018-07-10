import { combineReducers, Reducer } from "redux";

import rightPaneReducer from "content/common/rightPane/duck/rightPaneReducer";
import allSitesReducer from "content/sites/allSites/duck/allSitesReducer";
import headerReducer from "content/sites/common/header/duck/headerReducer";
import sitesDataReducer from "content/sites/data/duck/sitesDataReducer";
import ISitesState from "content/sites/duck/interfaces/ISitesState";
import siteDetailsReducer from "content/sites/siteDetails/duck/siteDetailsReducer";

const sitesReducer: Reducer<ISitesState> = combineReducers<ISitesState>({
    headerState: headerReducer,
    rightPaneState: rightPaneReducer("SITES"),
    allSitesState: allSitesReducer,
    siteDetailsState: siteDetailsReducer,
    sitesDataState: sitesDataReducer,
    isStandAlone: (isStandAlone: boolean): boolean => isStandAlone || false
});

export default sitesReducer;
