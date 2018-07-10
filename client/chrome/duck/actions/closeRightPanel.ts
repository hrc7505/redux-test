import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";
import CLOSE_RIGHT_PANEL from "chrome/duck/actionTypes/CLOSE_RIGHT_PANEL";

const closeRightPanel: () => ICloseRightPanelAction = (): ICloseRightPanelAction => ({
    type: CLOSE_RIGHT_PANEL
});

export default closeRightPanel;
