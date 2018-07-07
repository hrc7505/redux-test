import ISiteDetailsRequestDataAction from "./interfaces/ISiteDetailsRequestDataAction";
import SITE_DETAILS_REQUEST_DATA from "../actionTypes/SITE_DETAILS_REQUEST_DATA";

export default function siteDetailsRequestData(): ISiteDetailsRequestDataAction {
    return {
        type: SITE_DETAILS_REQUEST_DATA
    };
}
