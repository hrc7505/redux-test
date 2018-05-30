import IOpenRightPanelAction from "./models/IOpenRightPanelAction";
import OPEN_RIGHT_PANEL from "../action-types/OPEN_RIGHT_PANEL";

const openRightPanel: (childComponent: JSX.Element) => IOpenRightPanelAction =
    (childComponent: JSX.Element): IOpenRightPanelAction => ({
        childComponent,
        type: OPEN_RIGHT_PANEL,
    });

export default openRightPanel;
