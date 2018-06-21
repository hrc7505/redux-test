import IAllSitesState from "../../allSites/duck/interfaces/IAllSitesState";
import IHeaderState from "../../common/header/duck/interfaces/IHeaderState";
import IRightPaneState from "../../../common/rightPane/duck/interfaces/IRightPaneState";
import ISiteDetailsState from "../../siteDetails/duck/interfaces/ISitesState";

export default interface ISitesState {
    headerState: IHeaderState;
    rightPaneState: IRightPaneState;
    allSitesState: IAllSitesState;
    siteDetailsState: ISiteDetailsState;
}
