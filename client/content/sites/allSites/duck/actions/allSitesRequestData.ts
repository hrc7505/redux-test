import ALL_SITES_REQUEST_DATA from "content/sites/allSites/duck/actionTypes/ALL_SITES_REQUEST_DATA";
import IAllSitesRequestDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesRequestDataAction";

export default function allSitesRequestData(): IAllSitesRequestDataAction {
    return {
        type: ALL_SITES_REQUEST_DATA
    };
}
