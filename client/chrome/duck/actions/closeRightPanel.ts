import CLOSE_RIGHT_PANEL from "chrome/duck/actionTypes/CLOSE_RIGHT_PANEL";
import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";

const closeRightPanel: () => ICloseRightPanelAction = (): ICloseRightPanelAction => ({
    type: CLOSE_RIGHT_PANEL
});

export default closeRightPanel;
