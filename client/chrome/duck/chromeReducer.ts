import CLOSE_RIGHT_PANEL from "./action-types/CLOSE_RIGHT_PANEL";
import IChromeState from "./interfaces/IChromeState";
import ICloseRightPanelAction from "./actions/interfaces/ICloseRightPanelAction";
import IOpenRightPanelAction from "./actions/interfaces/IOpenRightPanelAction";
import IRightPanelData from "../right-panel/interfaces/IRightPanelData";
import IToggleLeftPaneAction from "./actions/interfaces/IToggleLeftPaneAction";
import OPEN_RIGHT_PANEL from "./action-types/OPEN_RIGHT_PANEL";
import TOGGLE_LEFT_PANE from "./action-types/TOGGLE_LEFT_PANE";

type Action = IToggleLeftPaneAction | IOpenRightPanelAction | ICloseRightPanelAction;

const chromeDefaultState: IChromeState = {
    rightPanelData: {} as IRightPanelData,
    isRightPanelVisible: false,
    isLeftPaneVisible: false,
    isStandAlone: false
};

export default function chromeReducer(state: IChromeState, action: Action): IChromeState {
    switch (action.type) {
        case TOGGLE_LEFT_PANE:
            return {
                ...state,
                isLeftPaneVisible: !state.isLeftPaneVisible
            };

        case OPEN_RIGHT_PANEL:
            return {
                ...state,
                rightPanelData: action.rightPanelData,
                isRightPanelVisible: true,
            };

        case CLOSE_RIGHT_PANEL:
            return {
                ...state,
                isRightPanelVisible: false
            };

        default:
            return state || chromeDefaultState;
    }
}
