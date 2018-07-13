import ISiteDetailsLoadDataAction from "content/sites/siteDetails/duck/actions/interfaces/ISiteDetailsLoadDataAction";
import ISiteDetailsLoadDataPayload from "content/sites/siteDetails/duck/actions/interfaces/ISiteDetailsLoadDataPayload";
import SITE_DETAILS_LOAD_DATA from "content/sites/siteDetails/duck/actionTypes/SITE_DETAILS_LOAD_DATA";

type siteDetailsLoadData = (payload: ISiteDetailsLoadDataPayload) => ISiteDetailsLoadDataAction;
const siteDetailsLoadData: siteDetailsLoadData =
    (payload: ISiteDetailsLoadDataPayload): ISiteDetailsLoadDataAction => ({
        type: SITE_DETAILS_LOAD_DATA,
        payload
    });

export default siteDetailsLoadData;
