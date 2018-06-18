import GET_SITE_DETAILS from "../actionTypes/GET_SITE_DETAILS";
import IGetSiteDetailsAction from "./interfaces/IGetSiteDetailsAction";

export default function getSitesDetails(siteId: string): IGetSiteDetailsAction {
    return {
        type: GET_SITE_DETAILS,
        siteId
    };
}
