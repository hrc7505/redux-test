import ISitesDataCreateUpdateJobsPayload from "./ISitesDataCreateUpdateJobsPayload";
import SITES_DATA_CREATE_UPDATE_JOBS from "../../actionTypes/SITES_DATA_CREATE_UPDATE_JOBS";

export default interface ISitesDataCreateUpdateJobsAction {
    type: SITES_DATA_CREATE_UPDATE_JOBS;
    payload: ISitesDataCreateUpdateJobsPayload;
}
