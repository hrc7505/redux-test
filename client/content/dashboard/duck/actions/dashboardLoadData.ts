import IDashboardLoadDataAction from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataPayload";
import DASHBOARD_LOAD_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_LOAD_DATA";

export default function dashboardLoadData(
    payload: IDashboardLoadDataPayload
): IDashboardLoadDataAction {
    return {
        type: DASHBOARD_LOAD_DATA,
        payload
    };
}
