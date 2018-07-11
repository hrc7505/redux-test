import IDashboardRequestDataAction from "content/dashboard/duck/actions/interfaces/IDashboardRequestDataAction";
import DASHBOARD_REQUEST_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_REQUEST_DATA";

type DashboardRequestData = () => IDashboardRequestDataAction;

const dashboardRequestData: DashboardRequestData = (): IDashboardRequestDataAction => ({
    type: DASHBOARD_REQUEST_DATA
});

export default dashboardRequestData;
