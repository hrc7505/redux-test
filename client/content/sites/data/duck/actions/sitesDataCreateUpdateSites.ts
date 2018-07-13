import ISitesDataCreateUpdateSitesAction from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import SITES_DATA_CREATE_UPDATE_SITES from "content/sites/data/duck/actionTypes/SITES_DATA_CREATE_UPDATE_SITES";

type SitesDataCreateUpdateSites = (payload: ISitesDataCreateUpdateSitesPayload) => ISitesDataCreateUpdateSitesAction;

const sitesDataCreateUpdateSites: SitesDataCreateUpdateSites =
    (payload: ISitesDataCreateUpdateSitesPayload): ISitesDataCreateUpdateSitesAction => ({
        type: SITES_DATA_CREATE_UPDATE_SITES,
        payload
    });

export default sitesDataCreateUpdateSites;
