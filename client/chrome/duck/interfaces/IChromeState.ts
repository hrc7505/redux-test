import IOpenRightPanelPayload from "../../duck/actions/interfaces/IOpenRightPanelPayload";

export default interface IChromeState {
    isLeftPaneVisible: boolean;
    isRightPanelVisible: boolean;
    rightPanelData: IOpenRightPanelPayload;
}
