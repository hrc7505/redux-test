import GET_SITE_DETAILS from "../../actionTypes/GET_SITE_DETAILS";

export default interface IGetSiteDetailsAction {
    type: GET_SITE_DETAILS;
    siteId: string;
}
