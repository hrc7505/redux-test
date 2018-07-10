import ISitesToggleRightPaneAction from "content/sites/duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import SITES_TOGGLE_SWITCH_RIGHT_PANE from "content/sites/duck/actionTypes/SITES_TOGGLE_SWITCH_RIGHT_PANE";

export default function sitesToggleRightPane(payload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction {
    return {
        type: SITES_TOGGLE_SWITCH_RIGHT_PANE,
        payload
    };
}
