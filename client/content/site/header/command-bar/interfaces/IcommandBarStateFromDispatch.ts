import ISiteToggleRightPanePayload from "../../../duck/actions/interfaces/ISiteToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../../../chrome/right-panel/interfaces/IToggleRightPanelPayload";

export default interface ICommandBarStateFromDispatch {
    openRightPanel?: (actionPayload: IToggleRightPanelPayload) => void;
    siteButtonOnClick?: (actionPayload: ISiteToggleRightPanePayload) => void;
}
