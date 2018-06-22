import IOpenRightPanelPayload from "../../../duck/actions/interfaces/IOpenRightPanelPayload";
import OPEN_RIGHT_PANEL from "../../actionTypes/OPEN_RIGHT_PANEL";

export default interface IOpenRightPanelAction {
    payload: IOpenRightPanelPayload;
    type: OPEN_RIGHT_PANEL;
}
