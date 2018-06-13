import DASHBOARD_TOGGLE_RIGHT_PANE from "../../action-types/DASHBOARD_TOGGLE_RIGHT_PANE";
import IDashboardToggleRightPanePayload from "./IDashboardToggleRightPanePayload";

export default interface IDashboardToggleRightPaneAction {
    type: DASHBOARD_TOGGLE_RIGHT_PANE;
    payload: IDashboardToggleRightPanePayload;
}
