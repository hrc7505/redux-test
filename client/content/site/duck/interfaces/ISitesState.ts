import IAllSitesState from "../../all-sites/duck/interfaces/IAllSitesState";
import IHeaderState from "./IHeaderState";
import ISitesRightPaneState from "./ISitesRightPaneState";
import ISiteDetailsState from "../../site-details/duck/interfaces/ISitesState";

export default interface ISitesState {
    headerState: IHeaderState;
    rightPaneState: ISitesRightPaneState;
    allSitesState: IAllSitesState;
    siteDetailsState: ISiteDetailsState;
}
