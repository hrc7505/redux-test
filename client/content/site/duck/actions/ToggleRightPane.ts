import IToggleRightPaneAction from "./interfaces/IToggleRightPaneAction";
import TOGGLE_RIGHT_PANE from "../action-types/TOGGLE_RIGHT_PANE";

export default function toggleRightPane(rightPaneData: JSX.Element): IToggleRightPaneAction {
    return {
        type: TOGGLE_RIGHT_PANE,
        rightPaneData
    };
}
