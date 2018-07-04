import SITE_DETAILS_LOAD_DATA from "../../actionTypes/SITE_DETAILS_LOAD_DATA";
import ISiteDetailsLoadDataPayload from "./ISiteDetailsLoadDataPayload";

export default interface IAllSitesLoadDataAction {
    type: SITE_DETAILS_LOAD_DATA;
    payload: ISiteDetailsLoadDataPayload;
}
