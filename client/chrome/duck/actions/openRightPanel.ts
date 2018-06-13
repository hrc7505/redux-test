import IOpenRightPanelAction from "./interfaces/IOpenRightPanelAction";
import IToggleRightPanelPayload from "../../right-panel/interfaces/IToggleRightPanelPayload";
import OPEN_RIGHT_PANEL from "../action-types/OPEN_RIGHT_PANEL";

export default function openRightPanel(payload: IToggleRightPanelPayload): IOpenRightPanelAction  {
    return {
        type: OPEN_RIGHT_PANEL,
        payload
    };
}
