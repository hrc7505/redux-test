import IRightPaneComponentProps from "../right-pane/interfaces/IRightPaneComponentProps";
import IToggleRightPaneAction from "./actions/interfaces/IToggleRightPaneAction";
import TOGGLE_RIGHT_PANE from "./action-types/TOGGLE_RIGHT_PANE";

type Action = IToggleRightPaneAction;

export default function rightPaneReducer(state: IRightPaneComponentProps, action: Action): IRightPaneComponentProps {
    switch (action.type) {
        case TOGGLE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: !state.isRightPaneVisible,
                childComponent: action.childComponent
            };

        default:
            return state || {
                isRightPaneVisible: false,
                childComponent: null
            };
    }
}
