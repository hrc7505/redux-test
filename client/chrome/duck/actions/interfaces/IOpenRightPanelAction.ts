import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import OPEN_RIGHT_PANEL from "chrome/duck/actionTypes/OPEN_RIGHT_PANEL";

export default interface IOpenRightPanelAction {
    payload: IOpenRightPanelPayload;
    type: OPEN_RIGHT_PANEL;
}
