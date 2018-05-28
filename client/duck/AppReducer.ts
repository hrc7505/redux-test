import { IRightPanelAction, IToggleMenuAction } from "./actions";
import { TOGGLE_MENU } from "./actionTypes";
import { TOGGLE_RIGHT_PANEL } from "./ActionTypes";
import IAppState, { defaultState } from "./State";

type Action = IToggleMenuAction | IRightPanelAction;

const AppReducer: (state: IAppState, action: Action) => IAppState =
    (state: IAppState, action: Action): IAppState => {
        switch (action.type) {
            case TOGGLE_MENU:
                return {
                    ...state,
                    isLeftMenuVisible: !state.isLeftMenuVisible
                };
            case TOGGLE_RIGHT_PANEL:
                return {
                    ...state,
                    isRightPanelVisible: !state.isRightPanelVisible
                };

            default:
                return state || defaultState;
        }
    };

export default AppReducer;
