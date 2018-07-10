import ISitesDataCreateUpdateJobsPayload from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateJobsPayload";
import SITES_DATA_CREATE_UPDATE_JOBS from "content/sites/data/duck/actionTypes/SITES_DATA_CREATE_UPDATE_JOBS";

export default interface ISitesDataCreateUpdateJobsAction {
    type: SITES_DATA_CREATE_UPDATE_JOBS;
    payload: ISitesDataCreateUpdateJobsPayload;
}
