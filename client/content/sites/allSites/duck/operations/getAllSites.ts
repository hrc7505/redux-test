import { Dispatch } from "react-redux";

import AllSitesShim from "../../shim/allSitesShim";
import IAllSitesLoadPayload from "../actions/interfaces/IAllSitesLoadPayload";
import IAllSiteResponse from "./interfaces/IAllSitesResponse";
import ILoadAllSitesAction from "../actions/interfaces/ILoadAllSitesAction";
import IRequestAllSitesAction from "../actions/interfaces/IRequestAllSitesAction";
import ISiteDetailsListItemData from "../../../../dashboard/interfaces/ISiteDetailsListItemData";
import ISiteInfo from "../../../../dashboard/duck/operations/interfaces/ISiteInfo";
import loadAllSites from "../actions/loadAllSites";
import requestAllSites from "../actions/requestAllSites";

type Actions = IRequestAllSitesAction | ILoadAllSitesAction;

export default function getAllSites(): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        dispatch(requestAllSites());
        const result: IAllSiteResponse = AllSitesShim.getData();
        const loadDataPayload: IAllSitesLoadPayload = {
            sites: result.sites.map((site: ISiteInfo): ISiteDetailsListItemData => ({
                id: site.id,
                name: site.name,
                location: site.location,
                activeJobs: site.activeJobs,
                totalJobs: site.totalJobs,
            })),
        };
        dispatch(loadAllSites(loadDataPayload));
    };
}
