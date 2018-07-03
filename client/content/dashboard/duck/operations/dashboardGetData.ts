import { Dispatch } from "react-redux";

import dashboardCloseRightPane from "../actions/dashboardCloseRightPane";
import dashboardDataShim from "../../shim/dashboardDataShim";
import dashboardLoadData from "../actions/dashboardLoadData";
import dashboardRequestData from "../actions/dashboardRequestData";
import IDashboardCloseRightPaneAction from "../actions/interfaces/IDashboardCloseRightPaneAction";
import IDashboardLoadDataAction from "../actions/interfaces/IDashboardLoadDataAction";
import IDashboardLoadDataPayload from "../actions/interfaces/IDashboardLoadDataPayload";
import IDashboardRequestDataAction from "../actions/interfaces/IDashboardRequestDataAction";
import IDashboardResponseResult from "./interfaces/IDashboardResponseResult";
import IJobInfo from "../../../../models/jobs/IJobInfo";
import IJobTileData from "../../../common/jobSummaryList/interfaces/IJobTileData";
import IResponse from "../../../../models/response/IResponse";
import ISiteDetailsListItemData from "../../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import ISiteInfo from "../../../../models/sites/ISiteInfo";

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
                    ? responseResult.activeJobs.map((job: IJobInfo): IJobTileData => ({
                        id: job.id,
                        title: job.title,
                        site: job.site,
                        createDate: job.createDate,
                        status: job.status,
                    }))
                    : null,
                sites: (responseResult.activeSites && responseResult.activeSites.length !== 0)
                    ? responseResult.activeSites.map((site: ISiteInfo): ISiteDetailsListItemData => ({
                        id: site.id,
                        name: site.name,
                        location: `${site.street}, ${site.city}`,
                        activeJobs: site.activeJobs,
                        totalJobs: site.totalJobs,
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
