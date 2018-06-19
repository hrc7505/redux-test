import IAllSitesState from "../duck/interfaces/IAllSitesState";
import ILoadAllSitesAction from "./actions/interfaces/ILoadAllSitesAction";
import IRequestAllSitesAction from "./actions/interfaces/IRequestAllSitesAction";
import LOAD_ALL_SITES from "./actionTypes/LOAD_ALL_SITES";
import REQUEST_ALL_SITES from "./actionTypes/REQUEST_ALL_SITES";

type Action = IRequestAllSitesAction | ILoadAllSitesAction;

const defaultAllSitesState: IAllSitesState = {
    sites: [],
    isLoading: false
};

export default function allSitesReducer(state: IAllSitesState, action: Action): IAllSitesState {
    switch (action.type) {
        case REQUEST_ALL_SITES:
            return {
                ...state,
                isLoading: true,
            };

        case LOAD_ALL_SITES:
            return {
                ...state,
                isLoading: false,
                sites: action.payload.sites,
            };

        default:
            return state || defaultAllSitesState;
    }
}
