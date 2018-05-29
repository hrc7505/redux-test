import { ICloseRightPanelAction, IOpenRightPanelAction, IToggleMenuAction } from "./actions";
import * as ActionTypes from "./ActionTypes";
import IAppState, { defaultState } from "./State";

type Action = IToggleMenuAction | IOpenRightPanelAction | ICloseRightPanelAction;

export default function appReducer(state: IAppState, action: Action): IAppState {
    switch (action.type) {
        case ActionTypes.TOGGLE_MENU:
            return {
                ...state,
                isLeftMenuVisible: !state.isLeftMenuVisible
            };
        case ActionTypes.OPEN_RIGHT_PANEL:
            return {
                ...state,
                childComponent: action.childComponent,
                isRightPanelVisible: true,
            };

        case ActionTypes.CLOSE_RIGHT_PANEL:
            return {
                ...state,
                isRightPanelVisible: false
            };

        default:
            return state || defaultState;
    }
}
