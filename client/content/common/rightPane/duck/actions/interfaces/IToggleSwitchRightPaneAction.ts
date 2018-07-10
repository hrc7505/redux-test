import IToggleRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import TOGGLE_SWITCH_RIGHT_PANE from "content/common/rightPane/duck/actionTypes/TOGGLE_SWITCH_RIGHT_PANE";

export default interface IToggleSwitchRightPaneAction {
    type: TOGGLE_SWITCH_RIGHT_PANE;
    payload: IToggleRightPanePayload;
}
