import ISitesToggleRightPanePayload from "./ISitesToggleRightPanePayload";
import SITES_TOGGLE_RIGHT_PANE from "../../action-types/SITES_TOGGLE_RIGHT_PANE";

export default interface ISitesToggleRightPaneAction {
    type: SITES_TOGGLE_RIGHT_PANE;
    payload: ISitesToggleRightPanePayload;
}
