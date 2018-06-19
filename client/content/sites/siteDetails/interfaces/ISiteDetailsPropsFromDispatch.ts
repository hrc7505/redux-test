import IGetSiteDetailsAction from "../duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderPayload from "../../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../../duck/actions/interfaces/ISetHeaderDataAction";
import ISiteCloseRightPaneAction from "../../duck/actions/interfaces/ISiteCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import ISitesToggleRightPanePayload from "../../duck/actions/interfaces/ISitesToggleRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    setHeaderData: (actionPayload: IHeaderPayload) => ISetHeaderDataAction;
    jobTileOnClick: (actionPayload: ISitesToggleRightPanePayload) => ISitesToggleRightPaneAction;
    getSiteDetails: (siteId: string) => IGetSiteDetailsAction;
    closeRightPane: () => ISiteCloseRightPaneAction;
}
