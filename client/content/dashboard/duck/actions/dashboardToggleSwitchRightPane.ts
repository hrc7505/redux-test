import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import IDashboardToggleSwitchRightPaneAction from "content/dashboard/duck/actions/interfaces/IDashboardToggleSwitchRightPaneAction";
import DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE from "content/dashboard/duck/actionTypes/DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE";

export default function dashboardToggleRightPane(
    payload: IToggleSwitchRightPanePayload
): IDashboardToggleSwitchRightPaneAction {
    return {
        type: DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE,
        payload
    };
}
