import IBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandButtonsPayload from "../../common/header/duck/actions/interfaces/ICommandButtonsPayload";
import IEnityTitlePayload from "../../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IGetSiteDetailsAction from "../duck/actions/interfaces/IGetSiteDetailsAction";
import ISetBreadcrumbAction from "../../common/header/duck/actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "../../common/header/duck/actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "../../common/header/duck/actions/interfaces/ISetEntityTitleAction";
import ISitesCloseRightPaneAction from "../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    setBreadcrumb: (actionPayload: IBreadcrumbPayload) => ISetBreadcrumbAction;
    setEntityTitle: (actionPayload: IEnityTitlePayload) => ISetEntityTitleAction;
    setCommands: (actionPayload: ICommandButtonsPayload) => ISetCommandsAction;
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;
    getSiteDetails: (siteId: string) => IGetSiteDetailsAction;
    closeRightPane: () => ISitesCloseRightPaneAction;
}
