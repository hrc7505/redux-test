import DASHBOARD_TOGGLE_RIGHT_PANE from "../actionTypes/DASHBOARD_TOGGLE_RIGHT_PANE";
import IDashboardToggleRightPaneAction from "./interfaces/IDashboardToggleRightPaneAction";
import IDashboardToggleRightPanePayload from "./interfaces/IDashboardToggleRightPanePayload";

export default function dashboardToggleRightPane(
    payload: IDashboardToggleRightPanePayload
): IDashboardToggleRightPaneAction {
    return {
        type: DASHBOARD_TOGGLE_RIGHT_PANE,
        payload
    };
}
