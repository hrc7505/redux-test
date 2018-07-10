import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import OPEN_RIGHT_PANEL from "chrome/duck/actionTypes/OPEN_RIGHT_PANEL";

export default function openRightPanel(payload: IOpenRightPanelPayload): IOpenRightPanelAction  {
    return {
        type: OPEN_RIGHT_PANEL,
        payload
    };
}
