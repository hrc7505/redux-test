import ISitesDataCreateUpdateSitesPayload from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import SITES_DATA_CREATE_UPDATE_SITES from "content/sites/data/duck/actionTypes/SITES_DATA_CREATE_UPDATE_SITES";

export default interface ISitesDataCreateUpdateSitessAction {
    type: SITES_DATA_CREATE_UPDATE_SITES;
    payload: ISitesDataCreateUpdateSitesPayload;
}
