import IGetSiteDetailsAction from "../duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderSetBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IHeaderSetBreadcrumbPayload";
import IHeaderSetCommandButtonsPayload from "../../common/header/duck/actions/interfaces/IHeaderSetCommandButtonsPayload";
import IHeaderSetEntityTitlePayload from "../../common/header/duck/actions/interfaces/IHeaderSetEntityTitlePayload";
import ISitesCloseRightPaneAction from "../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;
    getSiteDetails: (siteId: string) => IGetSiteDetailsAction;
    closeRightPane: () => ISitesCloseRightPaneAction;
    setHeader: (
        breadcrumbPayload: IHeaderSetBreadcrumbPayload,
        entityTitlePayload: IHeaderSetEntityTitlePayload,
        commandButtonsPayload: IHeaderSetCommandButtonsPayload
    ) => void;
}
