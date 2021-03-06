import IAllSitesRequestDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesRequestDataAction";
import ALL_SITES_REQUEST_DATA from "content/sites/allSites/duck/actionTypes/ALL_SITES_REQUEST_DATA";

type AllSitesRequestData = () => IAllSitesRequestDataAction;

const allSitesRequestData: AllSitesRequestData = (): IAllSitesRequestDataAction => ({
    type: ALL_SITES_REQUEST_DATA
});

export default allSitesRequestData;
