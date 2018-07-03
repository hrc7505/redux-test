import HEADER_SET_BREADCRUMB from "./actionTypes/HEADER_SET_BREADCRUMB";
import HEADER_SET_COMMANDS from "./actionTypes/HEADER_SET_COMMANDS";
import HEADER_SET_ENTITY_TITLE from "./actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderSetBreadcrumbAction from "./actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "./actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "./actions/interfaces/IHeaderSetEntityTitleAction";
import IHeaderState from "./interfaces/IHeaderState";

type Action = IHeaderSetBreadcrumbAction | IHeaderSetEntityTitleAction | IHeaderSetCommandsAction;

const defaultState: IHeaderState = {
    breadcrumb: {
        path: null
    },
    title: null,
    commands: {
        buttonList: []
    }
};

export default function headerReducer(state: IHeaderState, action: Action): IHeaderState {
    switch (action.type) {
        case HEADER_SET_BREADCRUMB:
            return {
                ...state,
                breadcrumb: action.payload
            };

        case HEADER_SET_ENTITY_TITLE:
            return {
                ...state,
                title: action.payload.title
            };

        case HEADER_SET_COMMANDS:
            return {
                ...state,
                commands: {
                    buttonList: action.payload.buttonList
                }
            };

        default:
            return state || defaultState;
    }
}
