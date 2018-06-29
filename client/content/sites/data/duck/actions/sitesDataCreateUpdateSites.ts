import ISitesDataCreateUpdateSitesAction from "./interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "./interfaces/ISitesDataCreateUpdateSitesPayload";
import SITES_DATA_CREATE_UPDATE_SITES from "../actionTypes/SITES_DATA_CREATE_UPDATE_SITES";

export default function sitesDataCreateUpdateSites(
    payload: ISitesDataCreateUpdateSitesPayload
): ISitesDataCreateUpdateSitesAction {
    return {
        type: SITES_DATA_CREATE_UPDATE_SITES,
        payload
    };
}
