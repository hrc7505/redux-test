import IGetSiteDetailsAction from "../duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import IHeaderSetBreadcrumbAction from "../../common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../../common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../../common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";
import ISitesCloseRightPaneAction from "../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    setBreadcrumb: (actionPayload: IHeaderBreadcrumbPayload) => IHeaderSetBreadcrumbAction;
    setEntityTitle: (actionPayload: IHeaderEntityTitlePayload) => IHeaderSetEntityTitleAction;
    setCommands: (actionPayload: IHeaderCommandButtonsPayload) => IHeaderSetCommandsAction;
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;
    getSiteDetails: (siteId: string) => IGetSiteDetailsAction;
    closeRightPane: () => ISitesCloseRightPaneAction;
}
