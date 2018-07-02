import IGetSiteDetailsAction from "../duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import ISitesCloseRightPaneAction from "../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;
    getSiteDetails: (siteId: string) => IGetSiteDetailsAction;
    closeRightPane: () => ISitesCloseRightPaneAction;
    setHeader: (
        breadcrumbPayload: IHeaderBreadcrumbPayload,
        entityTitlePayload: IHeaderEntityTitlePayload,
        commandButtonsPayload: IHeaderCommandButtonsPayload
    ) => void;
}
