import IOpenRightPanelAction from "./interfaces/IOpenRightPanelAction";
import IToggleRightPanelPayload from "../../rightPanel/interfaces/IToggleRightPanelPayload";
import OPEN_RIGHT_PANEL from "../actionTypes/OPEN_RIGHT_PANEL";

export default function openRightPanel(payload: IToggleRightPanelPayload): IOpenRightPanelAction  {
    return {
        type: OPEN_RIGHT_PANEL,
        payload
    };
}
