import ISitesToggleRightPaneAction from "./interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import SITES_TOGGLE_SWITCH_RIGHT_PANE from "../actionTypes/SITES_TOGGLE_SWITCH_RIGHT_PANE";

export default function sitesToggleRightPane(payload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction {
    return {
        type: SITES_TOGGLE_SWITCH_RIGHT_PANE,
        payload
    };
}
