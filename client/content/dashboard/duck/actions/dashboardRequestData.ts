import DASHBOARD_REQUEST_DATA from "../actionTypes/DASHBOARD_REQUEST_DATA";
import IDashboardRequestDataAction from "./interfaces/IDashboardRequestDataAction";

export default function dashboardRequestData(): IDashboardRequestDataAction {
    return {
        type: DASHBOARD_REQUEST_DATA
    };
}
