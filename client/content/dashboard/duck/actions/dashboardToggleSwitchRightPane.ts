import DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE from "../actionTypes/DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE";
import IDashboardToggleSwitchRightPaneAction from "./interfaces/IDashboardToggleSwitchRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default function dashboardToggleRightPane(
    payload: IToggleSwitchRightPanePayload
): IDashboardToggleSwitchRightPaneAction {
    return {
        type: DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE,
        payload
    };
}
