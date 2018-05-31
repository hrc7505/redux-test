import IToggleRightPaneAction from "./models/IToggleRightPaneAction";
import TOGGLE_RIGHT_PANE from "../action-types/TOGGLE_RIGHT_PANE";

export default function toggleRightPane(childComponent: JSX.Element): IToggleRightPaneAction {
    return {
        type: TOGGLE_RIGHT_PANE,
        childComponent
    };
}
