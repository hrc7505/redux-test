import IToggleRightPanePayload from "./IToggleSwitchRightPanePayload";
import TOGGLE_SWITCH_RIGHT_PANE from "../../actionTypes/TOGGLE_SWITCH_RIGHT_PANE";

export default interface IToggleSwitchRightPaneAction {
    type: TOGGLE_SWITCH_RIGHT_PANE;
    payload: IToggleRightPanePayload;
}
