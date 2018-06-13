import ISiteToggleRightPanePayload from "./ISiteToggleRightPanePayload";
import SITE_TOGGLE_RIGHT_PANE from "../../action-types/SITE_TOGGLE_RIGHT_PANE";

export default interface ISiteToggleRightPaneAction {
    type: SITE_TOGGLE_RIGHT_PANE;
    payload: ISiteToggleRightPanePayload;
}
