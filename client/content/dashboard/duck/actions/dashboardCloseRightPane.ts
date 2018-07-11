import IDashboardCloseRightPaneAction from "content/dashboard/duck/actions/interfaces/IDashboardCloseRightPaneAction";
import DASHBOARD_CLOSE_RIGHT_PANE from "content/dashboard/duck/actionTypes/DASHBOARD_CLOSE_RIGHT_PANE";

type DashboardCloseRightPane = () => IDashboardCloseRightPaneAction;

const dashboardCloseRightPane: DashboardCloseRightPane = (): IDashboardCloseRightPaneAction => ({
    type: DASHBOARD_CLOSE_RIGHT_PANE
});

export default dashboardCloseRightPane;
