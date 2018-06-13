import IToggleRightPanelPayload from "../../../right-panel/interfaces/IToggleRightPanelPayload";
import OPEN_RIGHT_PANEL from "../../action-types/OPEN_RIGHT_PANEL";

export default interface IOpenRightPanelAction {
    payload: IToggleRightPanelPayload;
    type: OPEN_RIGHT_PANEL;
}
