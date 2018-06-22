import ALL_SITES_LOAD_DATA from "../actionTypes/ALL_SITES_LOAD_DATA";
import IAllSitesLoadDataAction from "./interfaces/IAllSitesLoadDataAction";
import IAllSitesLoadDataPayload from "./interfaces/IAllSitesLoadDataPayload";

export default function allSitesLoadData(payload: IAllSitesLoadDataPayload): IAllSitesLoadDataAction {
    return {
        type: ALL_SITES_LOAD_DATA,
        payload
    };
}
