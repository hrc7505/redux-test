import IOpenRightPanelAction from "./interfaces/IOpenRightPanelAction";
import IRightPanelData from "../../right-panel/interfaces/IRightPanelData";
import OPEN_RIGHT_PANEL from "../action-types/OPEN_RIGHT_PANEL";

export default function openRightPanel(rightPanelData: IRightPanelData): IOpenRightPanelAction  {
    return {
        rightPanelData,
        type: OPEN_RIGHT_PANEL,
    };
}
