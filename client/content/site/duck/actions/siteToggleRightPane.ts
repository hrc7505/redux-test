import ISitesToggleRightPanePayload from "./interfaces/ISitesToggleRightPanePayload";
import ISiteToggleRightPaneAction from "./interfaces/ISiteToggleRightPaneAction";
import SITE_TOGGLE_RIGHT_PANE from "../action-types/SITES_TOGGLE_RIGHT_PANE";

export default function siteToggleRightPane(payload: ISitesToggleRightPanePayload): ISiteToggleRightPaneAction {
    return {
        type: SITE_TOGGLE_RIGHT_PANE,
        payload
    };
}
