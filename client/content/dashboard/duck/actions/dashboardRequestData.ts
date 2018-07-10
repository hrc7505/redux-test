import DASHBOARD_REQUEST_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_REQUEST_DATA";
import IDashboardRequestDataAction from "content/dashboard/duck/actions/interfaces/IDashboardRequestDataAction";

export default function dashboardRequestData(): IDashboardRequestDataAction {
    return {
        type: DASHBOARD_REQUEST_DATA
    };
}
