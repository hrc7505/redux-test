import GET_SITE_DETAILS from "./actionTypes/GET_SITE_DETAILS";
import IGetSiteDetailsAction from "./actions/interfaces/IGetSiteDetailsAction";
import ISiteDetailsState from "../duck/interfaces/ISitesState";
import sites, { ISiteDetails } from "../../common/dummyData/testData";

type Action = IGetSiteDetailsAction;

const defaultState: ISiteDetailsState = {
    site: {} as ISiteDetails
};

export default function siteDetailsReducer(state: ISiteDetailsState, action: Action): ISiteDetailsState {
    switch (action.type) {
        case GET_SITE_DETAILS:
            const index: number = sites.findIndex((site: ISiteDetails) => site.id === action.siteId);

            return {
                ...state,
                site: {
                    ...sites[index]
                }
            };

        default:
            return state || defaultState;
    }
}
