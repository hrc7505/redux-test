import { Dispatch } from "react-redux";

import dashboardDataShim from "../../shim/dashboardDataShim";
import dashboardLoadData from "../actions/dashboardLoadData";
import dashboardRequestData from "../actions/dashboardRequestData";
import IDashboardDataResponse from "./interfaces/IDashboardDataResponse";
import IDashboardLoadDataAction from "../actions/interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "../actions/interfaces/IDashboardLoadDataPayload";
import IDashboardRequestDataAction from "../actions/interfaces/IDashboardRequestDataAction";
import IJobInfo from "../operations/interfaces/IJobInfo";
import IJobTileData from "../../interfaces/IJobTileData";
import ISiteDetailsListItemData from "../../interfaces/ISiteDetailsListItemData";
import ISiteInfo from "../operations/interfaces/ISiteInfo";

type Actions = IDashboardRequestDataAction | IDashboardLoadDataAction;

export default function dashboardGetData(): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        dispatch(dashboardRequestData());
        const result: IDashboardDataResponse = dashboardDataShim.getData();
        const loadDataPayload: IDashboardLoadDataPayload = {
            activeJobs: result.jobs.map((job: IJobInfo): IJobTileData => ({
                id: job.id,
                title: job.title,
                site: job.site,
                createDate: job.createDate,
                status: job.status,
            })),
            sites: result.sites.map((site: ISiteInfo): ISiteDetailsListItemData => ({
                id: site.id,
                name: site.name,
                location: site.location,
                activeJobs: site.activeJobs,
                totalJobs: site.totalJobs,
            })),
        };
        dispatch(dashboardLoadData(loadDataPayload));
    };
}
