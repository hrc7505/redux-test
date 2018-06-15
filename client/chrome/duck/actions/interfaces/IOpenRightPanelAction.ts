import IToggleRightPanelPayload from "../../../rightPanel/interfaces/IToggleRightPanelPayload";
import OPEN_RIGHT_PANEL from "../../actionTypes/OPEN_RIGHT_PANEL";

export default interface IOpenRightPanelAction {
    payload: IToggleRightPanelPayload;
    type: OPEN_RIGHT_PANEL;
}
