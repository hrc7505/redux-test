import ALL_SITES_LOAD_DATA from "./actionTypes/ALL_SITES_LOAD_DATA";
import ALL_SITES_REQUEST_DATA from "./actionTypes/ALL_SITES_REQUEST_DATA";
import IAllSitesLoadDataAction from "./actions/interfaces/IAllSitesLoadDataAction";
import IAllSitesRequestDataAction from "./actions/interfaces/IAllSitesRequestDataAction";
import IAllSitesState from "../duck/interfaces/IAllSitesState";

type Action = IAllSitesRequestDataAction | IAllSitesLoadDataAction;

const defaultAllSitesState: IAllSitesState = {
    sites: [],
    isLoading: false
};

export default function allSitesReducer(state: IAllSitesState, action: Action): IAllSitesState {
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
}
