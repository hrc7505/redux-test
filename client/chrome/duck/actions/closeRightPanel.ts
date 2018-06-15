import CLOSE_RIGHT_PANEL from "../actionTypes/CLOSE_RIGHT_PANEL";
import ICloseRightPanelAction from "./interfaces/ICloseRightPanelAction";

const closeRightPanel: () => ICloseRightPanelAction = (): ICloseRightPanelAction => ({
    type: CLOSE_RIGHT_PANEL
});

export default closeRightPanel;
