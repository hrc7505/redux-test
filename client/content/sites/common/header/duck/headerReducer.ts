import HEADER_SET_BREADCRUMB from "content/sites/common/header/duck/actionTypes/HEADER_SET_BREADCRUMB";
import HEADER_SET_COMMANDS from "content/sites/common/header/duck/actionTypes/HEADER_SET_COMMANDS";
import HEADER_SET_ENTITY_TITLE from "content/sites/common/header/duck/actionTypes/HEADER_SET_ENTITY_TITLE";
import IHeaderSetBreadcrumbAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";
import IHeaderState from "content/sites/common/header/duck/interfaces/IHeaderState";

type Action = IHeaderSetBreadcrumbAction | IHeaderSetEntityTitleAction | IHeaderSetCommandsAction;

const defaultState: IHeaderState = {
    breadcrumbPath: null,
    title: null,
    commands: [],
};

export default function headerReducer(state: IHeaderState, action: Action): IHeaderState {
    switch (action.type) {
        case HEADER_SET_BREADCRUMB:
            return {
                ...state,
                breadcrumbPath: action.payload.path
            };

        case HEADER_SET_ENTITY_TITLE:
            return {
                ...state,
                title: action.payload.title
            };

        case HEADER_SET_COMMANDS:
            return {
                ...state,
                commands: action.payload.buttonList
            };

        default:
            return state || defaultState;
    }
}
