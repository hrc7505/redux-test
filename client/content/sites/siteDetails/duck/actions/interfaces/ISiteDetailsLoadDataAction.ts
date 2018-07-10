import ISiteDetailsLoadDataPayload from "content/sites/siteDetails/duck/actions/interfaces/ISiteDetailsLoadDataPayload";
import SITE_DETAILS_LOAD_DATA from "content/sites/siteDetails/duck/actionTypes/SITE_DETAILS_LOAD_DATA";

export default interface ISiteDetailsLoadDataAction {
    type: SITE_DETAILS_LOAD_DATA;
    payload: ISiteDetailsLoadDataPayload;
}
