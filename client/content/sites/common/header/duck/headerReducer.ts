import IHeaderState from "./interfaces/IHeaderState";
import ISetBreadcrumbAction from "./actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "./actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "./actions/interfaces/ISetEntityTitleAction";
import SET_BREADCRUMB from "./actionTypes/SET_BREADCRUMB";
import SET_COMMANDS from "./actionTypes/SET_COMMANDS";
import SET_ENTITY_TITLE from "./actionTypes/SET_ENTITY_TITLE";

type Action = ISetBreadcrumbAction | ISetEntityTitleAction | ISetCommandsAction;

const defaultState: IHeaderState = {
    breadcrumb: null,
    title: null,
    commands: null
};

export default function headerReducer(state: IHeaderState, action: Action): IHeaderState {
    switch (action.type) {
        case SET_BREADCRUMB:
            return {
                ...state,
                breadcrumb: action.payload.breadcrumb
            };

        case SET_ENTITY_TITLE:
            return {
                ...state,
                title: action.payload.title
            };

        case SET_COMMANDS:
            return {
                ...state,
                commands: action.payload.commands
            };

        default:
            return state || defaultState;
    }
}
