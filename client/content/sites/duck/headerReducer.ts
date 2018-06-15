import IHeaderRightPaneState from "./interfaces/IHeaderState";
import ISetHeaderDataAction from "./actions/interfaces/ISetHeaderDataAction";
import SET_HEADER_DATA from "./actionTypes/SET_HEADER_DATA";

type Action = ISetHeaderDataAction;

const defaultState: IHeaderRightPaneState = {
    breadcrumb: null,
    title: null,
    commands: null
};

export default function headerReducer(state: IHeaderRightPaneState, action: Action): IHeaderRightPaneState {
    switch (action.type) {
        case SET_HEADER_DATA:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state || defaultState;
    }
}
