import IHeaderComponentProps from "../../header/interfaces/IHeaderComponentProps";
import ISitesToggleRightPanePayload from "../actions/interfaces/ISitesToggleRightPanePayload";

export default interface ISitesState {
    isRightPaneVisible: boolean;
    rightPaneData: ISitesToggleRightPanePayload;
    headerData: IHeaderComponentProps;
}
