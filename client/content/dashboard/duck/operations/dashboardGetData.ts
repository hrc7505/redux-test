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
import IResponse from "models/response/IResponse";
import ISiteModel from "models/sites/ISiteModel";

type Actions =
    IDashboardRequestDataAction |
    IDashboardCloseRightPaneAction |
    IDashboardLoadDataAction;

type FetchData = () => Promise<IDashboardResponseResult>;

const DashboardAPI: string = "https://centerpoint-v2-beta.azurewebsites.net/api/Dashboard";

const serverRequestOK: number = 200;

const fetchDashboardData: FetchData = async (): Promise<IDashboardResponseResult> => {
    const response: Response = await fetch(DashboardAPI);
    if (response.status === serverRequestOK) {
        const jsonReponse: IResponse<IDashboardResponseResult> = await response.json();

        return jsonReponse.result;
    } else {
        return null;
    }
};

export default function dashboardGetData(useShim: boolean): (dispatch: Dispatch<Actions>) => void {
    return async (dispatch: Dispatch<Actions>): Promise<void> => {
        // Setting the dashboard into the loading state and closing the right pane.
        dispatch(dashboardRequestData());
        dispatch(dashboardCloseRightPane());

        try {
            // Getting data for the dashboard.
            const responseResult: IDashboardResponseResult = !useShim
                ? await fetchDashboardData()
                : dashboardDataShim.getData(); // Offline mode. Obtains data from the shim.

            if (!responseResult) {
                // The request resulted in a non-200 response.
                throw new Error("Response was null.");
            }

            const loadDataPayload: IDashboardLoadDataPayload = {
                activeJobs: (responseResult.activeJobs && responseResult.activeJobs.length !== 0)
                    ? responseResult.activeJobs.map((job: IJobModel): IJobTileData => ({
                        id: job.id,
                        title: job.name,
                        site: job.siteId,
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
