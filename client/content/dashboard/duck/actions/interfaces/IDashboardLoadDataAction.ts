import DASHBOARD_LOAD_DATA from "../../actionTypes/DASHBOARD_LOAD_DATA";
import IDashboardLoadDataPayload from "./IDashboardLoadDataPayload";

export default interface IDashboardRequestDataAction {
    type: DASHBOARD_LOAD_DATA;
    payload: IDashboardLoadDataPayload;
}
