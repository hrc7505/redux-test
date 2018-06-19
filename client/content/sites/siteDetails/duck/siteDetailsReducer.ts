import GET_SITE_DETAILS from "./actionTypes/GET_SITE_DETAILS";
import IGetSiteDetailsAction from "./actions/interfaces/IGetSiteDetailsAction";
import ISiteDetailsState from "../duck/interfaces/ISitesState";
import sites, { ISiteDetails } from "../../common/detailListHost/testData";

type Action = IGetSiteDetailsAction;

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
            return state || {
                ...state,
                site: null
            };
    }
}
