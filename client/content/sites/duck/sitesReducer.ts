import { combineReducers, Reducer } from "redux";

import allSitesReducer from "content/sites/allSites/duck/allSitesReducer";
import headerReducer from "content/sites/common/header/duck/headerReducer";
import ISitesState from "content/sites/duck/interfaces/ISitesState";
import rightPaneReducer from "content/common/rightPane/duck/rightPaneReducer";
import siteDetailsReducer from "content/sites/siteDetails/duck/siteDetailsReducer";
import sitesDataReducer from "content/sites/data/duck/sitesDataReducer";

const sitesReducer: Reducer<ISitesState> = combineReducers<ISitesState>({
    headerState: headerReducer,
    rightPaneState: rightPaneReducer("SITES"),
    allSitesState: allSitesReducer,
    siteDetailsState: siteDetailsReducer,
    sitesDataState: sitesDataReducer,
    isStandAlone: (isStandAlone: boolean): boolean => isStandAlone || false
});

export default sitesReducer;
