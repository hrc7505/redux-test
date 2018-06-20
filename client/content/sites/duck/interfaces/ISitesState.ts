import IAllSitesState from "../../allSites/duck/interfaces/IAllSitesState";
import IHeaderState from "../../common/header/duck/interfaces/IHeaderState";
import ISitesRightPaneState from "./ISitesRightPaneState";
import ISiteDetailsState from "../../siteDetails/duck/interfaces/ISitesState";

export default interface ISitesState {
    headerState: IHeaderState;
    rightPaneState: ISitesRightPaneState;
    allSitesState: IAllSitesState;
    siteDetailsState: ISiteDetailsState;
}
