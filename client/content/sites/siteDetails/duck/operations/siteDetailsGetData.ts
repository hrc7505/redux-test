import { Dispatch } from "react-redux";

import ISiteDetailsLoadDataAction from "../actions/interfaces/ISiteDetailsLoadDataAction";
import ISiteDetailsRequestDataAction from "../actions/interfaces/ISiteDetailsRequestDataAction";
import ISiteModel from "../../../../../models/sites/ISiteModel";
import ISitesCloseRightPaneAction from "../../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesDataCreateUpdateSitesAction from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import RequestUtils from "../../../../../utils/requestUtils";
import siteDetailsLoadData from "../actions/siteDetailsLoadData";
import siteDetailsRequestData from "../actions/siteDetailsRequestData";
import sitesCloseRightPane from "../../../duck/actions/sitesCloseRightPane";
import sitesDataCreateUpdateSites from "../../../data/duck/actions/sitesDataCreateUpdateSites";
import UrlUtils from "../../../../../utils/urlUtils";

type Actions = ISitesDataCreateUpdateSitesAction |
    ISiteDetailsLoadDataAction |
    ISiteDetailsRequestDataAction |
    ISitesCloseRightPaneAction;

const GetSiteUrl: string = UrlUtils.hostApi + "/Site?id=";

const siteDetailsGetData = (useShim: boolean, siteId: string): ((dispatch: Dispatch<Actions>) => void) => {
    return async (dispatch: Dispatch<Actions>): Promise<void> => {
        dispatch(siteDetailsRequestData());
        dispatch(sitesCloseRightPane());
        try {
            const result: ISiteModel = await RequestUtils.makeGetRequest<ISiteModel>(`${GetSiteUrl}${siteId}`);

            if (!result) {
                throw new Error("Result was null.");
            }

            const sitesDataPayload: ISitesDataCreateUpdateSitesPayload = {
                sites: {}
            };

            sitesDataPayload.sites[result.id] = result;

            // Updating the Data State with the new information from the server.
            dispatch(sitesDataCreateUpdateSites(sitesDataPayload));

            dispatch(siteDetailsLoadData({
                site: result.id
            }));
        } catch {
            alert("Error");
            dispatch(siteDetailsLoadData({
                site: null
            }));
        }

    }
}

export default siteDetailsGetData;

// function foo(useShim: boolean): (dispatch: Dispatch<Actions>) => void {
//     return async (dispatch: Dispatch<Actions>): Promise<void> => {
//         // Setting the page into the "isLoading" state and closing the right pane.
//         dispatch(allSitesRequestData());
//         dispatch(sitesCloseRightPane());
//         try {
//             // Making the request to get data from the server OR
//             // using the offline shim if the offline flag was set.
//             const result: ISiteModel[] = (!useShim)
//                 ? await RequestUtils.makeGetRequest<ISiteModel[]>(GetActiveSitesURL)
//                 : AllSitesShim.getData();

//             if (!result) {
//                 throw new Error("Result was null.");
//             }

//             const sitesDataPayload: ISitesDataCreateUpdateSitesPayload = {
//                 sites: {}
//             };

//             result.forEach((site: ISiteModel): void => {
//                 sitesDataPayload.sites[site.id] = site;
//             });

//             // Updating the Data State with the new information from the server.
//             dispatch(sitesDataCreateUpdateSites(sitesDataPayload));

//             // Render the data obtained from the server.
//             dispatch(allSitesLoadData({
//                 sites: result.map((site: ISiteModel) => site.id)
//             }));
//         } catch {
//             // Dispatching with a null payload to render an error on the page.
//             dispatch(allSitesLoadData({
//                 sites: null
//             }));
//         }
//     };
// }