import DASHBOARD_CLOSE_RIGHT_PANE from "../actionTypes/DASHBOARD_CLOSE_RIGHT_PANE";
import IDashboardCloseRightPaneAction from "./interfaces/IDashboardCloseRightPaneAction";

export default function dashboardCloseRightPane(): IDashboardCloseRightPaneAction {
    return {
        type: DASHBOARD_CLOSE_RIGHT_PANE
    };
}
