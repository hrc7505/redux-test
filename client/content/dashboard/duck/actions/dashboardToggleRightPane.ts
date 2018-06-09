import IDashboardToggleRightPaneAction from "./interfaces/IDashboardToggleRightPaneAction";
import DASHBOARD_TOGGLE_RIGHT_PANE from "../action-types/DASHBOARD_TOGGLE_RIGHT_PANE";

export default function dashboardToggleRightPane(paneData: JSX.Element): IDashboardToggleRightPaneAction {
    return {
        type: DASHBOARD_TOGGLE_RIGHT_PANE,
        rightPaneData: paneData
    };
}
