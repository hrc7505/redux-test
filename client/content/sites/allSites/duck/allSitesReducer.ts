import GET_ALL_SITES from "./actionTypes/GET_ALL_SITES";
import IAllSitesState from "../duck/interfaces/IAllSitesState";
import IGetAllSitesAction from "./actions/interfaces/IGetAllSitesAction";
import sites from "../../common/detailListHost/testData";

type Action = IGetAllSitesAction;

export default function allSitesReducer(state: IAllSitesState, action: Action): IAllSitesState {
    switch (action.type) {
        case GET_ALL_SITES:
            return { ...state, sites };

        default:
            return state || { ...state, sites };
    }
}
