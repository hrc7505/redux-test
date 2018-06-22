import ALL_SITES_LOAD_DATA from "../../actionTypes/ALL_SITES_LOAD_DATA";
import IAllSitesLoadDataPayload from "./IAllSitesLoadDataPayload";

export default interface IAllSitesLoadDataAction {
    type: ALL_SITES_LOAD_DATA;
    payload: IAllSitesLoadDataPayload;
}
