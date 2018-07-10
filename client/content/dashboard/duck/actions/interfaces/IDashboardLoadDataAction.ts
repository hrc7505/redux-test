import IDashboardLoadDataPayload from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataPayload";
import DASHBOARD_LOAD_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_LOAD_DATA";

export default interface IDashboardRequestDataAction {
    type: DASHBOARD_LOAD_DATA;
    payload: IDashboardLoadDataPayload;
}
