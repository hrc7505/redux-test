import CLOSE_RIGHT_PANEL from "./action-types/CLOSE_RIGHT_PANEL";
import defaultState from "./DefaultState";
import ICloseRightPanelAction from "./actions/models/ICloseRightPanelAction";
import IOpenRightPanelAction from "./actions/models/IOpenRightPanelAction";
import IToggleMenuAction from "./actions/models/IToggleMenuAction";
import OPEN_RIGHT_PANEL from "./action-types/OPEN_RIGHT_PANEL";
import IAppState from "./State";
import TOGGLE_MENU from "./action-types/TOGGLE_MENU";

type Action = IToggleMenuAction | IOpenRightPanelAction | ICloseRightPanelAction;

export default function chromeReducer(state: IAppState, action: Action): IAppState {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                isLeftMenuVisible: !state.isLeftMenuVisible
            };

        case OPEN_RIGHT_PANEL:
            return {
                ...state,
                childComponent: action.childComponent,
                isRightPanelVisible: true,
            };

        case CLOSE_RIGHT_PANEL:
            return {
                ...state,
                isRightPanelVisible: false
            };

        default:
            return state || defaultState;
    }
}
