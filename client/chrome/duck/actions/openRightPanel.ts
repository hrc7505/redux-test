import IOpenRightPanelAction from "./interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "../../duck/actions/interfaces/IOpenRightPanelPayload";
import OPEN_RIGHT_PANEL from "../actionTypes/OPEN_RIGHT_PANEL";

export default function openRightPanel(payload: IOpenRightPanelPayload): IOpenRightPanelAction  {
    return {
        type: OPEN_RIGHT_PANEL,
        payload
    };
}
