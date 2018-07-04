import SITE_DETAILS_LOAD_DATA from "../actionTypes/SITE_DETAILS_LOAD_DATA";
import ISiteDetailsLoadDataAction from "./interfaces/ISiteDetailsLoadDataAction";
import ISiteDetailsLoadDataPayload from "./interfaces/ISiteDetailsLoadDataPayload";

export default function siteDetailsLoadData(payload: ISiteDetailsLoadDataPayload): ISiteDetailsLoadDataAction {
    return {
        type: SITE_DETAILS_LOAD_DATA,
        payload
    };
}
