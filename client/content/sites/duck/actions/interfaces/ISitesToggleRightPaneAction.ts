import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import SITES_TOGGLE_SWITCH_RIGHT_PANE from "content/sites/duck/actionTypes/SITES_TOGGLE_SWITCH_RIGHT_PANE";

export default interface ISitesToggleRightPaneAction {
    type: SITES_TOGGLE_SWITCH_RIGHT_PANE;
    payload: IToggleSwitchRightPanePayload;
}
