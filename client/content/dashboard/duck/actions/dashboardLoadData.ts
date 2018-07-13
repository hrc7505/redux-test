import IDashboardLoadDataAction from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataPayload";
import DASHBOARD_LOAD_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_LOAD_DATA";

type DashboardLoadData = (payload: IDashboardLoadDataPayload) => IDashboardLoadDataAction;

const dashboardLoadData: DashboardLoadData = (payload: IDashboardLoadDataPayload): IDashboardLoadDataAction => ({
    type: DASHBOARD_LOAD_DATA,
    payload
});

export default dashboardLoadData;
