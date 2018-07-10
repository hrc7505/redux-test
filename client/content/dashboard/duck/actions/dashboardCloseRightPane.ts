import IDashboardCloseRightPaneAction from "content/dashboard/duck/actions/interfaces/IDashboardCloseRightPaneAction";
import DASHBOARD_CLOSE_RIGHT_PANE from "content/dashboard/duck/actionTypes/DASHBOARD_CLOSE_RIGHT_PANE";

export default function dashboardCloseRightPane(): IDashboardCloseRightPaneAction {
    return {
        type: DASHBOARD_CLOSE_RIGHT_PANE
    };
}
