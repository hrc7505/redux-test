import IRightPaneComponentProps from "../right-pane/models/IRightPaneComponentProps";
import IToggleRightPaneAction from "./actions/models/IToggleRightPaneAction";
import TOGGLE_RIGHT_PANE from "./action-types/TOGGLE_RIGHT_PANE";

type Action = IToggleRightPaneAction;

export default function rightPanelReducer(state: IRightPaneComponentProps, action: Action): IRightPaneComponentProps {
    switch (action.type) {
        case TOGGLE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: !state.isRightPaneVisible
            };

        default:
            return state || {
                isRightPaneVisible: false
            };
    }
}
