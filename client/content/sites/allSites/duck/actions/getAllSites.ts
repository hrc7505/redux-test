import GET_ALL_SITES from "../actionTypes/GET_ALL_SITES";
import IGetAllSitesAction from "./interfaces/IGetAllSitesAction";

export default function getAllSites(): IGetAllSitesAction {
    return {
        type: GET_ALL_SITES
    };
}
