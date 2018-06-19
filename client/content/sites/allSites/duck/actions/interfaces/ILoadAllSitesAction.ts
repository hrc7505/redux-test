import IAllSitesLoadPayload from "./IAllSitesLoadPayload";
import LOAD_ALL_SITES from "../../actionTypes/LOAD_ALL_SITES";

export default interface ILoadAllSitesAction {
    type: LOAD_ALL_SITES;
    payload: IAllSitesLoadPayload;
}
