import { Dispatch } from "redux";

import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import dashboardCloseRightPane from "content/dashboard/duck/actions/dashboardCloseRightPane";
import dashboardLoadData from "content/dashboard/duck/actions/dashboardLoadData";
import dashboardRequestData from "content/dashboard/duck/actions/dashboardRequestData";
import IDashboardCloseRightPaneAction from "content/dashboard/duck/actions/interfaces/IDashboardCloseRightPaneAction";
import IDashboardLoadDataAction from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataPayload";
import IDashboardRequestDataAction from "content/dashboard/duck/actions/interfaces/IDashboardRequestDataAction";
import IDashboardResponseResult from "content/dashboard/duck/operations/interfaces/IDashboardResponseResult";
import dashboardDataShim from "content/dashboard/shim/dashboardDataShim";
import IJobModel from "models/jobs/IJobModel";
import ISiteModel from "models/sites/ISiteModel";
import RequestUtils from "utils/requestUtils";
import UrlUtils from "utils/urlUtils";

type Actions =
    IDashboardRequestDataAction |
    IDashboardCloseRightPaneAction |
    IDashboardLoadDataAction;

const DashboardDataUrl: string = UrlUtils.hostApi + "Dashboard";

export default function dashboardGetData(useShim: boolean): (dispatch: Dispatch<Actions>) => void {
    return async (dispatch: Dispatch<Actions>): Promise<void> => {
        // Setting the dashboard into the loading state and closing the right pane.
        dispatch(dashboardRequestData());
        dispatch(dashboardCloseRightPane());

        try {
            // Getting data for the dashboard.
            const responseResult: IDashboardResponseResult = !useShim
                ? await RequestUtils.makeGetRequest<IDashboardResponseResult>(DashboardDataUrl)
                : dashboardDataShim.getData(); // Offline mode. Obtains data from the shim.

            if (!responseResult) {
                // The request resulted in a non-200 response.
                throw new Error("Response was null.");
            }

            let activeJobs: IJobModel[];
            if (responseResult.activeJobs && responseResult.activeJobs.length !== 0) {
                // Taking only the first 3 jobs to be displayed.
                const maxNumberOfActiveJobsToDisplay: number = 3;
                activeJobs = responseResult.activeJobs.slice(0, maxNumberOfActiveJobsToDisplay);
            }

            // !! >>>>> N.B. <<<<< !!
            // We are not creating or storing the data from the dashboard request. This is intentional
            // as there is no reason to store this information as it won't be reused anywhere other then
            // displaying the dashboard. Passing the data directly into the redux state and then
            // passing it from the state into the props should not be done generally.
            // Do not follow this pattern.
            const loadDataPayload: IDashboardLoadDataPayload = {
                activeJobs: (!!activeJobs && activeJobs.length !== 0)
                    ? activeJobs.map((job: IJobModel): IJobTileData => ({
                        id: job.id,
                        number: job.number,
                        title: job.name,
                        siteId: job.siteId,
                        siteName: responseResult.activeSites[responseResult.activeSites.findIndex(
                            (site: ISiteModel): boolean => (site.id === job.siteId))].name,
                        createDate: job.createdAt,
                        status: job.status,
                    }))
                    : null,
                sites: (responseResult.activeSites && responseResult.activeSites.length !== 0)
                    ? responseResult.activeSites.map((site: ISiteModel): ISiteDetailsListItemData => ({
                        id: site.id,
                        name: site.name,
                        location: `${site.street}, ${site.city}`,
                        activeJobs: site.numberOfActiveJobs.toString(),
                        totalJobs: site.numberOfTotalJobs.toString(),
                    }))
                    : null,
            };

            // Displaying the data.
            dispatch(dashboardLoadData(loadDataPayload));
        } catch (error) {
            // In the case of an error occuring with the request, we dispatch load data
            // with both parts of the payload being null.
            // Since all the data from the dashboard
            dispatch(dashboardLoadData({
                activeJobs: null,
                sites: null,
            }));
        }
    };
}
