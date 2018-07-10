import { Dispatch } from "redux";

import allSitesLoadData from "content/sites/allSites/duck/actions/allSitesLoadData";
import allSitesRequestData from "content/sites/allSites/duck/actions/allSitesRequestData";
import ILoadAllSitesAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesLoadDataAction";
import IAllSitesRequestDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesRequestDataAction";
import AllSitesShim from "content/sites/allSites/shim/allSitesShim";
import ISitesDataCreateUpdateSitesAction from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import sitesDataCreateUpdateSites from "content/sites/data/duck/actions/sitesDataCreateUpdateSites";
import ISitesCloseRightPaneAction from "content/sites/duck/actions/interfaces/ISitesCloseRightPaneAction";
import sitesCloseRightPane from "content/sites/duck/actions/sitesCloseRightPane";
import ISiteModel from "models/sites/ISiteModel";
import RequestUtils from "utils/requestUtils";
import UrlUtils from "utils/urlUtils";

type Actions =
    IAllSitesRequestDataAction |
    ILoadAllSitesAction |
    ISitesCloseRightPaneAction |
    ISitesDataCreateUpdateSitesAction;

const GetActiveSitesUrl: string = UrlUtils.hostApi + "Site/list?status=Active";

export default function allSitesGetData(useShim: boolean): (dispatch: Dispatch<Actions>) => void {
    return async (dispatch: Dispatch<Actions>): Promise<void> => {
        // Setting the page into the "isLoading" state and closing the right pane.
        dispatch(allSitesRequestData());
        dispatch(sitesCloseRightPane());
        try {
            // Making the request to get data from the server OR
            // using the offline shim if the offline flag was set.
            const result: ISiteModel[] = (!useShim)
                ? await RequestUtils.makeGetRequest<ISiteModel[]>(GetActiveSitesUrl)
                : AllSitesShim.getData();

            if (!result) {
                throw new Error("Result was null.");
            }

            const sitesDataPayload: ISitesDataCreateUpdateSitesPayload = {
                sites: {}
            };

            result.forEach((site: ISiteModel): void => {
                sitesDataPayload.sites[site.id] = site;
            });

            // Updating the Data State with the new information from the server.
            dispatch(sitesDataCreateUpdateSites(sitesDataPayload));

            // Render the data obtained from the server.
            dispatch(allSitesLoadData({
                sites: result.map((site: ISiteModel) => site.id)
            }));
        } catch {
            // Dispatching with a null payload to render an error on the page.
            dispatch(allSitesLoadData({
                sites: null
            }));
        }
    };
}
