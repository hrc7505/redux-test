import ISiteDetailsLoadDataAction from "./actions/interfaces/ISiteDetailsLoadDataAction";
import ISiteDetailsRequestDataAction from "./actions/interfaces/ISiteDetailsRequestDataAction";
import ISiteDetailsState from "../duck/interfaces/ISiteDetailsState";
import SITE_DETAILS_LOAD_DATA from "./actionTypes/SITE_DETAILS_LOAD_DATA";
import SITE_DETAILS_REQUEST_DATA from "./actionTypes/SITE_DETAILS_REQUEST_DATA";

type Action = ISiteDetailsLoadDataAction | ISiteDetailsRequestDataAction;

const defaultState: ISiteDetailsState = {
    isLoading: false,
    site: "0",
    jobs: [],
};

export default function siteDetailsReducer(state: ISiteDetailsState, action: Action): ISiteDetailsState {
    switch (action.type) {
        case SITE_DETAILS_REQUEST_DATA:
            return {
                ...state,
                isLoading: true,
            };

        case SITE_DETAILS_LOAD_DATA:
            return {
                isLoading: false,
                site: action.payload.site,
                jobs: action.payload.jobs,
            };

        default:
            return state || defaultState;
    }
}
