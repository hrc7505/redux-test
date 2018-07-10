import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";

export default interface IChromeState {
    isLeftPaneVisible: boolean;
    isRightPanelVisible: boolean;
    rightPanelData: IOpenRightPanelPayload;
}
