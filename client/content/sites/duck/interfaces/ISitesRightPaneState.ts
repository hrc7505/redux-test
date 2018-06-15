import ISitesToggleRightPanePayload from "../actions/interfaces/ISitesToggleRightPanePayload";

export default interface ISitesRightPaneState {
    isRightPaneVisible: boolean;
    rightPaneData: ISitesToggleRightPanePayload;
}
