import ALL_SITES_REQUEST_DATA from "../actionTypes/ALL_SITES_REQUEST_DATA";
import IAllSitesRequestDataAction from "./interfaces/IAllSitesRequestDataAction";

export default function allSitesRequestData(): IAllSitesRequestDataAction {
    return {
        type: ALL_SITES_REQUEST_DATA
    };
}
