import IGetSiteDetailsAction from "../duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderPayload from "../../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../../duck/actions/interfaces/ISetHeaderDataAction";
import ISiteCloseRightPaneAction from "../../duck/actions/interfaces/ISiteCloseRightPaneAction";
import ISitesToggleRightPaneByJobTileAction from "../../duck/actions/interfaces/ISitesToggleRightPaneByJobTileAction";
import ISitesToggleRightPanePayload from "../../duck/actions/interfaces/ISitesToggleRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    setHeaderData: (actionPayload: IHeaderPayload) => ISetHeaderDataAction;
    jobTileOnClick: (actionPayload: ISitesToggleRightPanePayload) => ISitesToggleRightPaneByJobTileAction;
    getSiteDetails: (siteId: string) => IGetSiteDetailsAction;
    closeRightPane: () => ISiteCloseRightPaneAction;
}
