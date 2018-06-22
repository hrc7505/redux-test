import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ISitesRightPaneState {
    isRightPaneVisible: boolean;
    rightPaneData: IToggleSwitchRightPanePayload;
}
