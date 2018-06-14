import IToggleRightPanelPayload from "../../right-panel/interfaces/IToggleRightPanelPayload";

export default interface IChromeState {
    isLeftPaneVisible: boolean;
    isRightPanelVisible: boolean;
    rightPanelData: IToggleRightPanelPayload;
}
