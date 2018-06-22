import { Dispatch } from "react-redux";

import dashboardCloseRightPane from "../actions/dashboardCloseRightPane";
import dashboardDataShim from "../../shim/dashboardDataShim";
import dashboardLoadData from "../actions/dashboardLoadData";
import dashboardRequestData from "../actions/dashboardRequestData";
import IDashboardCloseRightPaneAction from "../actions/interfaces/IDashboardCloseRightPaneAction";
import IDashboardDataResponse from "./interfaces/IDashboardDataResponse";
import IDashboardLoadDataAction from "../actions/interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "../actions/interfaces/IDashboardLoadDataPayload";
import IDashboardRequestDataAction from "../actions/interfaces/IDashboardRequestDataAction";
import IJobInfo from "../../../../models/jobs/IJobInfo";
import IJobTileData from "../../../common/jobSummaryList/interfaces/IJobTileData";
import ISiteDetailsListItemData from "../../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import ISiteInfo from "../../../../models/sites/ISiteInfo";

type Actions =
    IDashboardRequestDataAction |
    IDashboardCloseRightPaneAction |
    IDashboardLoadDataAction;

export default function dashboardGetData(): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        // Setting the dashboard into the loading state and closing the right pane.
        dispatch(dashboardRequestData());
        dispatch(dashboardCloseRightPane());

        // Getting the dashboard data.
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

        // Displaying the data.
        dispatch(dashboardLoadData(loadDataPayload));
    };
}
