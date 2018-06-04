import CLOSE_RIGHT_PANEL from "./action-types/CLOSE_RIGHT_PANEL";
import defaultState from "./DefaultState";
import ICloseRightPanelAction from "./actions/interfaces/ICloseRightPanelAction";
import IOpenRightPanelAction from "./actions/interfaces/IOpenRightPanelAction";
import IToggleLeftPaneAction from "./actions/interfaces/IToggleLeftPaneAction";
import OPEN_RIGHT_PANEL from "./action-types/OPEN_RIGHT_PANEL";
import IAppState from "./State";
import TOGGLE_LEFT_PANE from "./action-types/TOGGLE_LEFT_PANE";

type Action = IToggleLeftPaneAction | IOpenRightPanelAction | ICloseRightPanelAction;

export default function chromeReducer(state: IAppState, action: Action): IAppState {
    switch (action.type) {
        case TOGGLE_LEFT_PANE:
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
