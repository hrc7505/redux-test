import { merge } from "lodash";

import ISitesDataCreateUpdateJobsAction from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateJobsAction";
import ISitesDataCreateUpdateSitesAction from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataState from "content/sites/data/duck/interfaces/ISitesDataState";
import SITES_DATA_CREATE_UPDATE_JOBS from "content/sites/data/duck/actionTypes/SITES_DATA_CREATE_UPDATE_JOBS";
import SITES_DATA_CREATE_UPDATE_SITES from "content/sites/data/duck/actionTypes/SITES_DATA_CREATE_UPDATE_SITES";

type Action = ISitesDataCreateUpdateJobsAction | ISitesDataCreateUpdateSitesAction;

const defaultSitesDataState: ISitesDataState = {
    sites: { },
    jobs: { },
};

export default function sitesDataReducer(state: ISitesDataState, action: Action): ISitesDataState {
    switch (action.type) {
        case SITES_DATA_CREATE_UPDATE_JOBS:
            return {
                ...state,
                jobs: merge({}, state.jobs, action.payload.jobs),
            };
        case SITES_DATA_CREATE_UPDATE_SITES:
            return {
                ...state,
                sites: merge({}, state.sites, action.payload.sites),
            };
        default:
            return state || defaultSitesDataState;
    }
}
