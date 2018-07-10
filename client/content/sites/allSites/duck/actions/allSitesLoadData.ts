import IAllSitesLoadDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesLoadDataAction";
import IAllSitesLoadDataPayload from "content/sites/allSites/duck/actions/interfaces/IAllSitesLoadDataPayload";
import ALL_SITES_LOAD_DATA from "content/sites/allSites/duck/actionTypes/ALL_SITES_LOAD_DATA";

export default function allSitesLoadData(payload: IAllSitesLoadDataPayload): IAllSitesLoadDataAction {
    return {
        type: ALL_SITES_LOAD_DATA,
        payload
    };
}
