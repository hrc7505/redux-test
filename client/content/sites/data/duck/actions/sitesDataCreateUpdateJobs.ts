import ISitesDataCreateUpdateJobsAction from "./interfaces/ISitesDataCreateUpdateJobsAction";
import ISitesDataCreateUpdateJobsPayload from "./interfaces/ISitesDataCreateUpdateJobsPayload";
import SITES_DATA_CREATE_UPDATE_JOBS from "../actionTypes/SITES_DATA_CREATE_UPDATE_JOBS";

export default function sitesDataCreateUpdateSites(
    payload: ISitesDataCreateUpdateJobsPayload
): ISitesDataCreateUpdateJobsAction {
    return {
        type: SITES_DATA_CREATE_UPDATE_JOBS,
        payload
    };
}
