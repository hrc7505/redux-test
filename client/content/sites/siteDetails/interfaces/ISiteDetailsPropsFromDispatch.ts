import IBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandsPayload from "../../common/header/duck/actions/interfaces/ICommandsPayload";
import IEnityTitlePayload from "../../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IGetSiteDetailsAction from "../duck/actions/interfaces/IGetSiteDetailsAction";
import ISetBreadcrumbAction from "../../common/header/duck/actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "../../common/header/duck/actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "../../common/header/duck/actions/interfaces/ISetEntityTitleAction";
import ISiteCloseRightPaneAction from "../../duck/actions/interfaces/ISiteCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import ISitesToggleRightPanePayload from "../../duck/actions/interfaces/ISitesToggleRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    setBreadcrumb: (actionPayload: IBreadcrumbPayload) => ISetBreadcrumbAction;
    setEntityTitle: (actionPayload: IEnityTitlePayload) => ISetEntityTitleAction;
    setCommands: (actionPayload: ICommandsPayload) => ISetCommandsAction;
    jobTileOnClick: (actionPayload: ISitesToggleRightPanePayload) => ISitesToggleRightPaneAction;
    getSiteDetails: (siteId: string) => IGetSiteDetailsAction;
    closeRightPane: () => ISiteCloseRightPaneAction;
}
