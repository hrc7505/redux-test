import HEADER_SET_BREADCRUMB from "./actionTypes/HEADER_SET_BREADCRUMB";
import HEADER_SET_COMMANDS from "./actionTypes/HEADER_SET_COMMANDS";
import HEADER_SET_ENTITY_TITLE from "./actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderState from "./interfaces/IHeaderState";
import ISetBreadcrumbAction from "./actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "./actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "./actions/interfaces/ISetEntityTitleAction";

type Action = ISetBreadcrumbAction | ISetEntityTitleAction | ISetCommandsAction;

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
                breadcrumb: { ...action.payload }
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
