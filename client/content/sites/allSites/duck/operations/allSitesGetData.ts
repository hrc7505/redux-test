import { Dispatch } from "react-redux";

import allSitesLoadData from "../actions/allSitesLoadData";
import allSitesRequestData from "../actions/allSitesRequestData";
import AllSitesShim from "../../shim/allSitesShim";
import IAllSitesDataResponse from "./interfaces/IAllSitesDataResponse";
import ILoadAllSitesAction from "../actions/interfaces/IAllSitesLoadDataAction";
import ILoadAllSitesPayload from "../actions/interfaces/IAllSitesLoadDataPayload";
import IAllSitesRequestDataAction from "../actions/interfaces/IAllSitesRequestDataAction";
import ISiteDetailsListItemData from "../../../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import ISiteInfo from "../../../../../models/sites/ISiteInfo";
import ISiteCloseRightPaneAction from "../../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import sitesCloseRightPane from "../../../duck/actions/sitesCloseRightPane";

type Actions = IAllSitesRequestDataAction | ILoadAllSitesAction | ISiteCloseRightPaneAction;

export default function allSitesGetData(): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        dispatch(allSitesRequestData());
        dispatch(sitesCloseRightPane());
        const result: IAllSitesDataResponse = AllSitesShim.getData();
        const loadDataPayload: ILoadAllSitesPayload = {
            sites: result.sites.map((site: ISiteInfo): ISiteDetailsListItemData => ({
                id: site.id,
                name: site.name,
                location: site.street,
                activeJobs: site.activeJobs,
                totalJobs: site.totalJobs,
            })),
        };
        dispatch(allSitesLoadData(loadDataPayload));
    };
}
