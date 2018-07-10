import IAllSitesState from "content/sites/allSites/duck/interfaces/IAllSitesState";
import IHeaderState from "content/sites/common/header/duck/interfaces/IHeaderState";
import IRightPaneState from "content/common/rightPane/duck/interfaces/IRightPaneState";
import ISiteDetailsState from "content/sites/siteDetails/duck/interfaces/ISiteDetailsState";
import ISitesDataState from "content/sites/data/duck/interfaces/ISitesDataState";

export default interface ISitesState {
    headerState: IHeaderState;
    rightPaneState: IRightPaneState;
    allSitesState: IAllSitesState;
    siteDetailsState: ISiteDetailsState;
    sitesDataState: ISitesDataState;
    isStandAlone?: boolean;
}
