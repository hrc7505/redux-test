import CLOSE_RIGHT_PANE from "./action-types/CLOSE_RIGHT_PANE";
import ICloseRightPaneAction from "./actions/models/ICloseRightPaneAction";
import IRightPaneComponentProps from "../right-pane/models/IRightPaneComponentProps";
import IToggleRightPaneAction from "./actions/models/IToggleRightPaneAction";
import TOGGLE_RIGHT_PANE from "./action-types/TOGGLE_RIGHT_PANE";

type Action = IToggleRightPaneAction | ICloseRightPaneAction;

export default function rightPaneReducer(state: IRightPaneComponentProps, action: Action): IRightPaneComponentProps {
    switch (action.type) {
        case TOGGLE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: !state.isRightPaneVisible,
                childComponent: action.childComponent
            };

        case CLOSE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: false
            };

        default:
            return state || {
                isRightPaneVisible: false,
                childComponent: null
            };
    }
}
