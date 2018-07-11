import IAllSitesLoadDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesLoadDataAction";
import IAllSitesRequestDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesRequestDataAction";
import ALL_SITES_LOAD_DATA from "content/sites/allSites/duck/actionTypes/ALL_SITES_LOAD_DATA";
import ALL_SITES_REQUEST_DATA from "content/sites/allSites/duck/actionTypes/ALL_SITES_REQUEST_DATA";
import IAllSitesState from "content/sites/allSites/duck/interfaces/IAllSitesState";

type Action = IAllSitesRequestDataAction | IAllSitesLoadDataAction;

const defaultAllSitesState: IAllSitesState = {
    sites: [],
    isLoading: false
};

type AllSitesReducer = (state: IAllSitesState, action: Action) => IAllSitesState;

const allSitesReducer: AllSitesReducer = (state: IAllSitesState, action: Action): IAllSitesState => {
    switch (action.type) {
        case ALL_SITES_REQUEST_DATA:
            return {
                ...state,
                isLoading: true,
            };

        case ALL_SITES_LOAD_DATA:
            return {
                ...state,
                isLoading: false,
                sites: action.payload.sites,
            };

        default:
            return state || defaultAllSitesState;
    }
};

export default allSitesReducer;
