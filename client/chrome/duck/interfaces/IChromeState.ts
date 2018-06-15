import IToggleRightPanelPayload from "../../rightPanel/interfaces/IToggleRightPanelPayload";

export default interface IChromeState {
    isLeftPaneVisible: boolean;
    isRightPanelVisible: boolean;
    rightPanelData: IToggleRightPanelPayload;
}
