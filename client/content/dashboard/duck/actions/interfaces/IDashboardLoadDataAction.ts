import DASHBOARD_LOAD_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_LOAD_DATA";
import IDashboardLoadDataPayload from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataPayload";

export default interface IDashboardRequestDataAction {
    type: DASHBOARD_LOAD_DATA;
    payload: IDashboardLoadDataPayload;
}
