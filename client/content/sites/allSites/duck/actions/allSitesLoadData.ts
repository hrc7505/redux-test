import IAllSitesLoadDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesLoadDataAction";
import IAllSitesLoadDataPayload from "content/sites/allSites/duck/actions/interfaces/IAllSitesLoadDataPayload";
import ALL_SITES_LOAD_DATA from "content/sites/allSites/duck/actionTypes/ALL_SITES_LOAD_DATA";

type AllSitesLoadData = (payload: IAllSitesLoadDataPayload) => IAllSitesLoadDataAction;

const allSitesLoadData: AllSitesLoadData = (payload: IAllSitesLoadDataPayload): IAllSitesLoadDataAction => ({
    type: ALL_SITES_LOAD_DATA,
    payload
});

export default allSitesLoadData;
