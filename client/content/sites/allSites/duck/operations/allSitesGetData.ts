import { Dispatch } from "redux";

import allSitesLoadData from "../actions/allSitesLoadData";
import allSitesRequestData from "../actions/allSitesRequestData";
import AllSitesShim from "../../shim/allSitesShim";
import ILoadAllSitesAction from "../actions/interfaces/IAllSitesLoadDataAction";
import IAllSitesRequestDataAction from "../actions/interfaces/IAllSitesRequestDataAction";
import ISiteModel from "../../../../../models/sites/ISiteModel";
import ISitesCloseRightPaneAction from "../../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesDataCreateUpdateSitesAction from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import RequestUtils from "../../../../../utils/requestUtils";
import sitesCloseRightPane from "../../../duck/actions/sitesCloseRightPane";
import sitesDataCreateUpdateSites from "../../../data/duck/actions/sitesDataCreateUpdateSites";
import UrlUtils from "../../../../../utils/urlUtils";

type Actions =
    IAllSitesRequestDataAction |
    ILoadAllSitesAction |
    ISitesCloseRightPaneAction |
    ISitesDataCreateUpdateSitesAction;

const GetActiveSitesUrl: string = UrlUtils.hostApi + "Site/GetAllAsync?status=Active";

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
