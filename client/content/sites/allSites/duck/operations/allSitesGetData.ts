import { Dispatch } from "react-redux";

import allSitesLoadData from "../actions/allSitesLoadData";
import allSitesRequestData from "../actions/allSitesRequestData";
import AllSitesShim from "../../shim/allSitesShim";
import IAllSitesDataResponse from "./interfaces/IAllSitesDataResponse";
import ILoadAllSitesAction from "../actions/interfaces/IAllSitesLoadDataAction";
import IAllSitesRequestDataAction from "../actions/interfaces/IAllSitesRequestDataAction";
import ISiteInfo from "../../../../../models/sites/ISiteInfo";
import ISiteCloseRightPaneAction from "../../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesDataCreateUpdateSitesAction from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import sitesCloseRightPane from "../../../duck/actions/sitesCloseRightPane";
import sitesDataCreateUpdateSites from "../../../data/duck/actions/sitesDataCreateUpdateSites";

type Actions =
    IAllSitesRequestDataAction |
    ILoadAllSitesAction |
    ISiteCloseRightPaneAction |
    ISitesDataCreateUpdateSitesAction;

export default function allSitesGetData(): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        dispatch(allSitesRequestData());
        dispatch(sitesCloseRightPane());
        const result: IAllSitesDataResponse = AllSitesShim.getData();

        const sitesDataPayload: ISitesDataCreateUpdateSitesPayload = {
            sites: { }
        };

        result.sites.map((site: ISiteInfo) => {
            sitesDataPayload.sites[site.id] = site;
        });

        dispatch(sitesDataCreateUpdateSites(sitesDataPayload));
        dispatch(allSitesLoadData({
            sites: result.sites.map((site: ISiteInfo) => site.id)
        }));
    };
}
