import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import OPEN_RIGHT_PANEL from "chrome/duck/actionTypes/OPEN_RIGHT_PANEL";

type OpenRightPanel = (payload: IOpenRightPanelPayload) => IOpenRightPanelAction;

const openRightPanel: OpenRightPanel = (payload: IOpenRightPanelPayload): IOpenRightPanelAction => ({
    type: OPEN_RIGHT_PANEL,
    payload
});

export default openRightPanel;
