import IHeaderPayload from "../../common/header/duck/operations/interfaces/IHeaderPayload";
import ISitesToggleRightPaneAction from "../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;
    getData: (useShim: boolean, siteId: string) => void;
    setHeader: (headerPayload: IHeaderPayload) => void;
}
