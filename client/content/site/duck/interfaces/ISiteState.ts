import IHeaderComponentProps from "../../header/interfaces/iHeaderComponentProps";
import ISiteToggleRightPanePayload from "../actions/interfaces/ISiteToggleRightPanePayload";

export default interface ISiteState {
    isRightPaneVisible: boolean;
    rightPaneData: ISiteToggleRightPanePayload;
    headerData: IHeaderComponentProps;
}
