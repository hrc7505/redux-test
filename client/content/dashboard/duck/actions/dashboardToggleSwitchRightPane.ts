import DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE from "content/dashboard/duck/actionTypes/DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE";
import IDashboardToggleSwitchRightPaneAction from "content/dashboard/duck/actions/interfaces/IDashboardToggleSwitchRightPaneAction";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default function dashboardToggleRightPane(
    payload: IToggleSwitchRightPanePayload
): IDashboardToggleSwitchRightPaneAction {
    return {
        type: DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE,
        payload
    };
}
