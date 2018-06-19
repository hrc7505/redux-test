import IAllSitesLoadPayload from "./interfaces/IAllSitesLoadPayload";
import ILoadAllSitesAction from "./interfaces/ILoadAllSitesAction";
import LOAD_ALL_SITES from "../actionTypes/LOAD_ALL_SITES";

export default function loadAllSites(payload: IAllSitesLoadPayload): ILoadAllSitesAction {
    return {
        type: LOAD_ALL_SITES,
        payload
    };
}
