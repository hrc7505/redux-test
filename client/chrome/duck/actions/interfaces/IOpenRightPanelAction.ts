import IRightPanelData from "../../../right-panel/interfaces/IRightPanelData";
import OPEN_RIGHT_PANEL from "../../action-types/OPEN_RIGHT_PANEL";

export default interface IOpenRightPanelAction {
    rightPanelData: IRightPanelData;
    type: OPEN_RIGHT_PANEL;
}
