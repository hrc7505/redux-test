import { Dispatch } from "react-redux";

import dashboardDataShim from "../../shim/dashboardDataShim";
import dashboardRequestData from "../actions/dashboardRequestData";
import dashboardLoadData from "../actions/dashboardLoadData";
import IJobTileData from "../../interfaces/IJobTileData";
import IDashboardDataResponse from "./interfaces/IDashboardDataResponse";
import IDashboardLoadDataAction from "../actions/interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "../actions/interfaces/IDashboardLoadDataPayload";
import IDashboardRequestDataAction from "../actions/interfaces/IDashboardRequestDataAction";
import IJobInfo from "../operations/interfaces/IJobInfo";
import ISiteDetailsListItemData from "../../interfaces/ISiteDetailsListItemData";
import ISiteInfo from "../operations/interfaces/ISiteInfo";

type Actions = IDashboardRequestDataAction | IDashboardLoadDataAction;

export default function dashboardGetData(): (dispatch: Dispatch<Actions>) => void {
    return (dispatch) => {
        dispatch(dashboardRequestData());
        const result: IDashboardDataResponse = dashboardDataShim.getData();
        const loadDataPayload: IDashboardLoadDataPayload = {
            activeJobs: result.jobs.map((job: IJobInfo): IJobTileData => {
                return {
                    id: job.id,
                    title: job.title,
                    site: job.site,
                    createDate: job.createDate,
                    status: job.status,
                };
            }),
            sites: result.sites.map((site: ISiteInfo): ISiteDetailsListItemData => {
                return {
                    id: site.id,
                    name: site.name,
                    location: site.location,
                    activeJobs: site.activeJobs,
                    totalJobs: site.totalJobs,
                };
            }),
        };
        dispatch(dashboardLoadData(loadDataPayload));
    };
}
