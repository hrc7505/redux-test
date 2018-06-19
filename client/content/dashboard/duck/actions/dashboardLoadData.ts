import DASHBOARD_LOAD_DATA from "../actionTypes/DASHBOARD_LOAD_DATA";
import IDashboardLoadDataAction from "./interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "./interfaces/IDashboardLoadDataPayload";

export default function dashboardLoadData(
    payload: IDashboardLoadDataPayload
): IDashboardLoadDataAction {
    return {
        type: DASHBOARD_LOAD_DATA,
        payload
    };
}
