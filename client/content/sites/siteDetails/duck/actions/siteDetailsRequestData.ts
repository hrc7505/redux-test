import ISiteDetailsRequestDataAction from "content/sites/siteDetails/duck/actions/interfaces/ISiteDetailsRequestDataAction";
import SITE_DETAILS_REQUEST_DATA from "content/sites/siteDetails/duck/actionTypes/SITE_DETAILS_REQUEST_DATA";

type SiteDetailsRequestData = () => ISiteDetailsRequestDataAction;

const siteDetailsRequestData: SiteDetailsRequestData = (): ISiteDetailsRequestDataAction => ({
    type: SITE_DETAILS_REQUEST_DATA
});

export default siteDetailsRequestData;
