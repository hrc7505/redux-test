import ISitesCloseRightPaneAction from "../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import IHeaderPayload from "../../common/header/duck/operations/interfaces/IHeaderPayload";

export default interface ISiteDetailsPropsFromDispatch {
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;
    getData: (useShim: boolean, siteId: string) => void;
    closeRightPane: () => ISitesCloseRightPaneAction;
    setHeader: (headerPayload: IHeaderPayload) => void;
}
