import ISiteDetailsLoadDataPayload from "./ISiteDetailsLoadDataPayload";
import SITE_DETAILS_LOAD_DATA from "../../actionTypes/SITE_DETAILS_LOAD_DATA";

export default interface ISiteDetailsLoadDataAction {
    type: SITE_DETAILS_LOAD_DATA;
    payload: ISiteDetailsLoadDataPayload;
}
