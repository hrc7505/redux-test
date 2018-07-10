import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import IHeaderPayload from "content/sites/common/header/duck/operations/interfaces/IHeaderPayload";
import ISitesToggleRightPaneAction from "content/sites/duck/actions/interfaces/ISitesToggleRightPaneAction";

export default interface ISiteDetailsPropsFromDispatch {
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;
    getData: (useShim: boolean, siteId: string) => void;
    setHeader: (headerPayload: IHeaderPayload) => void;
}
