import ISiteDetailsLoadDataAction from "./interfaces/ISiteDetailsLoadDataAction";
import ISiteDetailsLoadDataPayload from "./interfaces/ISiteDetailsLoadDataPayload";
import SITE_DETAILS_LOAD_DATA from "../actionTypes/SITE_DETAILS_LOAD_DATA";

export default function siteDetailsLoadData(payload: ISiteDetailsLoadDataPayload): ISiteDetailsLoadDataAction {
    return {
        type: SITE_DETAILS_LOAD_DATA,
        payload
    };
}
