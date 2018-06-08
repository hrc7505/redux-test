import TOGGLE_RIGHT_PANE from "../../action-types/TOGGLE_RIGHT_PANE";

export default interface IToggleRightPaneAction {
    type: TOGGLE_RIGHT_PANE;
    rightPaneData: JSX.Element;
}
