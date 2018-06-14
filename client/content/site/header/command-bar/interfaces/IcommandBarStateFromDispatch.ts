import ISitesToggleRightPanePayload from "../../../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../../../chrome/right-panel/interfaces/IToggleRightPanelPayload";

export default interface ICommandBarStateFromDispatch {
    openRightPanel?: (actionPayload: IToggleRightPanelPayload) => void;
    siteButtonOnClick?: (actionPayload: ISitesToggleRightPanePayload) => void;
}
