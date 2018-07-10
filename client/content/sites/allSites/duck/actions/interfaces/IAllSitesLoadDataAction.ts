import ALL_SITES_LOAD_DATA from "content/sites/allSites/duck/actionTypes/ALL_SITES_LOAD_DATA";
import IAllSitesLoadDataPayload from "content/sites/allSites/duck/actions/interfaces/IAllSitesLoadDataPayload";

export default interface IAllSitesLoadDataAction {
    type: ALL_SITES_LOAD_DATA;
    payload: IAllSitesLoadDataPayload;
}
