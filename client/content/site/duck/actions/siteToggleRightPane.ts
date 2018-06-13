import ISiteToggleRightPaneAction from "./interfaces/ISiteToggleRightPaneAction";
import ISiteToggleRightPanePayload from "./interfaces/ISiteToggleRightPanePayload";
import SITE_TOGGLE_RIGHT_PANE from "../action-types/SITE_TOGGLE_RIGHT_PANE";

export default function siteToggleRightPane(payload: ISiteToggleRightPanePayload): ISiteToggleRightPaneAction {
    return {
        type: SITE_TOGGLE_RIGHT_PANE,
        payload
    };
}
