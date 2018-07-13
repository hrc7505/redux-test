import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IHeaderPropsFromDispatch {
    // We are using below functions for commandbar buttons. We are sending them as a props to CommandbarHostContainer.
    openRightPanel: (actionPayload: IOpenRightPanelPayload) => void;
    toggleRightPane: (actionPayload: IToggleSwitchRightPanePayload) => void;
}
