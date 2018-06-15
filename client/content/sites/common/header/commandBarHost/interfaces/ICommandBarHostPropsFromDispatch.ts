import ISitesToggleRightPanePayload from "../../../../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../../../../chrome/rightPanel/interfaces/IToggleRightPanelPayload";

export default interface ICommandBarHostPropsFromDispatch {
    openRightPanel?: (actionPayload: IToggleRightPanelPayload) => void;
    siteButtonOnClick?: (actionPayload: ISitesToggleRightPanePayload) => void;
}
