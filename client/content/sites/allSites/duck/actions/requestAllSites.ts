import IRequestAllSitesAction from "./interfaces/IRequestAllSitesAction";
import REQUEST_ALL_SITES from "../actionTypes/REQUEST_ALL_SITES";

export default function requestAllSites(): IRequestAllSitesAction {
    return {
        type: REQUEST_ALL_SITES
    };
}
