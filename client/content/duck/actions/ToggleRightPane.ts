import IToggleRightPaneAction from "./models/IToggleRightPaneAction";
import TOGGLE_RIGHT_PANE from "../action-types/TOGGLE_RIGHT_PANE";

const toggleRightPane: () => IToggleRightPaneAction = (): IToggleRightPaneAction => ({
    type: TOGGLE_RIGHT_PANE
});

export default toggleRightPane;
