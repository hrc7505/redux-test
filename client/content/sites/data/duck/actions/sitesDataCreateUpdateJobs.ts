import ISitesDataCreateUpdateJobsAction from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateJobsAction";
import ISitesDataCreateUpdateJobsPayload from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateJobsPayload";
import SITES_DATA_CREATE_UPDATE_JOBS from "content/sites/data/duck/actionTypes/SITES_DATA_CREATE_UPDATE_JOBS";

type SitesDataCreateUpdateSites = (payload: ISitesDataCreateUpdateJobsPayload) => ISitesDataCreateUpdateJobsAction;

const sitesDataCreateUpdateSites: SitesDataCreateUpdateSites =
    (payload: ISitesDataCreateUpdateJobsPayload): ISitesDataCreateUpdateJobsAction => ({
        type: SITES_DATA_CREATE_UPDATE_JOBS,
        payload
    });

export default sitesDataCreateUpdateSites;
