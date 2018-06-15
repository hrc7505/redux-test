import ISitesToggleRightPaneAction from "./interfaces/ISitesToggleRightPaneAction";
import ISitesToggleRightPanePayload from "./interfaces/ISitesToggleRightPanePayload";
import SITES_TOGGLE_RIGHT_PANE from "../action-types/SITES_TOGGLE_RIGHT_PANE";

export default function sitesToggleRightPane(payload: ISitesToggleRightPanePayload): ISitesToggleRightPaneAction {
    return {
        type: SITES_TOGGLE_RIGHT_PANE,
        payload
    };
}
