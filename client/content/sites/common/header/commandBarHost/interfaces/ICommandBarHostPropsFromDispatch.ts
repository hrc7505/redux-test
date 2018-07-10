import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ICommandBarHostPropsFromDispatch {
    openRightPanel?: (actionPayload: IOpenRightPanelPayload) => void;
    toggleRightPane?: (actionPayload: IToggleSwitchRightPanePayload) => void;
}
