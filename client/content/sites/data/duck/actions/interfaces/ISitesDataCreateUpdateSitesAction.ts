import ISitesDataCreateUpdateSitesPayload from "./ISitesDataCreateUpdateSitesPayload";
import SITES_DATA_CREATE_UPDATE_SITES from "../../actionTypes/SITES_DATA_CREATE_UPDATE_SITES";

export default interface ISitesDataCreateUpdateSitessAction {
    type: SITES_DATA_CREATE_UPDATE_SITES;
    payload: ISitesDataCreateUpdateSitesPayload;
}